export interface ListItem {
  value: string;
  completed: boolean;
  id?: number;
  user?: string;
  created_time?: number;
  updated_time?: number;
}

export interface deleteItem {
  id: number;
}
