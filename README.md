PhoneBox iPad Edition

Un dashboard táctil para monitorización y control de Windows desde iPad.

PhoneBox iPad Edition es una adaptación del proyecto PhoneBox, orientada a convertir un iPad en un panel de monitorización de hardware y control remoto local para un ordenador Windows.

El proyecto busca ofrecer una experiencia similar a un Stream Deck combinado con un panel de monitorización de PC, utilizando una interfaz web adaptable a diferentes generaciones de iPad.

La arquitectura permite conectar varios dispositivos simultáneamente a un único ordenador Windows.

1. Objetivos del proyecto
Monitorizar en tiempo real el hardware del ordenador.
Controlar funciones y aplicaciones de Windows desde el iPad.
Disponer de widgets personalizables y botones de acceso rápido.
Utilizar el iPad como panel permanente de escritorio.
Permitir conexiones mediante Wi-Fi y Ethernet por USB-C.
Mantener compatibilidad con iPad antiguos mediante una interfaz ligera.
Funcionar en una red local sin depender de servicios en la nube.
Dispositivos objetivo
Dispositivo	Función	Interfaz
iPad Air A1474	Panel permanente	Legacy
iPad 10.ª generación	Consola principal	Modern
Windows 11	Servidor central	Agent
2. Características previstas
Monitorización
CPU: utilización y frecuencia.
GPU: utilización, memoria y temperatura cuando el hardware lo permita.
RAM: memoria utilizada y disponible.
Temperaturas y sensores disponibles.
Discos: espacio y actividad.
Red: velocidad de subida y bajada.
Procesos y aplicaciones en ejecución.
Estado general del sistema.
Control
Control de volumen de Windows.
Reproducción, pausa y siguiente pista.
Apertura de aplicaciones.
Accesos directos personalizados.
Atajos de teclado.
Acciones predefinidas.
Control de procesos con permisos específicos.
Dashboard
Widgets personalizables.
Diferentes páginas de trabajo.
Diseño mediante cuadrícula.
Widgets redimensionables.
Temas oscuros.
Actualización de datos en tiempo real.
Configuración independiente por dispositivo.
Conectividad
Wi-Fi mediante red local.
Ethernet mediante adaptador USB-C.
Comunicación HTTP y WebSocket.
Emparejamiento de dispositivos.
Reconexión automática.
Varios clientes conectados simultáneamente.
3. Arquitectura

El sistema estará dividido en tres componentes principales.

Windows Agent

Aplicación residente en Windows 11 que centraliza la monitorización y el control.

Responsabilidades:

Recopilar información del hardware.
Gestionar las acciones de Windows.
Exponer la API local.
Mantener las conexiones WebSocket.
Gestionar dispositivos autorizados.
Servir las interfaces web.
Almacenar configuraciones y layouts.
Web Dashboard

Interfaz accesible desde Safari mediante una dirección IP local.

Se desarrollarán dos perfiles:

Legacy

Compatible con Safari de iOS 12.
HTML, CSS y JavaScript ligero.
Monitorización simplificada.
Botones básicos de control.
Bajo consumo de memoria.

Modern

Interfaz completa para iPadOS moderno.
Editor visual de widgets.
Gráficas de rendimiento.
Varias páginas.
Controles avanzados.
Personalización de layouts.
Communication Layer

Capa común de comunicación entre el servidor y los dispositivos.

HTTP REST para configuración y operaciones.
WebSocket para datos en tiempo real.
JSON como formato de intercambio.
Autenticación individual por dispositivo.
4. Tecnologías
Área	Tecnología
Backend	C#
Runtime	.NET 10
Servidor	ASP.NET Core
API	HTTP REST
Tiempo real	WebSocket
Frontend	HTML, CSS y JavaScript
Persistencia	JSON inicialmente
Monitorización	LibreHardwareMonitor y APIs de Windows
Gráficas	uPlot / Chart.js
Distribución	Windows Installer
Cliente	Safari / PWA

La elección de las librerías de frontend y monitorización se validará durante la implementación.

5. Requisitos
Servidor Windows
Windows 11 de 64 bits.
.NET 10 Runtime o distribución autocontenida.
Conexión a una red local.
Memoria y almacenamiento suficientes para el agente.
Permisos para consultar los sensores y ejecutar las acciones autorizadas.
iPad Legacy
iPad Air A1474.
iOS 12.5.8.
Safari.
Conexión Wi-Fi.
Alimentación permanente recomendada.
iPad Modern
iPad de 10.ª generación.
iPadOS compatible con Safari moderno.
Wi-Fi o Ethernet mediante adaptador USB-C.
Acceso a la dirección local del servidor.
Red
El ordenador y los iPad deben poder comunicarse entre sí.
El router debe permitir tráfico entre clientes.
Puerto configurable para el servidor.
Certificado local de confianza para conexiones HTTPS.
6. Seguridad

La seguridad será una parte fundamental del proyecto.

Medidas previstas:

Emparejamiento mediante QR y código temporal.
Identificación individual de dispositivos.
Autenticación mediante tokens.
HTTPS y WSS.
Lista blanca de acciones autorizadas.
Registro de operaciones.
Confirmación de acciones críticas.
Restricción de acceso a la red local.
Sin exposición directa del agente a Internet.
Prohibición de ejecución arbitraria de comandos desde el navegador.
7. Estructura prevista
text
PhoneBox-iPad/
│
├── src/
│   ├── PhoneBox.Agent/
│   │   ├── Hardware/
│   │   ├── Monitoring/
│   │   ├── Media/
│   │   ├── Processes/
│   │   ├── Commands/
│   │   ├── Networking/
│   │   └── Security/
│   │
│   ├── PhoneBox.Web/
│   │   ├── legacy/
│   │   ├── modern/
│   │   ├── css/
│   │   ├── js/
│   │   └── widgets/
│   │
│   └── PhoneBox.Shared/
│       ├── Models/
│       ├── Messages/
│       └── Contracts/
│
├── config/
│   ├── settings.json
│   ├── widgets.json
│   └── layouts/
│
├── scripts/
│   ├── install.ps1
│   └── uninstall.ps1
│
├── docs/
│   ├── ARCHITECTURE.md
│   ├── SECURITY.md
│   └── COMPATIBILITY.md
│
├── README.md
└── ROADMAP.md


La estructura es una propuesta de organización y se ajustará a los directorios reales del repositorio original.

8. Instalación prevista

El objetivo es disponer de un instalador sencillo para Windows.

Instalar PhoneBox Agent.
Iniciar el servicio local.
Autorizar el acceso en el firewall de Windows.
Emparejar los iPad mediante QR.
Abrir el dashboard desde Safari.
Añadir el acceso a la pantalla de inicio.
Seleccionar el perfil Legacy o Modern.

La aplicación deberá funcionar sin tener que abrir manualmente una terminal.

9. Filosofía del proyecto

PhoneBox iPad Edition busca ser:

Local-first: los datos permanecen en la red local.
Modular: los widgets se desarrollan independientemente.
Multidispositivo: varios clientes pueden conectarse simultáneamente.
Compatible: diferentes generaciones de iPad.
Personalizable: cada usuario configura su propio dashboard.
Seguro: las acciones del ordenador están controladas.
Extensible: posibilidad de incorporar nuevas integraciones.
10. Estado del proyecto

Estado: planificación y preparación de la primera versión.

El objetivo inicial es obtener un prototipo funcional con Windows 11 y dos clientes iPad conectados simultáneamente.

Consultar ROADMAP.md para conocer las fases de desarrollo.

11. Proyecto original y licencia

Proyecto de referencia: ersinkoc/phonebox.

La adaptación deberá respetar la licencia MIT del proyecto original, conservar los avisos de copyright y documentar claramente las modificaciones y componentes propios.

PhoneBox iPad Edition — Your PC. Your Dashboard. Your Control.