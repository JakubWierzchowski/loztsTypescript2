import { CalendarTypeMonth } from '@/types/calendar.type';

import { buildPath, extractPath } from '@/utils/api/buildExtractPath';

export async function GET(req: Request, res: Response) {
  const filePath = buildPath('calendarDate.json');
  const calendar = extractPath<CalendarTypeMonth[]>(filePath);
  const url = new URL(req.url);
  const newUrl = url.pathname.replace('/api/calendar/', '');
  const filterCategory = calendar.map((item) => item.details.find((item2) => item2.link === newUrl));
  return new Response(JSON.stringify(filterCategory));
}
