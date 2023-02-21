import { NestFactory } from '@nestjs/core';
import { DocumentBuilder } from '@nestjs/swagger';
import { SwaggerModule } from '@nestjs/swagger/dist';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);


  const config = new DocumentBuilder()
                        .setTitle('Nest API')
                        .setDescription('The description of the API')
                        .setVersion('1.0')
                        .build();

  const document = SwaggerModule.createDocument(app, config);

  SwaggerModule.setup('/swagger-ui', app, document);

  // must be LAST LINE
  await app.listen(3000);
}
bootstrap();
