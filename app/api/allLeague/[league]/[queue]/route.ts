import fs from "fs";
import { LeagueDataItem } from "@/types/league.types";
import { buildPath, extractPath } from "@/utils/api/buildExtractPath";

export async function GET(req: Request, res: Response) {
  const filePath = buildPath("league.json");
  const leagueData = extractPath<LeagueDataItem[]>(filePath);
  const url = new URL(req.url);

  const newUrl = url.pathname.replace(`/api/allLeague/`, "");
  const newLink = newUrl.split("/");
  const newLiga = newLink[0];
  const newId = newLink[1];

  const filterCategory = leagueData.map((item) =>
    item.queueDetails.find((item2: { id: string }) => item2.id === newId)
  );
  return new Response(JSON.stringify(filterCategory));
}

export async function DELETE(req: Request, res: Response) {
  const filePath = buildPath("league.json");
  const leagueData = extractPath<LeagueDataItem[]>(filePath);
  const url = new URL(req.url);
  const newUrl = url.pathname.replace(`/api/allLeague/`, "");
  const newLink = newUrl.split("/");
  const newLeague = newLink[0];
  const newId = newLink[1];

  try {
    const filterLeague = leagueData.filter((item) => item.league === newLeague);

    const [findIndex] = filterLeague.map((item) =>
      item.queueDetails.findIndex((ids) => ids.id === newId)
    );

    const deleteQueue = filterLeague.map((item) =>
      item.queueDetails.splice(findIndex, 1)
    );
    fs.writeFileSync(filePath, JSON.stringify(leagueData));
    return new Response(
      JSON.stringify({ message: "Usunieto artykul", deleteQueue })
    );
  } catch (error) {
    return new Response(JSON.stringify({ message: "Wystąpił błąd" }));
  }
}

// export async function DELETE(req: Request, res: Response) {
//
//   const url = new URL(req.url);
//   const newUrl = url.pathname.replace("/api/league/", "");
//   const filterTournament = leagueData.map((item) =>
//     item.queueDetails.find((item) => item.id === newUrl)
//   );
//   try {
//     const findIndex = leagueData
//       .map((item) => item.queueDetails.findIndex((ids) => ids.id === newUrl))
//       .flat();

//     const filteredFindIndex = findIndex.filter((index) => index !== undefined);

//     const filterPlayer = filteredFindIndex.filter((item) => item !== -1);
//     console.log(filterPlayer);
//     const deleteQueue = leagueData.map((item) =>
//       item.queueDetails.splice(index, 1)
//     );
//     fs.writeFileSync(filePath, JSON.stringify(leagueData));
//     return new Response(JSON.stringify({ message: "Usunieto artykul" }));
//   } catch (error) {
//     return new Response(JSON.stringify({ message: "Wystąpił błąd" }));
//   }
// }
