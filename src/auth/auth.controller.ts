import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthResponse, CredentialsDto } from './dto/AuthDto';
import { AuthUser } from './auth-user.decorator';
import { User } from '@prisma/client';
import { AuthGuard } from '@nestjs/passport';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  /**
   * Make login from user resgistered
   */
  @Post('login')
  login(@Body() credentials: CredentialsDto): Promise<AuthResponse> {
    return this.authService.login(credentials);
  }

  /**
   * Return user information if authenticate
   *
   * @param user
   * @returns
   */
  @Get('profile')
  @UseGuards(AuthGuard())
  @ApiBearerAuth()
  profile(@AuthUser() user: User): User {
    return user;
  }
}
