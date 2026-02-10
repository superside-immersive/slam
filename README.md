# 8th Wall Offline SLAM Project

Este proyecto utiliza el motor 8th Wall standalone para AR con SLAM tracking.

## Estructura del Proyecto

```
8thwall/
├── index.html              # Archivo principal
├── xr-standalone/          # Motor 8th Wall
│   ├── xr-slam.js         # Engine SLAM
│   ├── xr-face.js         # Engine Face tracking
│   ├── xr.js              # Engine principal
│   └── resources/         # Modelos y workers
└── README.md              # Este archivo
```

## Cómo Ejecutar

### Opción 1: Local con Live Server (Desktop)
1. Instala la extensión "Live Server" en VS Code
2. Click derecho en `index.html` → "Open with Live Server"
3. Se abrirá en `http://127.0.0.1:5500`

### Opción 2: Móvil con HTTPS (Recomendado)

**¡IMPORTANTE!** La cámara NO funcionará en móvil sin HTTPS.

#### Usando ngrok:
```bash
# 1. Inicia Live Server (puerto 5500)
# 2. En terminal, ejecuta:
ngrok http 5500

# 3. Copia la URL HTTPS que te da ngrok (ej: https://a1b2-c3d4.ngrok-free.app)
# 4. Abre esa URL en tu celular
```

#### Usando VS Code Port Forwarding:
1. Inicia Live Server
2. Ve a la pestaña "Ports" en VS Code
3. Click derecho en el puerto 5500 → "Port Visibility" → "Public"
4. Copia la URL forwarded y ábrela en tu celular

## Troubleshooting

### Pantalla negra
- Abre la consola del navegador (F12 en PC, depuración remota en móvil)
- Si dice "XR8 is not defined", verifica la ruta al archivo xr-slam.js
- Verifica que todos los archivos en xr-standalone/ estén presentes

### La cámara no abre
- **En móvil**: DEBES usar HTTPS (ngrok o certificado SSL)
- **En desktop**: Verifica permisos de cámara en el navegador

### Pide API Key / Licencia
- Este proyecto usa el motor standalone distribuido (Buildable Code Export)
- No debería pedir API Key
- Si lo pide, verifica que estás usando xr-slam.js de la carpeta xr-standalone

## Características Incluidas

✅ World Effects (SLAM)
✅ Image Targets
✅ Face Effects (xr-face.js)
✅ Sky Effects
✅ Absolute Scale

❌ No incluye: VPS, Lightship Maps, Hand Tracking (requieren cloud)

## Licencia

El motor 8th Wall en `xr-standalone/` está bajo la licencia de Niantic Spatial.
Ver `xr-standalone/LICENSE` para más detalles.
