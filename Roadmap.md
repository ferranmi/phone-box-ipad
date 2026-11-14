PhoneBox iPad Edition — Roadmap

Plan de desarrollo y evolución del proyecto.

Plataforma principal: Windows 11
Clientes: iPad Air A1474 e iPad 10.ª generación
Estado general: Planificación / preparación de desarrollo
Versión objetivo inicial: 1.0.0

Estado de las fases
Fase 0 — Análisis y preparación.
Fase 1 — Windows Agent.
Fase 2 — Dashboard Legacy.
Fase 3 — Dashboard Modern.
Fase 4 — Monitorización.
Fase 5 — Control de Windows.
Fase 6 — Editor visual.
Fase 7 — Conectividad y seguridad.
Fase 8 — Instalador y distribución.
Fase 9 — Pruebas y lanzamiento 1.0.

Los elementos se marcarán como completados únicamente después de su implementación y validación.

Fase 0 — Análisis y preparación

Prioridad: crítica

Objetivo: comprender la arquitectura original y preparar una rama de desarrollo independiente.

Tareas:

Clonar el repositorio PhoneBox.
Revisar la licencia MIT.
Identificar el proyecto del agente Windows.
Identificar el servidor HTTP existente.
Revisar la API y WebSocket.
Identificar el sistema de widgets.
Identificar las funciones de monitorización.
Identificar los controles existentes.
Documentar las funcionalidades reutilizables.
Crear la rama feature/ipad-web-dashboard.

Resultado: arquitectura real documentada y entorno de desarrollo funcional.

Fase 1 — Windows Agent

Prioridad: crítica

Objetivo: disponer de un agente estable que permita conectar diferentes clientes.

Tareas:

Preparar el entorno .NET 10.
Adaptar el servidor HTTP existente.
Definir la API para clientes iPad.
Definir el protocolo WebSocket.
Implementar identificación de clientes.
Implementar sesiones simultáneas.
Implementar perfiles Legacy y Modern.
Preparar configuración persistente.
Implementar registro de errores.
Preparar funcionamiento en segundo plano.

Resultado: Windows Agent operativo y accesible desde la red local.

Fase 2 — Dashboard Legacy

Prioridad: crítica

Dispositivo: iPad Air A1474.

Objetivo: construir una interfaz ligera compatible con iOS 12.5.8.

Tareas:

Crear estructura HTML compatible.
Crear diseño oscuro.
Crear indicadores de CPU y RAM.
Crear indicadores de GPU.
Crear indicadores de temperatura.
Mostrar estado de conexión.
Implementar botones básicos.
Implementar WebSocket compatible.
Añadir reconexión automática.
Optimizar consumo de memoria.
Probar funcionamiento prolongado.

Resultado: panel permanente de monitorización y control básico.

Fase 3 — Dashboard Modern

Prioridad: alta

Dispositivo: iPad 10.ª generación.

Objetivo: construir la interfaz completa.

Tareas:

Crear sistema de navegación.
Diseñar dashboard principal.
Implementar tarjetas de hardware.
Implementar gráficas.
Crear página de multimedia.
Crear página de accesos directos.
Crear página de procesos.
Crear página de desarrollo.
Adaptar interfaz horizontal y vertical.
Implementar pantalla completa.
Preparar instalación PWA.

Resultado: dashboard completo e interactivo.

Fase 4 — Monitorización

Prioridad: alta

Objetivo: disponer de información real del hardware.

Tareas:

Monitorización CPU.
Monitorización RAM.
Monitorización GPU.
Lectura de temperaturas.
Información de discos.
Actividad de red.
Procesos principales.
Historial de métricas.
Frecuencia configurable de actualización.
Tratamiento de sensores no disponibles.

Resultado: monitorización fiable y sincronizada entre dispositivos.

Fase 5 — Control de Windows

Prioridad: alta

Objetivo: utilizar el iPad como consola de control.

Tareas:

Control de volumen.
Play/Pause.
Siguiente/anterior pista.
Abrir aplicaciones autorizadas.
Accesos directos.
Acciones predefinidas.
Atajos de teclado.
Gestión de procesos autorizada.
Confirmaciones para acciones críticas.
Feedback visual de ejecución.

Resultado: control táctil del ordenador.

Fase 6 — Editor visual

Prioridad: media

Objetivo: permitir personalizar los dashboards.

Tareas:

Catálogo de widgets.
Añadir widgets.
Eliminar widgets.
Mover widgets.
Redimensionar widgets.
Crear páginas.
Guardar layouts.
Crear perfiles.
Configurar colores.
Crear plantillas.
Sincronizar configuraciones entre dispositivos.

Resultado: editor visual completo en el iPad moderno.

Fase 7 — Conectividad y seguridad

Prioridad: crítica antes de distribuir

Objetivo: garantizar conexiones fiables y protegidas.

Tareas:

Emparejamiento QR.
Tokens individuales.
Autenticación por dispositivo.
HTTPS.
WSS.
Certificado local de confianza.
Gestión de dispositivos autorizados.
Reconexión automática.
Compatibilidad Wi-Fi.
Compatibilidad Ethernet USB-C.
Configuración de firewall.
Registro de acciones.
Pruebas de seguridad.

Resultado: conectividad segura y estable.

Fase 8 — Instalador y distribución

Prioridad: alta

Objetivo: simplificar la instalación y configuración.

Tareas:

Preparar publicación .NET.
Crear instalador Windows.
Configurar inicio automático.
Crear icono en bandeja.
Preparar configuración inicial.
Generar QR de emparejamiento.
Crear procedimiento de desinstalación.
Documentar actualizaciones.
Preparar paquetes de distribución.

Resultado: instalación sencilla sin intervención técnica habitual.

Fase 9 — Pruebas y lanzamiento 1.0

Objetivo: validar el sistema completo.

Pruebas:

Windows 11 funcionando durante periodos prolongados.
iPad Air conectado durante varias horas.
iPad 10 conectado simultáneamente.
Sincronización de métricas.
Control multimedia.
Reconexión tras perder Wi-Fi.
Reinicio del agente.
Prueba de Ethernet.
Compatibilidad de Safari antiguo.
Rendimiento y consumo de memoria.
Validación de autenticación.
Prueba de instalación y desinstalación.

Criterio de lanzamiento: ambas generaciones de iPad deben poder utilizar el sistema simultáneamente sin comprometer la estabilidad del agente.

Versiones futuras
1.1 — Widgets avanzados
Más métricas de hardware.
Alertas configurables.
Gráficas históricas.
Nuevos widgets.
1.2 — Integraciones
Spotify.
OBS Studio.
Home Assistant.
Herramientas de desarrollo.
Notificaciones de Windows.
1.3 — Personalización
Temas visuales.
Packs de widgets.
Perfiles por aplicación.
Layouts compartidos.
2.0 — Plataforma extensible
Sistema de plugins.
API pública documentada.
Soporte para más dispositivos.
Integraciones de terceros.
Gestión avanzada de perfiles.
Prioridades generales
Prioridad	Elemento
P0	Agente Windows y comunicación
P0	Compatibilidad Legacy
P0	Seguridad
P1	Monitorización
P1	Control multimedia
P1	Dashboard Modern
P2	Editor visual
P2	Ethernet USB-C
P3	Plugins e integraciones
Filosofía de desarrollo

El proyecto se desarrollará de forma incremental.

Cada fase deberá producir una funcionalidad ejecutable y verificable antes de avanzar a la siguiente.

Se priorizarán:

Estabilidad del agente.
Compatibilidad con el iPad antiguo.
Experiencia de usuario del iPad moderno.
Seguridad de las acciones.
Modularidad y extensibilidad.

Objetivo final: convertir cualquier iPad compatible en una consola táctil para monitorizar y controlar un PC Windows de forma local.