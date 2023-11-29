export interface NewListModalProps {
  fetchData: () => void;
  handleCloseModal?: () => void;
}
export type FormValues = {
  title: string;
  text: string;
  signature: string;
};

export interface Article {
  id: string;
  timeAdd?: string;
  title: string;
  text: string;
  timeadd: string;
  signature: string;
  sortDate: string;
}

export type DataSubmit = {
  title: string;
  text: string;
  signature: string;
};
