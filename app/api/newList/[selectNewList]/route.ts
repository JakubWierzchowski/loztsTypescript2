import fs from "fs";
import { CalendarTypeMonth, PlayersType } from "@/types/calendar.type";
import moment from "moment";
import { v4 as uuidv4 } from "uuid";
import { buildPath, extractPath } from "@/utils/api/buildExtractPath";
import { Article } from "@/types/newList.type";

export async function GET(req: Request, res: Response) {
  const filePath = buildPath("article.json");
  const articlesData = extractPath<Article[]>(filePath);
  const url = new URL(req.url);
  const newUrl = url.pathname.replace("/api/newList/", "");

  const filterCategory = articlesData.find((item) => item.id === newUrl);

  return new Response(JSON.stringify(filterCategory));
}

export async function DELETE(req: Request, res: Response) {
  const filePath = buildPath("article.json");
  const articlesData = extractPath<Article[]>(filePath);
  const url = new URL(req.url);
  const newUrl = url.pathname.replace("/api/newList/", "");
  const index = articlesData.findIndex((article) => article.id === newUrl);
  const deleteArticle = articlesData.splice(index, 1);
  fs.writeFileSync(filePath, JSON.stringify(articlesData));
  return new Response(
    JSON.stringify({ message: "Usunieto artykul", deleteArticle })
  );
}

// export async function GET(req: Request, res: Response) {
//   const filePath = buildPath("league.json");
//   const leagueData = extractPath<LeagueDataItem[]>(filePath);
//   const url = new URL(req.url);
//   const newUrl = url.pathname.replace("/api/league/", "");

//   const filterCategory = leagueData.find((item) => item.league === newUrl);

//   return new Response(JSON.stringify(filterCategory));
// }

// export async function DELETE(req: Request, res: Response) {
//   const filePath = buildPath("league.json");
//   const leagueData = extractPath<LeagueDataItem[]>(filePath);
//   const url = new URL(req.url);
//   const newUrl = url.pathname.replace("/api/league/", "");
//   try {
//     const index = leagueData.map((item) =>
//       item.queueDetails.findIndex((ids) => ids.id === newUrl)
//     );
//     const deleteQueue = leagueData.map((item) =>
//       item.queueDetails.splice(index, 1)
//     );
//     fs.writeFileSync(filePath, JSON.stringify(leagueData));
//     return new Response(
//       JSON.stringify({ message: "Usunieto artykul", deleteQueue })
//     );
//   } catch (error) {
//     return new Response(JSON.stringify({ message: "Wystąpił błąd" }));
//   }
// }
