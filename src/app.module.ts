import { Module } from '@nestjs/common';
import { AppController } from './app.controller';  // import the controller
import { OrdersModule } from './orders/orders.module';  // import the Orders module

@Module({
  imports: [OrdersModule],
  controllers: [AppController],  // add AppController here
  providers: [],
})
export class AppModule {}
