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
import { Book } from '../entities/book.entity';

export class CreateBookDto extends Book {
  /**
   * Description
   *
   * @example 'Crepusculo'
   */
  @IsString()
  @IsNotEmpty()
  @Length(2, 30)
  title: string;

  /**
   * Description
   *
   * @example 'É uma historia de uma prjeto de vampiro que se apixona e treta com um lobo enquanto os xmen ficam de olho nele'
   */
  @IsString()
  @IsNotEmpty()
  @IsOptional()
  resume?: string | null;

  /**
   * Description
   *
   * @example 2008
   */
  @IsInt()
  @IsNotEmpty()
  year: number;

  /**
   * Description
   *
   * @example 432
   */
  @IsInt()
  @IsNotEmpty()
  @IsOptional()
  pages?: number | null;

  /**
   * Description
   *
   * @example 1ª
   */
  @IsInt()
  @IsNotEmpty()
  @IsOptional()
  edition?: number | null;

  /**
   * Description
   *
   * @example Stephanie Meyer
   */
  @IsString()
  @IsNotEmpty()
  @IsOptional()
  author?: string | null;

  /**
   * Description
   *
   * @example 'Sei la'
   */
  @IsString()
  @IsNotEmpty()
  @IsOptional()
  publisher?: string | null;

  /**
   * Description
   *
   * @example 39.90
   */
  @IsNumber()
  @IsNotEmpty()
  value: number;
}
