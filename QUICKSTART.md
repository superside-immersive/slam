# 🚀 Inicio Rápido - 8th Wall SLAM

## Método 1: Servidor HTTPS Simple (Recomendado para Móvil)

### Usando el Script Incluido
```bash
./serve-https.sh
```

Luego abre: `https://localhost:8443`

**Nota:** Verás un warning de seguridad. Es normal. Click en "Avanzado" → "Continuar de todos modos"

---

## Método 2: Live Server + ngrok (Más Fácil)

### Paso 1: Instala Live Server en VS Code
1. Abre la pestaña de Extensiones (Cmd/Ctrl + Shift + X)
2. Busca "Live Server" por Ritwick Dey
3. Instala

### Paso 2: Inicia Live Server
1. Click derecho en `index.html`
2. "Open with Live Server"
3. Se abrirá en `http://127.0.0.1:5500`

### Paso 3: Exponer con HTTPS (Para Móvil)

#### Opción A: ngrok (Más Simple)
```bash
# Instala ngrok si no lo tienes
brew install ngrok

# Expone el puerto 5500 con HTTPS
ngrok http 5500
```

Ngrok te dará una URL como: `https://a1b2-c3d4.ngrok-free.app`

Abre esa URL en tu celular y listo! 📱

#### Opción B: VS Code Port Forwarding
1. Ve a la pestaña "PORTS" en la parte inferior de VS Code
2. Click derecho en el puerto 5500
3. "Port Visibility" → "Public"
4. Copia la URL forwarded (será HTTPS automáticamente)
5. Ábrela en tu celular

---

## Método 3: Python HTTPS Server One-Liner

```bash
# Genera certificado (solo una vez)
openssl req -new -x509 -keyout server.pem -out server.pem -days 365 -nodes -subj "/CN=localhost"

# Inicia servidor
python3 -m http.server 8443 --bind 0.0.0.0
```

Abre: `https://localhost:8443`

---

## ✅ Verificar que Funciona

### En la Consola del Navegador (F12) deberías ver:
```
¡Motor XR8 cargado localmente!
```

### Si ves errores:

#### `XR8 is not defined`
- ❌ La ruta del archivo xr-slam.js está mal
- ✅ Verifica que la carpeta `xr-standalone` esté en el mismo nivel que `index.html`

#### `Camera not allowed` o `NotAllowedError`
- ❌ No estás usando HTTPS
- ✅ Usa ngrok o el script serve-https.sh

#### Pantalla negra en móvil
- ❌ Probablemente no tienes HTTPS
- ✅ Verifica que la URL empiece con `https://`

---

## 📱 Probar en Móvil

1. **Asegúrate de estar en la misma red WiFi** (PC y móvil)
2. **Usa HTTPS** (ngrok, port forwarding, o certificado SSL)
3. **Abre la URL en el navegador del móvil** (Chrome o Safari)
4. **Acepta permisos de cámara** cuando te lo pida
5. **Mueve el celular** para que el SLAM empiece a trackear

---

## 🎯 Qué Esperar

Cuando funcione correctamente:
- ✅ Se abrirá la cámara
- ✅ Verás un cubo azul flotando en el espacio
- ✅ El cubo quedará "anclado" en el mundo real
- ✅ Puedes moverte alrededor del cubo

---

## 🛠️ Siguiente Paso: Personalizar

Una vez que funcione, edita `index.html` para:
- Cambiar el color del cubo
- Agregar más objetos 3D
- Cargar modelos GLTF
- Agregar interacciones

Ejemplo: Cambiar el color del cubo
```html
<a-box color="#FF0000">  <!-- Rojo -->
```

---

## 📚 Recursos

- [A-Frame Docs](https://aframe.io/docs/)
- [8th Wall Docs](https://www.8thwall.com/docs/)
- [Troubleshooting](./README.md#troubleshooting)

---

**¿Problemas?** Abre una issue o revisa la consola del navegador para más detalles.
