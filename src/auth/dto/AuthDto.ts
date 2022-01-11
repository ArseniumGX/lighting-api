import { ApiOperation, ApiProperty } from '@nestjs/swagger';
import { User } from '@prisma/client';
import {
  IsBoolean,
  IsEmail,
  IsNotEmpty,
  IsNumber,
  IsObject,
  IsString,
  Length
} from 'class-validator';

export class CredentialsDto {
  /**
   * aslkdalksm
   *
   * @example example@email.com
   */
  @IsString()
  @IsEmail()
  @IsNotEmpty()
  email: string;

  /**
   * alkalksd
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
   * Return token
   */
  @IsString()
  token: string;

  /**
   * Return an object type User
   */
  @IsObject()
  user: User;
}

export class Tester {
  /**
   * banana
   *
   * @example abacate
   */
  @ApiProperty()
  @IsString()
  abacate: string;

  /**
   * banana
   *
   * @example 12
   */
  @ApiProperty()
  @IsNumber()
  babana: number;

  /**
   * cabrito
   *
   * @example true
   */
  @ApiProperty()
  @IsBoolean()
  cabitro: boolean;
}
