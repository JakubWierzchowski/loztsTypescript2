export interface SelectFormProps<T> {
  validateText: string;
  label: string;
  field: string;
  itemMap: keyof T;
  register: any;
  errors: Record<string, any>;
  defaultValue: string;
  data: T[] | undefined;
}
