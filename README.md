
# Order Management Service

This is an Order Management microservice built with **NestJS** and **TypeScript**. The service allows you to manage orders for multiple storefronts globally, handle millions of customers, products, and orders, and interact with external services such as **Customer Service** and **Inventory Service**.

## Features

- **Create orders** with products and quantities.
- **Update orders** with shipping information.
- **Update order status** (e.g., processing, canceled, delivered).
- **Delete orders**.
- Simulates integration with **Customer Service** and **Inventory Service**.
- Scalable architecture for handling millions of orders and global storefronts.

## Technologies Used

- **NestJS**: A progressive Node.js framework for building efficient and scalable server-side applications.
- **TypeScript**: A statically typed superset of JavaScript.
- **AWS**: Infrastructure setup and deployment considerations.
- **Amazon DynamoDB** (for future scalability considerations).
- **Node.js**: JavaScript runtime environment.

## Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (version 16 or later)
- **npm** (Node Package Manager)
- **NestJS CLI** (optional but recommended for easier development)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/order-management-service.git
   ```

2. Navigate to the project directory:

   ```bash
   cd order-management-service
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

### Running the Application Locally

1. Start the application in development mode (auto-reload on file changes):

   ```bash
   npm run start:dev
   ```

   This will start the server at `http://localhost:3000`.

2. To run the application in production mode, use:

   ```bash
   npm run start
   ```

3. The application will be available at `http://localhost:3000`.

### API Endpoints

#### 1. **Create an Order**

- **Endpoint**: `POST /orders`
- **Request Body**:

  ```json
  {
    "customerId": "12345",
    "products": [
      {
        "productId": "98765",
        "quantity": 2
      }
    ],
    "shipping": {
      "company": "DHL",
      "trackingNumber": "ABC123"
    }
  }
  ```

- **Response**:
  ```json
  {
    "id": "orderId123",
    "customerId": "12345",
    "products": [
      {
        "productId": "98765",
        "quantity": 2
      }
    ],
    "shipping": {
      "company": "DHL",
      "trackingNumber": "ABC123"
    },
    "status": "processing"
  }
  ```

#### 2. **Update Order Shipping Information**

- **Endpoint**: `PATCH /orders/:orderId/shipping`
- **Request Body**:

  ```json
  {
    "company": "UPS",
    "trackingNumber": "XYZ456"
  }
  ```

- **Response**:
  ```json
  {
    "id": "orderId123",
    "customerId": "12345",
    "products": [
      {
        "productId": "98765",
        "quantity": 2
      }
    ],
    "shipping": {
      "company": "UPS",
      "trackingNumber": "XYZ456"
    },
    "status": "processing"
  }
  ```

#### 3. **Update Order Status**

- **Endpoint**: `PATCH /orders/:orderId/status`
- **Request Body**:

  ```json
  {
    "status": "delivered"
  }
  ```

- **Response**:
  ```json
  {
    "id": "orderId123",
    "customerId": "12345",
    "products": [
      {
        "productId": "98765",
        "quantity": 2
      }
    ],
    "shipping": {
      "company": "UPS",
      "trackingNumber": "XYZ456"
    },
    "status": "delivered"
  }
  ```

#### 4. **Delete an Order**

- **Endpoint**: `DELETE /orders/:orderId`
- **Response**:
  ```json
  {
    "message": "Order deleted successfully"
  }
  ```

## Directory Structure

```
order-management-service/
├── src/
│   ├── app.module.ts           # Root module
│   ├── app.controller.ts       # Root controller (for handling '/' route)
│   ├── orders/
│   │   ├── orders.controller.ts  # Orders routes
│   │   ├── orders.service.ts     # Orders business logic
│   │   ├── orders.module.ts      # Orders module
│   │   ├── dto/                 # Data Transfer Objects (DTOs)
│   │   │   ├── create-order.dto.ts  # DTO for creating orders
│   │   │   └── update-order.dto.ts  # DTO for updating orders
│   │   ├── interfaces/          # Interfaces for data models
│   │   │   └── order.interface.ts   # Order model interface
│   └── main.ts                   # Application entry point
├── tsconfig.json                 # TypeScript configuration
├── package.json                  # Project dependencies and scripts
└── README.md                     # Project documentation
```

## Deployment

For production environments, you can deploy this application to a cloud service like **AWS**. Below are some of the AWS services that could be used to deploy the microservice:

- **AWS Lambda**: For serverless compute.
- **API Gateway**: For managing API requests.
- **DynamoDB**: For storing orders data.
- **SQS**: For message queuing between services.
- **ECS or EKS**: For containerized deployments (if not using serverless).

**Note:** The infrastructure is outlined but not implemented in this repository. If you wish to deploy to AWS, you can use tools like **Terraform** or **AWS CloudFormation** to write Infrastructure-as-Code (IaC).

## Running Tests

To run the unit tests for this project, use the following command:

```bash
npm run test
```

For **end-to-end** tests, use:

```bash
npm run e2e
```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contributing

We welcome contributions! If you'd like to contribute, please fork the repository and submit a pull request. Make sure to follow the code of conduct and ensure your code is properly tested before submitting.
