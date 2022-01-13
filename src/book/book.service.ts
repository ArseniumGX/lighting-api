import {
  ConflictException,
  Injectable,
  NotFoundException
} from '@nestjs/common';
import { Book } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';

@Injectable()
export class BookService {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: CreateBookDto): Promise<Book> {
    const alreadyExists = await this.uniqueBook(data.title, data.publisher);

    if (alreadyExists) throw new ConflictException('Already exists');

    return this.prisma.book.create({ data });
  }

  async createMany(data: CreateBookDto[]): Promise<{ count: number }> {
    return this.prisma.book.createMany({ data });
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

  async update(id: string, data: UpdateBookDto): Promise<Book> {
    await this.findOne(id);

    return this.prisma.book.update({
      where: { id },
      data
    });
  }

  async remove(id: string): Promise<{ message: string }> {
    await this.findOne(id);

    await this.prisma.book.delete({ where: { id } });

    return { message: 'Book is deleted successful' };
  }

  /**
   * Internal method
   *
   * @param title
   * @param publisher
   * @returns
   */
  async uniqueBook(title: string, publisher: string): Promise<boolean> {
    const book = await this.prisma.book.findUnique({
      where: {
        title_publisher: { publisher, title }
      }
    });

    return book ? true : false;
  }
}
