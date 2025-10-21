import { onRequest } from 'firebase-functions/v2/https';
import { setGlobalOptions } from 'firebase-functions/v2';
import { config } from 'firebase-functions';
import type { Express } from 'express';
import { createNestServer } from '@main';

// No necesitamos inicializar admin aquí si lo hacemos dentro de NestJS
// import * as admin from "firebase-admin";
// admin.initializeApp();

// Inicialización lazy: creamos la app de Nest solo la primera vez que llega una petición
let serverReady: Promise<void> | null = null;
let expressAppInstance: Express | null = null;

// Establecemos las opciones globales para todas las funciones en este archivo
setGlobalOptions({ timeoutSeconds: 60, memory: '1GiB', region: 'us-central1' });

// Definimos la función usando la sintaxis de v2
export const api = onRequest(async (req, res) => {
  try {
    if (!serverReady) {
      serverReady = (async () => {
        // Pasamos la configuración de Firebase al inicializar Nest
        const firebaseConfig = config() as Record<string, unknown>;
        const telegram = firebaseConfig['telegram'];
        if (typeof telegram === 'object' && telegram !== null) {
          const token = (telegram as Record<string, unknown>)['token'];
          if (typeof token === 'string') {
            process.env.TELEGRAM_BOT_TOKEN = token;
          }
        }
        const gemini = firebaseConfig['gemini'];
        if (typeof gemini === 'object' && gemini !== null) {
          const apikey = (gemini as Record<string, unknown>)['apikey'];
          if (typeof apikey === 'string') {
            process.env.GEMINI_API_KEY = apikey;
          }
        }
        expressAppInstance = await createNestServer();
      })();
    }

    await serverReady;

    // expressAppInstance es la instancia Express devuelta por createNestServer
    if (!expressAppInstance) {
      res.status(500).send('Server not initialized');
      return;
    }
    return expressAppInstance(req, res);
  } catch (err) {
    console.error('Error initializing Nest server:', err);
    res.status(500).send('Server initialization error');
  }
});
