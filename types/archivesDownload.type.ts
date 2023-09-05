export interface DownloadSeason {
  sezon: string;
  details: DownloadGroup[];
}

export interface DownloadGroup {
  kategoria: string;
  details: DownloadDetails[];
}

export interface DownloadDetails {
  title: string;
  download: string;
  index?: number;
}

export interface DownloadDetailsProps {
  kategoria: string;
  index?: number;
  details: DownloadDetails[];
}
