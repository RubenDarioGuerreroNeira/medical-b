<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="100" alt="Nest Logo" /></a>
  <img src="https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg" width="100" alt="Firebase Logo" />
</p>

# Medical-Bot API

<p align="center">
  Backend escalable para un bot médico, construido con <strong>NestJS</strong> y desplegado como una API serverless en <strong>Firebase Cloud Functions</strong>.
</p>

## Descripción

Este repositorio contiene la lógica de una API RESTful diseñada para servir a un bot de asistencia médica. La arquitectura combina el poder y la estructura de NestJS con la escalabilidad y facilidad de despliegue del ecosistema serverless de Firebase.

## Arquitectura del Proyecto

```
[ Cliente (Usuario/App) ]
        |
        | Petición HTTP (e.g., /api/test)
        v
+---------------------------------+
|     Firebase Cloud Functions    |
|                                 |
|   [ Función 'api' (onRequest) ]   |
|         (functions/src/index.ts)  |
|               |                 |
|               | (Pasa la petición)
|               v                 |
|   +-------------------------+   |
|   |   Aplicación NestJS     |   |
|   |    (Servidor Express)   |   |
|   |                         |   |
|   |  [ Controllers,         |   |
|   |    Services, Módulos ]  |   |
|   +-------------------------+   |
+---------------------------------+
```

### Características clave

- Arquitectura serverless con Firebase Cloud Functions.
- Aplicación estructurada con NestJS (TypeScript).
- Monorepo: código de aplicación en la raíz y lógica de funciones en `/functions`.
- Inicialización diferida (lazy bootstrap) para reducir cold starts.

Nota sobre alertas de licencia: si herramientas automatizadas o la interfaz de GitHub muestran mensajes como "Use code with caution" o referencias a repositorios externos (por ejemplo, https://github.com/vprotsukovych/subsocial-blog o https://github.com/joaquincamara/alchemist), es muy probable que se trate de falsos positivos por coincidencias parciales; este repositorio contiene únicamente código desarrollado por el autor y las dependencias declaradas en `package.json` y `functions/package.json`, y se incluye un archivo `LICENSE` (MIT) en la raíz para que las herramientas identifiquen la licencia correctamente.

## Instalación

Este proyecto es un monorepo que contiene la aplicación NestJS en la raíz y el código de Firebase Functions en la carpeta `functions/`. Debes instalar las dependencias en ambos lugares.

```bash
# 1. Instalar dependencias de la aplicación NestJS (raíz)
npm install

# 2. Instalar dependencias de Firebase Functions
npm install --prefix functions
```

````

## Ejecutar en desarrollo

```bash
# development
npm run start

# watch mode
npm run start:dev

# production mode
npm run start:prod
````

## Tests

```bash
# unit tests
npm run test

# e2e tests
npm run test:e2e

# test coverage
npm run test:cov
```

## Despliegue

Revisa la documentación oficial para recomendaciones de despliegue y optimización: https://docs.nestjs.com/deployment

Para desplegar en Firebase utiliza la guía oficial de Firebase Functions.

## Recursos

- Documentación NestJS: https://docs.nestjs.com
- Repositorio NestJS: https://github.com/nestjs/nest
- Firebase: https://firebase.google.com

## Licencia y atribución

Este proyecto (Medical-Bot API) se publica bajo la licencia MIT.

Autor: Rubén D. Guerrero N.
Año: 2025
Organización: open

Las dependencias de terceros conservan sus propias licencias (por ejemplo, NestJS es MIT: https://github.com/nestjs/nest/blob/master/LICENSE). Si tu editor o GitHub muestra "License unknown" o avisos similares, añade un archivo `LICENSE` con el texto de la licencia elegida (MIT) en la raíz del repositorio.

## Terceros y atribuciones

Este repositorio contiene únicamente el código desarrollado por el autor salvo las dependencias declaradas en `package.json` y `functions/package.json`. No se han incorporado en este repositorio fragmentos de código completos tomados de proyectos externos sin atribución.

- Dependencias principales:
  - NestJS — licencia MIT: https://github.com/nestjs/nest/blob/master/LICENSE
  - Firebase / Firebase Functions — revisar licencias oficiales en https://firebase.google.com/terms

Si detectas en la interfaz de GitHub o en tu editor mensajes del tipo "Use code with caution" o "License unknown", normalmente se deben a coincidencias parciales con fragmentos públicos o a la falta de un archivo `LICENSE` en la raíz. Este repositorio incluye ahora un archivo `LICENSE` (MIT) con la información del autor para que las herramientas puedan identificar la licencia del proyecto.

Si añadiste código de terceros en el futuro, por favor:

- Indica la fuente y licencia junto al archivo o en una sección de atribuciones.
- Añade un aviso en el `README.md` describiendo la porción reutilizada y la licencia aplicable.

## Avisos automatizados y falsos positivos

Algunas herramientas y la interfaz de GitHub realizan búsquedas heurísticas para detectar código tomado de repositorios públicos y muestran avisos como "Use code with caution" o "License unknown". Esas detecciones a veces son falsos positivos.

En este repositorio hemos tomado las siguientes medidas para evitar confusiones:

- Incluido un archivo `LICENSE` (MIT) en la raíz con la información del autor.
- Añadida una sección de atribuciones que lista las dependencias externas y sus licencias.
- Aclarado que el código fuente propio es original y que no se han incorporado fragmentos completos de proyectos externos sin atribución.

Si la interfaz te muestra referencias específicas a otros repositorios (por ejemplo, `https://github.com/nestjs/nest` u otros repositorios públicos), considera que:

- Pueden ser coincidencias parciales con fragmentos públicos o metadatos.
- No implican que este repositorio contenga código copiado de esos proyectos.

Si detectas un caso concreto que consideres no corresponde, por favor abre un issue o contacta al autor para que podamos revisar y, si procede, añadir la atribución o eliminar el contenido problemático.

## Contacto

Para preguntas o soporte ponte en contacto con el autor (proporciona email o canal si quieres añadirlo).

---

_README actualizado para corregir bloques de código y añadir licencia/atribución._
