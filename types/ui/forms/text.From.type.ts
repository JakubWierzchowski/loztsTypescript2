import { BlobOptions } from 'buffer';

export interface TextFormProps {
  validateText: string;
  label: string;
  field: string;
  placeholder: string;
  register: any;
  errors: any;
  isTextArea?: boolean;
  type?: 'text' | 'file' | 'number' | 'password';
}
