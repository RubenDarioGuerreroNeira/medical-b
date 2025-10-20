// src/main.ts
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Express } from 'express';

// createNestServer crea la aplicación Nest y devuelve la instancia Express
// que utiliza Nest internamente (app.getHttpAdapter().getInstance()).
export const createNestServer = async (): Promise<Express> => {
  const app = await NestFactory.create(AppModule);
  // Aquí puedes agregar configuraciones globales como CORS, pipes, etc.
  // app.enableCors();
  await app.init();
  // getHttpAdapter().getInstance() devuelve la instancia de Express usada por Nest
  // (o la instancia del adaptador HTTP en uso).
  // La devolvemos para que pueda ser usada como handler en Cloud Functions.
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return (app.getHttpAdapter() as any).getInstance();
};

// Nota: no inicializamos la app aquí; la inicialización se hará de forma
// explícita desde la función de Cloud Functions para evitar timeouts.
