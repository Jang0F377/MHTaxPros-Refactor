export interface NewsCards {
  id: number;
  title: string;
  image: string;
  description: string;
  href: string;
}

export interface D2R {
  entity: string;
  form: string;
  dueDate: string;
  extendedDueDate: string;
}

export interface Months {
  [index: number]: Months;
  name: string;
  days: number;
}
