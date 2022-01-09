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
    const emailExists = await this.prisma.user.findUnique({
      where: { email: data.email }
    });

    if (emailExists) throw new ConflictException('Email already exists');

    if (data.password !== data.passwordConfirm)
      throw new NotAcceptableException(
        "Password and password confirmation don't match"
      );

    delete data.passwordConfirm;

    data.password = await hash(data.password, 10);

    const user = await this.prisma.user.create({ data });

    delete user.password;

    return user;
  }

  async findOne(id: string): Promise<User> {
    const user = await this.prisma.user.findUnique({
      where: { id }
    });

    if (!user) throw new NotFoundException('User not found');

    delete user.password;

    return user;
  }

  async update(id: string, data: UpdateUserDto): Promise<User> {
    const userExists = await this.prisma.user.findUnique({
      where: { id }
    });

    if (!userExists) throw new NotFoundException('User not found');

    const user = await this.prisma.user.update({
      data,
      where: { id }
    });

    delete user.password;

    return user;
  }

  async delete(id: string): Promise<{ message: string }> {
    const userExists = await this.prisma.user.findUnique({
      where: { id }
    });

    if (!userExists) throw new NotFoundException('User not found');

    await this.prisma.user.delete({
      where: { id }
    });

    return { message: 'User was deleted successful' };
  }

  async findByEmail(email: string): Promise<boolean> {
    const emailExists = await this.prisma.user.findUnique({
      where: { email }
    });

    return emailExists ? true : false;
  }
}
