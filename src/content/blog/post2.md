---
title: "Optimización en la Gestión de Facturas: Identificación de Saltos de Secuencia en SMO"
description: "Descubre cómo SMO ha implementado una solución innovadora para identificar y gestionar saltos de secuencia en facturas, optimizando la administración comercial."
pubDate: "Mar 22 2025"
heroImage: "/posts/post2/cover.jpg"
badge: "Innovación 🚀"
---

### ¿De qué trata SMO?

SMO es un sistema integral diseñado para la administración eficiente de locales comerciales y la gestión de comisiones por ventas. Este sistema permite a los propietarios y administradores de locales comerciales optimizar sus operaciones mediante el análisis de datos y la generación automatizada de reportes. SMO ofrece dos modalidades de cobro por el arriendo de locales: una tarifa fija mensual, ideal para negocios con ingresos estables, y una comisión basada en las ventas realizadas, que se adapta a las necesidades de negocios con ingresos variables. Además, SMO proporciona herramientas para monitorear el rendimiento de los locales y garantizar una gestión transparente y precisa de las comisiones.

### Requerimientos del Proyecto

Como parte del equipo de desarrollo de SMO recibimos la solicitud de implementar una nueva característica para detectar saltos de secuencia en facturas. Los requerimientos específicos fueron:

- Contar con reportes desde enero de 2024 de manera mensual.
- Por defecto, mostrar el listado del día anterior.
- Visualizar un listado de los saltos de secuencia de cada local.
- Top 5 de locales con más secuenciales faltantes.
- Exportar el listado de secuenciales faltantes a un archivo CSV para auditorías.

### Retos del Proyecto

1. **Base de datos extensa:** La cantidad de datos históricos requería optimizaciones en las consultas.
2. **Implementación de nuevos índices:** Fue necesario crear índices para mejorar el rendimiento.
3. **Creación de funciones Lambda:** Se desarrollaron funciones programadas (cronJobs) para ejecutar tareas diarias y mensuales.
4. **Nuevas tablas:** Se añadieron tablas para almacenar el secuencial actual y los reportes de secuenciales faltantes.
5. **Carga irregular de datos:** Los locales comerciales no siempre suben sus facturas en el día correspondiente, lo que complicó el análisis retroactivo.

### Solución Implementada

- **Planificación de proyecto:** Se establecieron hitos y se asignaron tareas a los miembros del equipo.

<div style="text-align: center; solid #ccc; padding: 10px; width: 40%; margin: auto;">
  <img src="/posts/post2/planning.png" alt="Planificación de proyecto" style="max-width: 100%; height: auto;">
</div>

- **Análisis de Datos:** Se realizó un análisis de los datos históricos para identificar patrones y tendencias.
- **Diagramación de la arquitectura:** Se diseñó una nueva arquitectura para soportar la funcionalidad.

<div style="text-align: center; solid #ccc; padding: 10px; width: 40%; margin: auto;">
  <img src="/posts/post2/architecture.png" alt="Planificación de proyecto" style="max-width: 100%; height: auto;">
</div>

- **Implementación de Funciones Serverless:** Se desarrollaron funciones serverless utilizando AWS Lambda para automatizar la detección de secuenciales faltantes y la generación de reportes. Estas funciones se integraron con otros servicios de AWS, como DynamoDB y EventBridge, para garantizar un procesamiento eficiente y escalable de los datos.
- **Diseño de Base de Datos:** Se implementaron mejoras en el diseño de la base de datos, incluyendo la creación de nuevas tablas para gestionar los secuenciales y almacenar los reportes de manera eficiente. Estas tablas fueron optimizadas para soportar consultas de alto rendimiento y garantizar la integridad de los datos.
- **Dashboard:** Se diseñó un dashboard para visualizar los reportes de manera intuitiva.

### Tecnologías Utilizadas

<div style="display: flex; flex-wrap: wrap; gap: 10px; justify-content: center;">
  <span style="display: inline-block; background-color: #e6e5e5; border-radius: 20px; padding: 10px 20px; font-size: 14px; font-weight: bold; color: #333;">AWS Lambda</span>
  <span style="display: inline-block; background-color: #e6e5e5; border-radius: 20px; padding: 10px 20px; font-size: 14px; font-weight: bold; color: #333;">TypeScript</span>
  <span style="display: inline-block; background-color: #e6e5e5; border-radius: 20px; padding: 10px 20px; font-size: 14px; font-weight: bold; color: #333;">DynamoDB</span>
  <span style="display: inline-block; background-color: #e6e5e5; border-radius: 20px; padding: 10px 20px; font-size: 14px; font-weight: bold; color: #333;">Retool</span>
  <span style="display: inline-block; background-color: #e6e5e5; border-radius: 20px; padding: 10px 20px; font-size: 14px; font-weight: bold; color: #333;">EventBridge</span>
  <span style="display: inline-block; background-color: #e6e5e5; border-radius: 20px; padding: 10px 20px; font-size: 14px; font-weight: bold; color: #333;">CloudWatch</span>
</div>
