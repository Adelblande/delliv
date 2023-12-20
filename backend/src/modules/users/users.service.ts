import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { CreateUserDto } from './dto/create-user.dto';
import { PrismaService } from 'src/database/prisma/prisma.service';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateUserDto): Promise<User> {
    const newUser = {
      ...data,
      password: await bcrypt.hash(data.password, 10),
    };
    const createdUser = await this.prisma.user.create({ data: newUser });

    return {
      ...createdUser,
      password: undefined,
    };
  }

  async findByEmail(email: string): Promise<User> {
    return this.prisma.user.findUnique({
      where: {
        email,
      },
    });
  }
}
