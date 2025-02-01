import { Module } from '@nestjs/common';
import { OrdersController } from './orders.controller';
import { OrdersService } from './orders.service';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from '@app/common';
import * as Joi from 'joi';

export interface EnvironmentVariables {
  MONGODB_URI: string;
}

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      validationSchema: Joi.object<EnvironmentVariables>({
        MONGODB_URI: Joi.string().required(),
      }),
      envFilePath: './apps/orders/.env',
    }),
    DatabaseModule,
  ],
  controllers: [OrdersController],
  providers: [OrdersService],
})
export class OrdersModule {}
