# Plan de actividades — Implementación de la página "Modelo Educativo UNEMI 2026"

**Objetivo:** Publicar una nueva página con el diseño del Modelo Educativo 2026 en el sitio institucional (WordPress) y enlazarla desde el menú **Identidad → Modelo Educativo**, reemplazando el PDF que se muestra actualmente.

**Sitio:** www.unemi.edu.ec (WordPress · tema GT3 · WPBakery Page Builder)
**Alcance:** Página nueva e independiente. **No** se modifica la página actual de la Dirección de Innovación de Procesos Académicos ni el resto del sitio.

---

## Fase 1 — Preparación y respaldo
| # | Actividad | Responsable |
|---|-----------|-------------|
| 1.1 | Confirmar accesos al gestor (rol Editor) y permisos disponibles | Solicitante |
| 1.2 | Solicitar a TI/hosting un **respaldo (backup)** del sitio y confirmar si existe entorno de pruebas (*staging*) | TI / Hosting |
| 1.3 | Crear la página en estado **Borrador** ("Modelo Educativo UNEMI 2026") | Solicitante |

## Fase 2 — Adaptación del diseño a la identidad UNEMI
| # | Actividad | Responsable |
|---|-----------|-------------|
| 2.1 | Adaptar la cabecera: logo institucional de UNEMI con enlace a unemi.edu.ec | Solicitante |
| 2.2 | Alinear la **paleta de colores** a la institucional (azules #002334/#192041 + ámbar #f9b000) | Solicitante |
| 2.3 | Ajustes de menú: alineación, espaciado y altura de la barra | Solicitante |
| 2.4 | Verificar comportamiento **responsive** (menú hamburguesa en móvil) | Solicitante |

## Fase 3 — Preparación de recursos (Biblioteca de Medios)
| # | Actividad | Responsable |
|---|-----------|-------------|
| 3.1 | Subir el **video** del encabezado (hero) a Medios y obtener su URL | Solicitante |
| 3.2 | Subir el **PDF** del Modelo Educativo (para el botón de descarga) | Solicitante |
| 3.3 | Subir las **imágenes** que requiera el diseño | Solicitante |

## Fase 4 — Implementación en WordPress (por secciones)
| # | Actividad | Responsable |
|---|-----------|-------------|
| 4.1 | Insertar la fuente tipográfica en el encabezado de la página | Solicitante |
| 4.2 | Insertar los **estilos (CSS)** del diseño | Solicitante |
| 4.3 | Insertar el **código de interacción (JS)** (carrusel y animaciones) | Solicitante |
| 4.4 | Montar el **contenido sección por sección**: Cabecera, Hero, Introducción, Dimensiones, Competencias, Roles, Posgrado, Arquitectura, Evaluación, Descarga, Galería y Pie | Solicitante |

## Fase 5 — Pruebas y validación
| # | Actividad | Responsable |
|---|-----------|-------------|
| 5.1 | Revisar la página en **escritorio y móvil** | Solicitante |
| 5.2 | Validar el **movimiento de las tarjetas** (carrusel 3D y *flip cards*) | Solicitante |
| 5.3 | Resolver posibles **conflictos de estilo** con el tema | Solicitante |
| 5.4 | Verificar enlaces, descarga del PDF y reproducción del video | Solicitante |

## Fase 6 — Publicación y coordinación
| # | Actividad | Responsable |
|---|-----------|-------------|
| 6.1 | **Publicar** la página y obtener su URL definitiva | Solicitante |
| 6.2 | Solicitar al **Administrador/TI** el cambio del enlace del menú **Identidad → Modelo Educativo** (de PDF → nueva página) | TI / Administrador |
| 6.3 | **Verificación final** en producción (desde el menú institucional) | Solicitante + TI |

---

## Dependencias y notas clave
- **Backup (Fase 1.2):** depende de TI/hosting; conviene tenerlo antes de publicar.
- **Cambio de menú (Fase 6.2):** **requiere rol de Administrador** (gestión del menú/MaxMegaMenu), que el solicitante no posee como Editor. Debe ejecutarlo TI.
- **Seguridad:** no se instalan plugins ni se editan archivos del tema. El diseño se inserta **solo en esta página** (estilos y código de alcance local), sin afectar el resto del sitio.
- **Reversibilidad:** todo el trabajo se realiza primero en **borrador**; la página actual de la DIPA permanece intacta.
