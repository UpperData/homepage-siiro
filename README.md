# Siiro

Landing page institucional desarrollada con Next.js App Router. Actualmente es estática y no realiza llamadas a servicios externos.

## Desarrollo

```bash
npm install
npm run dev
```

Para comprobar la versión de producción:

```bash
npm run build
npm start
```

## Estructura

- `src/app/`: página principal, estilos globales y metadatos.
- `src/lib/api/client.ts`: cliente HTTP tipado para futuras integraciones; no se utiliza en la landing.
- `public/images/`: logos y favicon de Siiro.

Cuando exista una API, copia `.env.example` a `.env.local` y configura `NEXT_PUBLIC_API_URL`. El cliente está disponible desde `@/lib/api/client`; sus errores HTTP se exponen como `ApiError`.
