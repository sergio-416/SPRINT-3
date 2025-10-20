# Film Data Analysis

Aplicación web para el análisis y filtrado de datos de películas utilizando JavaScript moderno y metodologías TDD.

## Descripción

Proyecto desarrollado como parte del IT Academy de Barcelona Activa que implementa diversas funcionalidades para procesar y analizar información cinematográfica mediante el uso de arrays, métodos funcionales y testing automatizado.

## Funcionalidades

- **Extracción de directores**: Obtención de listado completo de directores
- **Filtrado por director**: Búsqueda de películas por director específico
- **Cálculo de promedios**: Media de puntuaciones por director y género
- **Ordenamiento alfabético**: Ordenación de películas por título (top 20)
- **Ordenamiento cronológico**: Ordenación por año y título
- **Conversión de duración**: Transformación de formato hora/minuto a minutos totales
- **Mejor película por año**: Identificación de la película mejor valorada por año

## Tecnologías Utilizadas

- JavaScript (ES6+)
- Node.js
- npm
- Jest (Testing)

## Metodología

El proyecto implementa **Test-Driven Development (TDD)**, donde cada funcionalidad se valida mediante tests unitarios antes de su implementación.

## Instalación y Uso

```bash
npm install
npm run test:watch
```

Los resultados de los tests se generan automáticamente en `test-results.html`.

## Estructura del Código

Cada función mantiene el **principio de responsabilidad única (SRP)**, separando la lógica de procesamiento del renderizado de datos.

## Estado del Proyecto

✅ Todos los tests pasados correctamente

## Autor

**Sergio Morey**
[GitHub](https://github.com/sergio-416)

---

Proyecto desarrollado en IT Academy - Barcelona Activa
