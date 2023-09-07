import fs from "fs";
import { CalendarTypeMonth, PlayersType } from "@/types/calendar.type";
import moment from "moment";
import { v4 as uuidv4 } from "uuid";
import { buildPath, extractPath } from "@/utils/api/buildExtractPath";
import { Article } from "@/types/newList.type";
import { NextResponse } from "next/server";

export async function GET(req: Request, res: Response) {
  const filePath = buildPath("article.json");
  const articlesData = extractPath<Article[]>(filePath);

  return new Response(JSON.stringify(articlesData));
}

export async function POST(req: Request, res: Response) {
  const filePath = buildPath("article.json");
  const articlesData = extractPath<Article[]>(filePath);
  const myDate2 = moment().format("DD.MM.YYYY");
  const { title, text, signature } = await req.json();
  const newArticle = {
    id: uuidv4(),
    title: title,
    text: text,
    timeadd: myDate2,
    signature: signature,
    sortDate: new Date().toISOString(),
  };

  const existingArticle = articlesData.find(
    (item: any) => item.title === newArticle.title
  );

  if (existingArticle) {
    return NextResponse.json(
      { message: "istnieje", newArticle },
      { status: 409 }
    );
  }

  articlesData.push(newArticle);
  fs.writeFileSync(filePath, JSON.stringify(articlesData));
  return new Response(
    JSON.stringify({ message: "Dodano zawodnika", article: newArticle })
  );
}
