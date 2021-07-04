import { Person } from "./Person";

export interface Categories {
  id: number;
  categorie: string;
  persons: Array<Person>;
}
