import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { PrismaService } from 'src/prisma.service';
import { PassportModule } from '@nestjs/passport';
@Module({
  controllers: [UserController],
  providers: [UserService, PrismaService],
  imports: [PassportModule.register({ defaultStrategy: 'jwt' })]
})
export class UserModule {}
