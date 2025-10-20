import { onRequest } from 'firebase-functions/v2/https';
import { setGlobalOptions } from 'firebase-functions/v2';
import { createNestServer } from '@main';

// No necesitamos inicializar admin aquí si lo hacemos dentro de NestJS
// import * as admin from "firebase-admin";
// admin.initializeApp();

// Inicialización lazy: creamos la app de Nest solo la primera vez que llega una petición
let serverReady: Promise<void> | null = null;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
let expressAppInstance: any = null;

// Establecemos las opciones globales para todas las funciones en este archivo
setGlobalOptions({ timeoutSeconds: 60, memory: '1GiB', region: 'us-central1' });

// Definimos la función usando la sintaxis de v2
export const api = onRequest(async (req, res) => {
  try {
    if (!serverReady) {
      serverReady = (async () => {
        expressAppInstance = await createNestServer();
      })();
    }

    await serverReady;

    // expressAppInstance es la instancia Express devuelta por createNestServer
    return expressAppInstance(req, res);
  } catch (err) {
    console.error('Error initializing Nest server:', err);
    res.status(500).send('Server initialization error');
  }
});
