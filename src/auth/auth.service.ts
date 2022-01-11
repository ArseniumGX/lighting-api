import {
  Injectable,
  NotFoundException,
  UnauthorizedException
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from 'src/prisma.service';
import { AuthResponse, CredentialsDto } from './dto/auth.dto';
import { compare } from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly jwt: JwtService
  ) {}

  async login(data: CredentialsDto): Promise<AuthResponse> {
    const { email, password } = data;

    const user = await this.prisma.user.findUnique({
      where: { email }
    });

    if (!user) throw new NotFoundException('User not found');

    const validatePasswort = await compare(password, user.password);

    if (!validatePasswort)
      throw new UnauthorizedException('Invalid credentials');

    delete user.password;

    return {
      token: this.jwt.sign({ email }),
      user
    };
  }
}
