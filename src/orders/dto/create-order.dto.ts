// src/orders/dto/create-order.dto.ts
export class CreateOrderDto {
    customerId: string;
    products: { productId: string; quantity: number }[];
    shipping: { company: string; trackingNumber: string };
  }
  