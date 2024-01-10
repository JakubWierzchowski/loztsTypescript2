import fs from 'fs';
import { CalendarTypeMonth } from '@/types/calendar.type';
import { buildPath, extractPath } from '@/utils/api/buildExtractPath';

export async function GET(req: Request, res: Response) {
  const filePath = buildPath('calendarDate.json');
  const calendar = extractPath<CalendarTypeMonth[]>(filePath);
  const url = new URL(req.url);
  const newUrl = url.pathname.replace('/api/calendar/', '');
  const newLink = newUrl.split('/');
  const newId = newLink[1];
  const filterCategory = calendar.map((item) =>
    item.details.map((item) => item.players?.find((item) => item.id === newId))
  );

  return new Response(JSON.stringify(filterCategory));
}

export async function DELETE(req: Request, res: Response) {
  const filePath = buildPath('calendarDate.json');
  const calendar = extractPath<CalendarTypeMonth[]>(filePath);

  const url = new URL(req.url);
  const newUrl = url.pathname.replace('/api/calendar/', '');
  const newLink = newUrl.split('/');
  const tournamentPath = newLink[0];
  const newId = newLink[1];

  const filterTournament = calendar.map((item) => item.details.find((item2) => item2.link === tournamentPath));

  const filterPlayer = filterTournament.map((item) => item?.players?.find((player) => player.id === newId));

  const findIndex = filterTournament.map((item) => item?.players?.findIndex((player) => player.id === newId)).flat();

  const filteredFindIndex = findIndex.filter((index) => index !== undefined);

  filterTournament.forEach((item) => {
    if (item) {
      item.players = item?.players?.filter((_, index) => {
        return !filteredFindIndex.includes(index);
      });
    }
  });

  fs.writeFileSync(filePath, JSON.stringify(calendar));
  return new Response(JSON.stringify({ message: 'Usunieto zawodnika:', filterPlayer }));
}
