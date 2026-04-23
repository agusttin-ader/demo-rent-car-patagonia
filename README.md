# Rent a Car Patagonia

Sitio público para **alquiler de vehículos en Puerto Natales y Torres del Paine**: hero con consulta rápida, flota, cómo reservar, contacto con mapa y CTAs que abren **WhatsApp** con el mensaje armado.

Pensado para verse bien en móvil, cargar rápido y dejar el canal de venta claro sin fricción.

## Qué incluye

- **Inicio** con formulario de disponibilidad (tipo de auto, retiro, fechas) y enlace a WhatsApp
- **Flota** por categorías con imágenes locales
- **Cómo funciona**, beneficios, opiniones, bloque final con tipografía máscara sobre paisaje
- **Contacto** con búsqueda por zona, formulario y mapa (OpenStreetMap)
- **Rutas internas** preparadas para FAQ, políticas, etc. (404 amigable en rutas aún sin página)

## Stack

| Área        | Tecnología                          |
| ----------- | ----------------------------------- |
| UI          | React 19, TypeScript, Tailwind CSS 4 |
| Build       | Vite 6                              |
| Navegación  | React Router                        |
| Iconos      | Lucide React                        |

## Requisitos

- Node.js **20+** (recomendado LTS)
- npm (incluido con Node)

## Puesta en marcha

```bash
npm install
cp .env.example .env
# Editá .env y poné tu VITE_WHATSAPP_NUMBER (solo dígitos, con código país, sin +)
npm run dev
```

Abre `http://localhost:5173`.

## Scripts

| Comando        | Uso                    |
| -------------- | ---------------------- |
| `npm run dev`  | Servidor de desarrollo |
| `npm run build`| Typecheck + build producción → `dist/` |
| `npm run preview` | Servir el build localmente |
| `npm run lint` | ESLint                 |

## Variables de entorno

| Variable               | Descripción                                      |
| ---------------------- | ------------------------------------------------ |
| `VITE_WHATSAPP_NUMBER` | Número de WhatsApp del negocio (solo dígitos).   |

## Despliegue

El output es estático en `dist/`: cualquier hosting estático (Vercel, Netlify, Cloudflare Pages, S3, etc.) sirve. Recordá definir `VITE_WHATSAPP_NUMBER` en el panel del proveedor al buildear.

---

**Desarrollo:** Agustin Ader
