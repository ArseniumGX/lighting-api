import {
  ConflictException,
  Injectable,
  NotAcceptableException,
  NotFoundException
} from '@nestjs/common';
import { User } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import { hash } from 'bcrypt';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: CreateUserDto): Promise<User> {
    const emailExists = await this.findByEmail(data.email);

    if (emailExists) throw new ConflictException('User already exists');

    if (data.password !== data.passwordConfirm)
      throw new NotAcceptableException("Passwords don't match");

    delete data.passwordConfirm;

    data.password = await hash(data.password, 10);

    const user = await this.prisma.user.create({ data });

    delete user.password;

    return user;
  }

  async findOne(id: string): Promise<boolean> {
    const user = await this.prisma.user.findUnique({
      where: { id }
    });

    return user ? true : false;
  }

  async update(id: string, data: UpdateUserDto): Promise<User> {
    const userExists = await this.findOne(id);

    if (!userExists) throw new NotFoundException('User not found');

    const user = await this.prisma.user.update({
      data,
      where: { id }
    });

    delete user.password;

    return user;
  }

  async delete(id: string): Promise<{ message: string }> {
    const userExists = await this.findOne(id);

    if (!userExists) throw new NotFoundException('User not found');

    await this.prisma.user.delete({
      where: { id }
    });

    return { message: 'User was successfully deleted' };
  }

  async findByEmail(email: string): Promise<boolean> {
    const emailExists = await this.prisma.user.findUnique({
      where: { email }
    });

    return emailExists ? true : false;
  }

  async toggleBook(user: User, bookId: string): Promise<void> {
    const book = await this.prisma.book.findUnique({
      where: { id: bookId }
    });

    if (!book) throw new NotFoundException('Book not found');

    const likedBook = await this.prisma.user.findUnique({
      where: { id: user.id },
      include: {
        books: true
      }
    });

    const foundBook = likedBook.books.map(({ id }) => {
      return id === bookId ? true : false;
    });

    foundBook
      ? await this.prisma.user.update({
          where: { id: user.id },
          data: {
            books: {
              disconnect: { id: book.id }
            }
          }
        })
      : await this.prisma.user.update({
          where: { id: user.id },
          data: {
            books: {
              connect: { id: book.id }
            }
          }
        });

    return null;
  }
}
