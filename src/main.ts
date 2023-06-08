import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { join } from 'path';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    {
      transport: Transport.GRPC,
      options: {
        package: 'sample',
        protoPath: join(__dirname, 'proto/sample.proto'),
        url: '0.0.0.0:3000',
      },
    },
  );
  await app.listen();
}
bootstrap();
