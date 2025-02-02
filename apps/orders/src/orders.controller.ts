import { Body, Controller, Post } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { createOrderRequest } from './dto/create-order.request';

@Controller('orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @Post()
  async createOrder(@Body() request: createOrderRequest) {
    return this.ordersService.createOrder(request);
  }
}
