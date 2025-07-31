import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World! this is my first data ';
  }
  getHelloSaleel(): string {
    return 'hay saleel this is the data for hte funciton ';
  }
}
