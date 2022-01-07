import { Injectable } from '@nestjs/common';
import { Genres } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';
import { CreateGenreDto } from './dto/create-genre.dto';

@Injectable()
export class GenreService {
  constructor(private readonly prisma: PrismaService) {}

  async createMany(data: CreateGenreDto[]): Promise<{ count: number }> {
    return this.prisma.genres.createMany({ data });
  }

  findAll(): Promise<Genres[]> {
    return this.prisma.genres.findMany();
  }
}
