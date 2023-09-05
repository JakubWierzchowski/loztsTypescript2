export interface DownloadData {
  month?: string;
  download?: DownloadItem[];
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
