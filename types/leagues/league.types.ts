export interface TeamData {
  guest: string;
  guestScore: number;
  host: string;
  hostScore: number;
}

export interface LeagueDetail {
  team: string;
  result: number[];
  wyniki: number[];
  id?: number;
  gamesNumber: number;
  pkt: number;
  winMatches: number;
  lossMatches: number;
}

export interface DataPropsQueueDetails {
  data: QueueDetailsFirebase[];
  leaguePath: string;
}

export interface QueueDetailsFirebase {
  id: string;
  host: string;
  guest: string;
  hostScore: number;
  guestScore: number;
  queueNumber: string;
  link: string;
  img: string;
  user: string;
}

export interface LeagueDataItem {
  league: string;
  season: string;
  leagueDetails: LeagueDetails[];
  queueDetails: QueueDetails[];
}

export interface LeagueDetails {
  month: string;
  details: LeagueDetail[];
  title?: string;
}

export interface QueueDetails {
  id: string;
  day: string;
  matchDay: string;
}

export type FormValuesFirebase = {
  host: string;
  guest: string;
  hostScore: string;
  guestScore: string;
  queueNumber: string;
  img?: FileList;
};
export interface AddQueueProps {
  handleCloseModal?: () => void;
  leaguePath: string;
  queueDetails: QueueDetails[];
  leagueDetails: LeagueDetail[];
}

export interface AddQueueModalProps {
  isOpen: boolean;
  handleCloseModal?: () => void;
  leaguePath: string;
  queueDetails: QueueDetails[];
  leagueDetails: LeagueDetail[];
  fetchData: () => void;
}

export interface AddLeagueMatchdayProps {
  leaguePath: string;
  fetchData: () => void;
}

export type FormValuesDataMatch = {
  matchDay: string;
  path?: string;
};

export interface QueueResultProps {
  leaguePath: string;
  firebaseLeague: QueueDetailsFirebase[] | any;
  findLeague: LeagueDataItem | undefined;
  fetchData: () => void;
}

export interface leaguePageDetails {
  params: { liga: string };
}
