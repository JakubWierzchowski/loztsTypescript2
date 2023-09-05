export interface SuccessDetails {
  date: string;
  name: SuccessName[];
}
export interface SuccessName {
  player: string;
  title: string;
}

export interface OurSuccessesProps {
  details: Details;
  index: number;
}
export interface Details {
  date: string;
  name: SuccessName[];
}

export interface ListProps {
  $inView?: boolean;
  $index?: string;
}
