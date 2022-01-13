import { Type } from 'class-transformer';
import {
  IsInt,
  IsNotEmpty,
  IsNumber,
  IsString,
  IsUrl,
  Length
} from 'class-validator';
import { Book } from '../entities/book.entity';

export class CreateBookDto extends Book {
  /**
   * Título do livro
   *
   * @example Livro Sem Nome
   */
  @IsString()
  @IsNotEmpty()
  @Length(2, 30)
  title: string;

  /**
   * sinopse ou resumo do livro
   *
   * @example Este é o projeto de um livro fictício criado para exemplificar esse projeto
   */
  @IsString()
  @IsNotEmpty()
  synopsis: string;

  /**
   * Url da capa do livro
   *
   * @example http://biblioteca.com/livro.png
   */
  @IsString()
  @IsUrl()
  @IsNotEmpty()
  cover: string;

  /**
   * Autor(a) do livro
   *
   * @example João da Neve
   */
  @IsString()
  @IsNotEmpty()
  author: string;

  /**
   * Editora do livro
   *
   * @example 'ABC'
   */
  @IsString()
  @IsNotEmpty()
  publisher: string;

  /**
   * Ano do livro
   *
   * @example 2021
   */
  @IsInt()
  @IsNotEmpty()
  year: number;

  /**
   * Número total de páginas do livro
   *
   * @example 432
   */
  @IsInt()
  @IsNotEmpty()
  pages: number;

  /**
   * Preço do livro
   *
   * @example 39.90
   */
  @IsNumber()
  @IsNotEmpty()
  price: number;
}
