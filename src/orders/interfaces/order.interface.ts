// src/orders/interfaces/order.interface.ts
export interface Order {
    id: string;
    customerId: string;
    products: { productId: string; quantity: number }[];
    shipping: { company: string; trackingNumber: string };
    status: 'processing' | 'canceled' | 'delivered';
  }
  