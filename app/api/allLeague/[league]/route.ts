import { buildPath, extractPath } from '@/utils/api/buildExtractPath';
import { LeagueDataItem } from '@/types/leagues/league.types';

export async function GET(req: Request, res: Response) {
  const filePath = buildPath('league.json');
  const leagueData = extractPath<LeagueDataItem[]>(filePath);
  const url = new URL(req.url);

  const newUrl = url.pathname.replace('/api/allLeague/', '');

  const filterCategory = leagueData.find((item2: { league: string }) => item2.league === newUrl);
  return new Response(JSON.stringify(filterCategory));
}
