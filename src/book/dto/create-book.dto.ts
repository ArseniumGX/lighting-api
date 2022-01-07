import { Type } from 'class-transformer';
import {
  IsArray,
  IsInt,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  Length,
  ValidateNested
} from 'class-validator';
import { CreateGenreDto } from 'src/genre/dto/create-genre.dto';
import { Book } from '../entities/book.entity';

export class CreateBookDto extends Book {
  /**
   * Description
   *
   * @example 'Twilight'
   */
  @IsString()
  @IsNotEmpty()
  @Length(2, 30)
  title: string;

  /**
   * Description
   *
   * @example 'Twilight'
   */
  @IsString()
  @IsNotEmpty()
  @IsOptional()
  resume?: string | null;

  /**
   * Description
   *
   * @example 'Twilight'
   */
  @IsInt()
  @IsNotEmpty()
  year: number;

  /**
   * Description
   *
   * @example 'Twilight'
   */
  @IsInt()
  @IsNotEmpty()
  @IsOptional()
  pages?: number | null;

  /**
   * Description
   *
   * @example 'Twilight'
   */
  @IsInt()
  @IsNotEmpty()
  @IsOptional()
  edition?: number | null;

  /**
   * Description
   *
   * @example 'Twilight'
   */
  @IsString()
  @IsNotEmpty()
  @IsOptional()
  author?: string | null;

  /**
   * Description
   *
   * @example 'Twilight'
   */
  @IsString()
  @IsNotEmpty()
  @IsOptional()
  publisher?: string | null;

  /**
   * Description
   *
   * @example 'Twilight'
   */
  @IsNumber()
  @IsNotEmpty()
  value: number;

  /**
   * Description
   *
   * @example 'Twilight'
   */
  @ValidateNested({ each: true })
  @Type(() => CreateBookDto)
  @IsArray()
  @IsOptional()
  genres?: CreateGenreDto[];
}
