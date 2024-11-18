export interface SubItem {
  id: number;
  title: string;
  description: string;
  status: string;
}

export interface Job {
  id: number;
  title: string;
  description: string;
  subItems: SubItem[];
}
