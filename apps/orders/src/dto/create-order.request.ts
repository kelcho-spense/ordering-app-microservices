import { IsNumber, IsPhoneNumber, IsPositive, IsString } from 'class-validator';

export class createOrderRequest {
  @IsString()
  name: string;

  @IsPositive()
  price: number;

  @IsNumber()
  quantity: number;

  @IsPhoneNumber()
  phoneNumber: string;
}
