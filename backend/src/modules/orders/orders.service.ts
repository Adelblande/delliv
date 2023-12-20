import { Injectable } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { PrismaService } from 'src/database/prisma/prisma.service';

@Injectable()
export class OrdersService {
  constructor(private prisma: PrismaService) {}
  create(data: CreateOrderDto) {
    return this.prisma.order.create({ data });
  }

  findAll() {
    return this.prisma.order.findMany();
  }

  findOne(id: string) {
    return this.prisma.order.findFirst({ where: { id } });
  }

  update(id: string, data: UpdateOrderDto) {
    return this.prisma.order.update({
      data,
      where: {
        id,
      },
    });
  }

  remove(id: string) {
    return this.prisma.order.delete({ where: { id } });
  }
}
