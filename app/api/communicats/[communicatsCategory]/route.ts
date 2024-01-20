import path from 'path';
import fs from 'fs';
import { DownloadData, DownloadItem } from '@/types/communicats.type';
import { buildPath, extractPath } from '@/utils/api/buildExtractPath';
import { NextResponse } from 'next/server';

export async function GET(req: Request, res: Response) {
  const filePath = buildPath('download.json');
  const downloadData = extractPath<DownloadData[] | any>(filePath);
  const url = new URL(req.url);
  const newUrl = url.pathname.replace('/api/communicats/', '');

  const filterCategory = downloadData.find((item: DownloadItem) => item.apiLink === newUrl);
  return new Response(JSON.stringify(filterCategory));
}

export async function DELETE(req: Request, res: Response) {
  const filePath = buildPath('download.json');
  const downloadData = extractPath<DownloadData[] | any>(filePath);
  const { id } = await req.json();
  const url = new URL(req.url);
  const newUrl = url.pathname.replace('/api/communicats/', '');
  const filterCategory: any = downloadData.find((item: DownloadItem) => item.apiLink === newUrl);

  const deletedPlayer = filterCategory.details.find((file: any) => file.id === id);

  const index = filterCategory.details.findIndex((file: any) => file.id === id);
  if (index !== -1) {
    const filePathToDelete = path.join(process.cwd(), '/public/downloadFiles/Sezon23-24/', deletedPlayer.fileName);
    fs.unlinkSync(filePathToDelete);

    filterCategory.details.splice(index, 1);

    fs.writeFileSync(path.join(process.cwd(), 'data/download.json'), JSON.stringify(downloadData));
    return NextResponse.json({ message: 'Usunięto komunikat:', deletedPlayer }, { status: 200 });
  }
}
