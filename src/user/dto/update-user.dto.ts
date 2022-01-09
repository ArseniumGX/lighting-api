import {
  IsDateString,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsUrl,
  Length
} from 'class-validator';

export class UpdateUserDto {
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
   * Imagem para perfil do usuário. Campo Opcional
   *
   * @example 'https://i0.wp.com/www.repol.copl.ulaval.ca/wp-content/uploads/2019/01/default-user-icon.jpg'
   */
  @IsString()
  @IsOptional()
  @IsNotEmpty()
  @IsUrl()
  imageUrl?: string;
}
