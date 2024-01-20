export interface CalendarTypeMonth {
  month: string;
  dataMonth: string;
  details: CalendarTypeDetails[];
}

export interface CalendarTypeDetails {
  player?: string;
  timeadd?: string;
  users?: string;
  club?: string;
  id?: string;
  title: string;
  link: string | undefined;
  data: string;
  place: string;
  categories: string;
  datamoment: string;
  datamomentInvite?: string | undefined;
  typeofTournaments?: CalendarTypeTournaments[] | undefined;
  players: PlayersType[] | undefined;
}

export interface CalendarTypeTournaments {
  title: string;
  table: Categories[];
}

export interface Categories {
  [key: string]: string;
}
export interface PlayersType {
  id: string;
  player: string;
  club: string;
  timeadd: string;
  tournament: string;
  gender: string;
  users: string;
}

export interface ClockProps {
  findTournaments: (CalendarTypeDetails | undefined)[];
  tournaments: string;
  timeDone: boolean;
  setTimeDone: React.Dispatch<React.SetStateAction<boolean>>;
  fetchData: () => void;
}

export interface ClockDetailsProps {
  setTimeDone: (value: boolean) => void;
  settimeToMuch: (value: boolean) => void;
  timeToMuch?: boolean;
  findTournaments: (CalendarTypeDetails | undefined)[];
  setLoading: (isLoading: boolean) => void;
}

export interface ListProps {
  $inView?: boolean;
  $index?: string;
}

export interface CalendarDetailsProps {
  details: CalendarTypeDetails[];
  index: number;
  month: string;
}

export interface CalendarTournamentProps {
  details: CalendarTypeDetails[];
  index: number;
  title: string;
  timeDone: boolean;
  pathTournament: string;
  fetchData: () => void;
}

export interface CalendarItemPropsMainPage {
  month: string;
  dataMonth: string;
  details: CalendarTypeDetails[];
  index?: number;
}

export interface CalendarTournamentPageProps {
  params: { tournamentsId: string };
}

export interface ModalAddPlayerProps {
  handleClose: () => void;
  findTournaments: (CalendarTypeDetails | undefined)[];
  tournaments: string;
  fetchData: () => void;
}

export type FormValuesAddPlayer = {
  zawodnicy: string;
  klub: string;
  kategoria: string;
};
