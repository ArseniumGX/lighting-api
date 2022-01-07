import { Controller, Get, Post, Body } from '@nestjs/common';
import { GenreService } from './genre.service';
import { CreateGenreDto } from './dto/create-genre.dto';
import { Genres } from '@prisma/client';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Genres')
@Controller('genre')
export class GenreController {
  constructor(private readonly genreService: GenreService) {}

  @Post()
  createMany(
    @Body() createGenreDto: CreateGenreDto[]
  ): Promise<{ count: number }> {
    return this.genreService.createMany(createGenreDto);
  }

  @Get()
  findAll(): Promise<Genres[]> {
    return this.genreService.findAll();
  }
}
