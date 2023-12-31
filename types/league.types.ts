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
  id: number;
  resultSum?: number;
  wynikiSum?: number;
}

export interface LeagueDetails {
  month: string;
  details: LeagueDetail[];
}

export interface QueueDetails {
  id: string;
  day: string;
  matchDay: string;
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

export interface AddQueueSchudleProps {
  leaguePath: string;
  findLeague: LeagueDataItem | undefined;
  fetchData: () => void;
}

export type FormValuesDataMatch = {
  matchDay: string;
  path?: string;
};

export interface QueueResultProps {
  leaguePath: string;
  findLeague: LeagueDataItem | undefined;
  firebaseLeague: any;
  fetchData: () => void;
}

export interface leaguePageDetails {
  params: { liga: string };
}
