import { Test, TestingModule } from '@nestjs/testing';
import { OrdersController } from './orders.controller';
import { OrdersService } from './orders.service';
import { CreateOrderDto } from './dto/create-order.dto';

const mockOrdersService = {
  create: jest.fn(),
  findAll: jest.fn(),
  findOne: jest.fn(),
  update: jest.fn(),
  remove: jest.fn(),
};

describe('OrdersController', () => {
  let ordersController: OrdersController;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OrdersController],
      providers: [{ provide: OrdersService, useValue: mockOrdersService }],
    }).compile();

    ordersController = module.get<OrdersController>(OrdersController);
  });

  // beforeEach(() => {
  //   jest.resetAllMocks();
  // });

  it('should be defined', () => {
    expect(ordersController).toBeDefined();
  });

  it('create', async () => {
    const createDto: CreateOrderDto = {
      name: 'John Duo',
      address: 'Av. Paulista 1500',
      status: 'Pendente',
    };

    await ordersController.create(createDto);

    expect(ordersController.create).toHaveBeenCalledTimes(1);
    expect(ordersController.create).toHaveBeenCalledWith(createDto);
  });
});
