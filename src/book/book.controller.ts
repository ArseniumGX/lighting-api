import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { BookService } from './book.service';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';

@ApiTags('Book')
@Controller('book')
export class BookController {
  constructor(private readonly bookService: BookService) {}

  @Post()
  @UseGuards(AuthGuard())
  @ApiBearerAuth()
  create(@Body() createBookDto: CreateBookDto) {
    return this.bookService.create(createBookDto);
  }

  @Get()
  findAll() {
    return this.bookService.findAll();
  }

  /**
   * Está rota é apenas para criar minha lista de produtos de ecommerce. Não está sendo
   * levando em conta validações para evitar que seja cadastrado o mesmo livro pois o foco
   * aqui não é esse
   *
   * @param body
   * @returns
   */
  @Post('many')
  @UseGuards(AuthGuard())
  @ApiBearerAuth()
  createMany(@Body() body: CreateBookDto[]): Promise<{ count: number }> {
    return this.bookService.createMany(body);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.bookService.findOne(id);
  }

  @Patch(':id')
  @UseGuards(AuthGuard())
  @ApiBearerAuth()
  update(@Param('id') id: string, @Body() updateBookDto: UpdateBookDto) {
    return this.bookService.update(id, updateBookDto);
  }

  @Delete(':id')
  @UseGuards(AuthGuard())
  @ApiBearerAuth()
  remove(@Param('id') id: string) {
    return this.bookService.remove(id);
  }
}
