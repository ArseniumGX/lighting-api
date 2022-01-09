import {
  IsDateString,
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsPhoneNumber,
  IsString,
  IsUrl,
  Length
} from 'class-validator';
import { User } from '../entities/User.entity';

export class CreateUserDto extends User {
  /**
   * Nome do usuário
   *
   * @example 'João da Neve'
   */
  @IsString()
  // @IsOptional()
  @IsNotEmpty()
  @Length(2, 50)
  name: string;

  /**
   * Avatar image url do usuário.
   *
   * @example https://image.com/user.jpg
   */
  @IsString()
  @IsOptional()
  @IsNotEmpty()
  @IsUrl()
  avatar?: string;

  /**
   * Data de nascimento do usuário no formato 'YYYY-MM-DD'. Campo opcional
   *
   * @example '2012-12-21
   */
  @IsString()
  // @IsOptional()
  @IsNotEmpty()
  @Length(2, 50)
  @IsDateString()
  birthdate: string;

  /**
   * Genero do usuário. 'masculino' ou 'feminino
   *
   * @example masculino | feminino
   */
  @IsString()
  @IsNotEmpty()
  @Length(5, 20)
  gender: 'masculino' | 'feminino';

  /**
   * Número de contato perfil do usuário
   *
   * @example '43 99999-9999'
   */
  @IsString()
  // @IsOptional()
  @IsNotEmpty()
  @IsPhoneNumber('BR')
  phone: string;

  /**
   * Email válido do usuário.
   *
   * @example 'example@mail.com'
   */
  @IsString()
  @IsNotEmpty()
  @IsEmail()
  email: string;

  /**
   * Senha do usuário.
   *
   * @example 'senha123'
   */
  @IsString()
  @IsNotEmpty()
  @Length(5, 16)
  password: string;

  /**
   * Senha de confirmação do usuário.
   *
   * @example 'senha123'
   */
  @IsString()
  @IsNotEmpty()
  @Length(5, 16)
  passwordConfirm: string;
}
