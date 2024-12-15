import { Injectable } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { Order } from './interfaces/order.interface';

@Injectable()
export class OrdersService {
  private orders: Order[] = [];

  createOrder(createOrderDto: CreateOrderDto): Order {
    const newOrder: Order = {
      ...createOrderDto,
      id: this.generateOrderId(),
      status: 'processing', // Default status
    };
    this.orders.push(newOrder);
    return newOrder;
  }

  updateOrderShipping(orderId: string, updateOrderDto: UpdateOrderDto): Order {
    const order = this.orders.find((order) => order.id === orderId);
    if (!order) throw new Error('Order not found');
    order.shipping = updateOrderDto;
    return order;
  }

  updateOrderStatus(orderId: string, status: 'processing' | 'canceled' | 'delivered'): Order {
    const order = this.orders.find((order) => order.id === orderId);
    if (!order) throw new Error('Order not found');

    // Validate status
    const validStatuses: ('processing' | 'canceled' | 'delivered')[] = ['processing', 'canceled', 'delivered'];
    if (!validStatuses.includes(status)) {
      throw new Error('Invalid status');
    }

    // Assign valid status
    order.status = status;
    return order;
  }

  deleteOrder(orderId: string): string {
    const orderIndex = this.orders.findIndex((order) => order.id === orderId);
    if (orderIndex === -1) throw new Error('Order not found');
    this.orders.splice(orderIndex, 1);
    return 'Order deleted successfully';
  }

  private generateOrderId(): string {
    return Math.random().toString(36).substr(2, 9);
  }
}