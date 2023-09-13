import fs from "fs";
import { CalendarTypeMonth, PlayersType } from "@/types/calendar.type";
import moment from "moment";
import { v4 as uuidv4 } from "uuid";
import { buildPath, extractPath } from "@/utils/api/buildExtractPath";
import { NextResponse } from "next/server";

export async function GET(req: Request, res: Response) {
  const filePath = buildPath("calendarDate.json");
  const calendar = extractPath<CalendarTypeMonth[]>(filePath);
  return new Response(JSON.stringify(calendar));
}

export async function POST(req: Request, res: Response) {
  const filePath = buildPath("calendarDate.json");
  const calendar = extractPath<CalendarTypeMonth[]>(filePath);
  const myDate = moment().format("YYYY-MM-DD HH:mm:ss");
  const { player, club, turnament, gender, users } = await req.json();
  const detailsBoolien = calendar.map((item) => item.details);
  const newPlayer = {
    id: uuidv4(),
    player: player,
    club: club,
    timeadd: myDate,
    tournament: turnament,
    gender: gender,
    users: users,
  };

  const playerExistsInTournament = calendar.some((item) =>
    item.details.some(
      (item2) =>
        item2.link === newPlayer.tournament &&
        item2.players &&
        item2.players.find(
          (existingPlayer) => existingPlayer.player === newPlayer.player
        )
    )
  );

  if (playerExistsInTournament) {
    return NextResponse.json(
      {
        message: "Taki zawodnik już istnieje w tym turnieju",
        newPlayer,
        status: 409,
      },
      { status: 409 }
    );
  }

  const newAllDetails = calendar.map((item) => {
    return {
      month: item.month,
      dataMonth: item.dataMonth,
      details: item.details.map((item2) => {
        if (item2.link === turnament) {
          const players: PlayersType[] = item2.players ?? [];
          return {
            ...item2,
            players: [...players, newPlayer],
          };
        }
        return item2;
      }),
    };
  });

  if (!detailsBoolien) {
    return NextResponse.json(
      { message: "Nie można znaleźć takiego turnieju" },
      { status: 404 }
    );
  }
  fs.writeFileSync(filePath, JSON.stringify(newAllDetails, null, 2));
  return NextResponse.json(
    { message: "Dodano zawodnika:", player: newPlayer },
    { status: 200 }
  );
}
