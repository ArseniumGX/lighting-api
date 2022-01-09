import { Injectable, NotFoundException } from '@nestjs/common';
import { Book } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';

@Injectable()
export class BookService {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: CreateBookDto) {
    return data;
  }

  async findAll(): Promise<Book[]> {
    return this.prisma.book.findMany();
  }

  async findOne(id: string): Promise<Book> {
    const book = await this.prisma.book.findUnique({
      where: { id }
    });

    if (!book) throw new NotFoundException('Book not found');

    return book;
  }

  update(id: string, updateBookDto: UpdateBookDto) {
    return `This action updates a #${id} book`;
  }

  async remove(id: string): Promise<{ message: string }> {
    const bookExists = await this.prisma.book.findUnique({
      where: { id }
    });

    if (!bookExists) throw new NotFoundException('Book not found');
    else
      await this.prisma.book.delete({
        where: { id }
      });

    return { message: 'Book is deleted successful' };
  }
}
