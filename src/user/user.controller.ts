import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UseGuards
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { User } from '@prisma/client';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserService } from './user.service';
import { AuthUser } from '../auth/auth-user.decorator';

@ApiTags('User')
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  create(@Body() data: CreateUserDto): Promise<User> {
    return this.userService.create(data);
  }

  @Patch(':id')
  @UseGuards(AuthGuard())
  @ApiBearerAuth()
  update(@Param('id') id: string, @Body() data: UpdateUserDto): Promise<User> {
    return this.userService.update(id, data);
  }

  @Delete(':id')
  @UseGuards(AuthGuard())
  @ApiBearerAuth()
  delete(@Param('id') id: string): Promise<{ message: string }> {
    return this.userService.delete(id);
  }

  @Get('bookshelf')
  @UseGuards(AuthGuard())
  @ApiBearerAuth()
  bookshelf(@AuthUser() user: User) {
    return this.userService.bookshelf(user);
  }

  @Patch('toggle-book/:id')
  @UseGuards(AuthGuard())
  @ApiBearerAuth()
  toggleBook(@AuthUser() user: User, @Param('id') bookId: string) {
    return this.userService.toggleBook(user, bookId);
  }
}
