import { User } from '@prisma/client';
import {
  IsEmail,
  IsNotEmpty,
  IsObject,
  IsString,
  Length
} from 'class-validator';

export class CredentialsDto {
  /**
   * Email valido para o usuário
   *
   * @example example@email.com
   */
  @IsString()
  @IsEmail()
  @IsNotEmpty()
  email: string;

  /**
   * Senha do usuário cadastrado
   *
   * @example 'senha123'
   */
  @IsString()
  @IsNotEmpty()
  @Length(5, 16)
  password: string;
}

export class AuthResponse {
  /**
   * Token for user authenticate
   *
   * @returns
   */
  @IsString()
  token: string;

  /**
   * Return an object type User
   *
   * @returns
   */
  @IsObject()
  user: User;
}
