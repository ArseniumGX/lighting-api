import {
  IsDateString,
  IsNotEmpty,
  IsOptional,
  IsPhoneNumber,
  IsString,
  IsUrl,
  Length
} from 'class-validator';
import { User } from '../entities/User.entity';

export class UpdateUserDto extends User {
  /**
   * Nome do usuário
   *
   * @example 'João da Neve'
   */
  @IsString()
  @IsOptional()
  @IsNotEmpty()
  @Length(2, 50)
  name?: string;

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
   * Data de nascimento do usuário no formato 'YYYY-MM-DD'
   *
   * @example '2012-12-21
   */
  @IsString()
  @IsOptional()
  @IsNotEmpty()
  @Length(2, 50)
  @IsDateString()
  birthdate?: string;

  /**
   * Genero do usuário. 'masculino' ou 'feminino
   *
   * @example masculino | feminino
   */
  @IsString()
  @IsNotEmpty()
  @IsOptional()
  @Length(5, 20)
  gender?: 'Masculino' | 'Feminino';

  /**
   * Número de contato perfil do usuário
   *
   * @example '43 99999-9999'
   */
  @IsString()
  @IsOptional()
  @IsNotEmpty()
  @IsPhoneNumber('BR')
  phone?: string;
}
