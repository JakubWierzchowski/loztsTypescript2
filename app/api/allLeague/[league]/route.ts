import { buildPath, extractPath } from "@/utils/api/buildExtractPath";
import { LeagueDataItem } from "@/types/league.types";
import moment from "moment";
import { v4 as uuidv4 } from "uuid";
import { NextResponse, NextRequest } from "next/server";
import fs from "fs";

export async function GET(req: Request, res: Response) {
  const filePath = buildPath("league.json");
  const leagueData = extractPath<LeagueDataItem[]>(filePath);
  const url = new URL(req.url);

  const newUrl = url.pathname.replace("/api/allLeague/", "");

  const filterCategory = leagueData.find(
    (item2: { league: string }) => item2.league === newUrl
  );
  return new Response(JSON.stringify(filterCategory));
}
