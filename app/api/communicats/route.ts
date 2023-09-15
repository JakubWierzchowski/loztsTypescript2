import { extname, join } from "path";
import { stat, mkdir, writeFile } from "fs/promises";
import { NextRequest, NextResponse } from "next/server";
import { buildPath, extractPath } from "@/utils/api/buildExtractPath";
import { DownloadData } from "@/types/communicats.type";
import { v4 as uuidv4 } from "uuid";

function sanitizeFilename(filename: string): string {
  return filename.replace(/[^a-zA-Z0-9_\u0600-\u06FF.]/g, "_");
}

export async function POST(request: NextRequest, res: any) {
  const formData = await request.formData();

  const file = formData.get("myImage") as Blob | null;
  if (!file) {
    return NextResponse.json({ error: "Plik jest wymagany" }, { status: 401 });
  }

  const buffer = Buffer.from(await file.arrayBuffer());
  const MAX_FILE_SIZE = 2 * 1024 * 1024;
  if (file.size > MAX_FILE_SIZE) {
    return NextResponse.json(
      {
        message: "Przesłany plik jest za duży. Maksymalna wielkość to 2MB",
      },
      { status: 402 }
    );
  }

  const pathDist: string = join(
    process.cwd(),
    "/public/downloadFiles/Sezon23-24"
  );
  const uploadDir = join(pathDist);

  try {
    await stat(uploadDir);
  } catch (e: any) {
    if (e.code === "ENOENT") {
      await mkdir(uploadDir, { recursive: true });
    } else {
      NextResponse.json(
        { message: "Wystąpił błąd z utworzeniem folderu dla wybranego pliku" },
        { status: 403 }
      );
      return NextResponse.json(
        { message: "Something went wrong." },
        { status: 500 }
      );
    }
  }

  try {
    const fileExtension = extname(file.name);
    const originalFilename = file.name.replace(/\.[^/.]+$/, "");
    const sanitizedFilename = sanitizeFilename(originalFilename);
    const filename = `${sanitizedFilename}_${fileExtension}`;
    await writeFile(`${uploadDir}/${filename}`, buffer);

    const finalFilePath = "/downloadFiles/Sezon23-24/" + `${filename}`;

    const month = formData.get("month");

    const komunikatyFilePath = buildPath("download.json");
    const komunikatyData = extractPath<DownloadData[] | any>(
      komunikatyFilePath
    );

    const existingCategory = komunikatyData.find(
      (item: any) => item.month === month
    );

    if (
      existingCategory &&
      existingCategory.details &&
      existingCategory.details.some((item: any) => item.fileName === filename)
    ) {
      return NextResponse.json(
        { message: "Taki komunikat juz istnieje", filename },
        { status: 409 }
      );
    } else if (existingCategory && existingCategory.details) {
      existingCategory.details.push({
        id: uuidv4(),
        fileName: filename,
        link: finalFilePath,
      });
    } else {
      return komunikatyData;
    }

    await writeFile(
      komunikatyFilePath,
      JSON.stringify(komunikatyData, null, 2)
    );

    return NextResponse.json(
      { message: "Dodano komunikat:", filename },
      { status: 200 }
    );
  } catch (e) {
    console.error("Error while trying to upload a file", e);
    return NextResponse.json(
      { message: "Coś poszło nie tak" },
      { status: 500 }
    );
  }
}
