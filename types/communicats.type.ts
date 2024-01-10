export interface DownloadData {
  month: string;
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

export interface CommunicatsModalProps {
  isOpen: boolean;
  handleClose: () => void;
  data: DownloadDetails[] | undefined;
  user?: { email: string } | undefined;
  category: string;
  deleteCommunicat?: (id: string) => void;
}

export interface HandleUpdateProps {
  data: DownloadData[];
  category: string;
}

export type FormValuesCommunicats = {
  myFile?: FileList;
  month: string;
};
