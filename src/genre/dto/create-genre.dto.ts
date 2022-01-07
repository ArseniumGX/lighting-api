import { IsNotEmpty, IsString, Length } from 'class-validator';
import { Genre } from '../entities/genre.entity';

export class CreateGenreDto extends Genre {
  @IsString()
  @IsNotEmpty()
  @Length(2, 50)
  name: string;
}
