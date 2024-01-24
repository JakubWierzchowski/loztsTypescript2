export interface RequestOptions<T> {
  apiUrl: string;
  defaultFields?: Array<keyof T>;
}
