import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { BookModule } from './book/book.module';
import { GenreModule } from './genre/genre.module';

@Module({
  imports: [UserModule, BookModule, GenreModule],
  controllers: [],
  providers: []
})
export class AppModule {}
