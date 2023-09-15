export interface DownloadData {
  month?: string;
  download?: DownloadItem[];
  apiLink?: string;
}

export interface DownloadItem {
  month: string;
  apiLink: string;
  categories: string;
  img: string;
  details: DownloadDetails[];
}

export interface DownloadDetails {
  id: string;
  fileName: string;
  link: string;
}
