import { buildPath, extractPath } from "@/utils/api/buildExtractPath";
import { LeagueDataItem } from "@/types/league.types";
import moment from "moment";
import { v4 as uuidv4 } from "uuid";
import { NextResponse } from "next/server";
import fs from "fs";

export async function GET(req: Request, res: Response) {
  const filePath = buildPath("league.json");
  const leagueData = extractPath<LeagueDataItem[]>(filePath);
  return new Response(JSON.stringify(leagueData));
}

export async function POST(req: Request, res: Response) {
  const filePath = buildPath("league.json");
  const leagueData = extractPath<LeagueDataItem[]>(filePath);

  const myDate = moment().format("YYYY-DD-MM HH:mm:ss");
  const { matchDay, path } = await req.json();
  const leagueDataFilter = leagueData.filter(
    (item: { league: string }) => item.league === path
  );
  const newMatchDate = {
    id: uuidv4(),
    day: new Date().toISOString(),
    matchDay: matchDay,
  };

  const existingCategory = leagueDataFilter.flatMap((item: any) =>
    item.queueDetails.filter(
      (item2: { matchDay: string }) => item2.matchDay === newMatchDate.matchDay
    )
  );

  if (existingCategory.length > 0) {
    return NextResponse.json(
      { message: "Taka kolejka już istnieje" },
      { status: 409 }
    );
  }

  if (!leagueData.find((item) => item.queueDetails)) {
    return NextResponse.json(
      { message: "Nie można znaleźć takiej ligi" },
      { status: 404 }
    );
  }

  if (leagueDataFilter) {
    leagueDataFilter.map((item) => item.queueDetails.push(newMatchDate));
  }

  fs.writeFileSync(filePath, JSON.stringify(leagueData, null, 2));
  return new Response(
    JSON.stringify({ message: "Dodano kolejkę", newMatchDate })
  );
}
