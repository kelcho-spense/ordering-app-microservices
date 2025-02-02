import { Injectable } from '@nestjs/common';
import { createOrderRequest } from './dto/create-order.request';
import { OrdersRepository } from './orders.repository';

@Injectable()
export class OrdersService {
  constructor(private readonly orderRepository: OrdersRepository) {}

  async createOrder(request: createOrderRequest) {
    return this.orderRepository.create(request);
  }

  // async getOrders() {
  //   return this.orderRepository.find();
  // }

  // async getOrderById(id: string) {
  //   return this.orderRepository.findOne(id);
  // }

  // async updateOrder(id: string, request: createOrderRequest) {
  //   return this.orderRepository.findOneAndUpdate(id, request);
  // }
}
