import { Module } from '@nestjs/common';
import { BookService } from './book.service';
import { BookController } from './book.controller';
import { PrismaService } from 'src/prisma.service';
import { PassportModule } from '@nestjs/passport';

@Module({
  controllers: [BookController],
  providers: [BookService, PrismaService],
  imports: [PassportModule.register({ defaultStrategy: 'jwt' })]
})
export class BookModule {}
