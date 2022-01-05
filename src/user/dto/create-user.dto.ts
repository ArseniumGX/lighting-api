import {
  IsDateString,
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsUrl,
  Length
} from 'class-validator';

export class CreateUserDto {
  /**
   * Nome completo do usuário. Campo Opcional
   *
   * @example 'João da Neve'
   */
  @IsString()
  @IsOptional()
  @IsNotEmpty()
  @Length(2, 50)
  fullname?: string;

  /**
   * Data de nascimento do usuário no formato 'YYYY-MM-DD'. Campo opcional
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
   * Nickname do usuário.
   *
   * @example 'kingOfNorth'
   */
  @IsString()
  @IsNotEmpty()
  @Length(5, 20)
  nickname: string;

  /**
   * Imagem para perfil do usuário. Campo Opcional
   *
   * @example 'https://i0.wp.com/www.repol.copl.ulaval.ca/wp-content/uploads/2019/01/default-user-icon.jpg'
   */
  @IsString()
  @IsOptional()
  @IsNotEmpty()
  @IsUrl()
  imageUrl?: string;

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
