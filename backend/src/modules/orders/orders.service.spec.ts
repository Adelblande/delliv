import { Test, TestingModule } from '@nestjs/testing';
import { OrdersService } from './orders.service';
import { PrismaService } from 'src/modules/prisma/prisma.service';

describe('OrdersService', () => {
  let ordersService: OrdersService;
  let prismaService: PrismaService;

  const mockPrismaService = {
    orders: {
      create: jest.fn(),
      findAll: jest.fn(),
      findOne: jest.fn(),
      update: jest.fn(),
      remove: jest.fn(),
    },
  };

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        OrdersService,
        { provide: PrismaService, useValue: mockPrismaService },
      ],
    }).compile();

    ordersService = module.get<OrdersService>(OrdersService);
    prismaService = module.get<PrismaService>(PrismaService);
  });

  // afterEach(() => {
  //   jest.clearAllMocks();
  // });

  it('should be defined', () => {
    expect(ordersService).toBeDefined();
    expect(prismaService).toBeDefined();
  });
});
