#!/bin/bash

# Script para servir el proyecto 8th Wall con HTTPS

echo "🚀 Iniciando servidor 8th Wall con HTTPS..."
echo ""

# Verificar si python3 está instalado
if ! command -v python3 &> /dev/null; then
    echo "❌ Python3 no está instalado"
    exit 1
fi

# Generar certificado SSL auto-firmado si no existe
if [ ! -f "server.pem" ]; then
    echo "🔐 Generando certificado SSL auto-firmado..."
    openssl req -new -x509 -keyout server.pem -out server.pem -days 365 -nodes \
        -subj "/C=US/ST=State/L=City/O=Organization/CN=localhost"
    echo "✅ Certificado generado"
    echo ""
fi

# Puerto
PORT=8443

echo "📱 Servidor corriendo en:"
echo "   https://localhost:$PORT"
echo ""
echo "⚠️  Nota: Verás un warning de seguridad en el navegador"
echo "   Es normal con certificados auto-firmados. Click en 'Avanzado' → 'Continuar'"
echo ""
echo "📲 Para acceder desde tu celular:"
echo "   1. Encuentra tu IP: ifconfig | grep 'inet ' | grep -v 127.0.0.1"
echo "   2. Usa: https://TU_IP:$PORT"
echo "   3. O mejor usa ngrok: ngrok http $PORT"
echo ""
echo "🛑 Para detener el servidor: Ctrl + C"
echo ""

# Crear servidor HTTPS simple
python3 << 'EOF'
import http.server
import ssl
import os

os.chdir(os.path.dirname(os.path.abspath(__file__)))

server_address = ('0.0.0.0', 8443)
httpd = http.server.HTTPServer(server_address, http.server.SimpleHTTPRequestHandler)

context = ssl.SSLContext(ssl.PROTOCOL_TLS_SERVER)
context.load_cert_chain('server.pem')

httpd.socket = context.wrap_socket(httpd.socket, server_side=True)

print("✅ Servidor HTTPS corriendo...")
httpd.serve_forever()
EOF
