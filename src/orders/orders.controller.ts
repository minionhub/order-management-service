import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { Order } from './interfaces/order.interface';

@Controller('orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @Get()
  getOrders() {
    return 'This will return all orders';  // Example response
  }

  @Post()
  createOrder(@Body() createOrderDto: CreateOrderDto): Order {
    return this.ordersService.createOrder(createOrderDto);
  }

  @Patch(':orderId/shipping')
  updateOrderShipping(
    @Param('orderId') orderId: string,
    @Body() updateOrderDto: UpdateOrderDto,
  ): Order {
    return this.ordersService.updateOrderShipping(orderId, updateOrderDto);
  }

  @Patch(':orderId/status')
  updateOrderStatus(
    @Param('orderId') orderId: string,
    @Body('status') status: 'processing' | 'canceled' | 'delivered', // Ensure the correct literal type is passed here
  ): Order {
    return this.ordersService.updateOrderStatus(orderId, status);
  }

  @Delete(':orderId')
  deleteOrder(@Param('orderId') orderId: string): string {
    return this.ordersService.deleteOrder(orderId);
  }
}