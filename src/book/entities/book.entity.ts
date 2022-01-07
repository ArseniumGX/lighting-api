import { Genre } from 'src/genre/entities/genre.entity';

export class Book {
  id?: string;
  title: string;
  resume?: string;
  year: number;
  pages?: number;
  edition?: number;
  author?: string;
  publisher?: string;
  value: number;
  genres?: Genre[];
  createdAt?: Date;
  updatedAt?: Date;
}
