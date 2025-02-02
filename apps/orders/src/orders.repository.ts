import { AbstractRepository } from '@app/common';
import { Injectable } from '@nestjs/common';
import { Order } from './schemas/order.schema';
import { Model } from 'mongoose';
import { InjectConnection } from '@nestjs/mongoose';

@Injectable()
export class OrdersRepository extends AbstractRepository<Order> {
  protected readonly logger = new Logger(OrdersRepository.name);
  // lets create a constructor and inject the Order model and connection so that we can
  constructor(
    @InjectModel(Order.name) orderModel: Model<Order>,
    @InjectConnection() connection: Connection,
  ) {
    super(orderModel, connection); //  lets call the super class constructor and pass the orderModel and connection
  }
}
