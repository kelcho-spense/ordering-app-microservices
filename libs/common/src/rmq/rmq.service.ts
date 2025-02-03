import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { RmqOptions, Transport } from '@nestjs/microservices';

@Injectable()
export class RmqService {
  constructor(private readonly configService: ConfigService) {}

  getOptions(queue: string, noAck: boolean = false): RmqOptions {
    return {
      transport: Transport.RMQ, // This is to specify that we are using RabbitMQ
      options: {
        urls: [this.configService.get<string>('RABBIT_MQ_URI')!],
        queue: this.configService.get<string>(`RABBIT_MQ_${queue}_QUEUE`), // This is to get the queue name from the environment variables
        noAck, // This is to specify if the message should be acknowledged
        persistent: true, // This is to ensure that the message is not lost
      },
    };
  }
}
