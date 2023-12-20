import { Module } from '@nestjs/common';

import { PrismaService } from './database/prisma/prisma.service';
import { OrdersModule } from './modules/orders/orders.module';
import { UsersModule } from './modules/users/users.module';

@Module({
  imports: [OrdersModule, UsersModule],
  controllers: [],
  providers: [PrismaService],
})
export class AppModule {}
