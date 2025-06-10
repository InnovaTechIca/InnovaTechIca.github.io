# 🚀 InnovaTech Ica - Landing Page

<div align="center">

![InnovaTech Logo](public/favicon.jpeg)

[![Astro](https://img.shields.io/badge/Astro-FF5D01?style=for-the-badge&logo=astro&logoColor=white)](https://astro.build)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com)
[![PNPM](https://img.shields.io/badge/pnpm-%234a4a4a.svg?style=for-the-badge&logo=pnpm&logoColor=white)](https://pnpm.io)

</div>

## 📋 Descripción
Landing Page desarrollada con Astro, un moderno generador de sitios estáticos que ofrece un rendimiento óptimo y una experiencia de desarrollo excepcional. Este proyecto representa la presencia digital de InnovaTech Ica, una empresa líder en soluciones tecnológicas innovadoras.

### ✨ Características Principales
- ⚡ Rendimiento ultrarrápido
- 📱 Diseño responsive
- 🎨 Interfaz moderna y atractiva
- 🔍 SEO optimizado
- 🚀 Despliegue automático
- 🔒 Seguridad mejorada

## 🛠️ Stack Tecnológico

### Frontend
- **Astro** - Framework para sitios estáticos de alto rendimiento
- **TypeScript** - Tipado estático para JavaScript
- **TailwindCSS** - Framework CSS utilitario
- **Alpine.js** - Framework JavaScript ligero para interactividad

### Herramientas de Desarrollo
- **PNPM** - Gestor de paquetes rápido y eficiente
- **ESLint** - Linter para JavaScript/TypeScript
- **Prettier** - Formateador de código
- **GitHub Actions** - CI/CD y despliegue automático

## 🚀 Requisitos Previos
- Node.js (v18.0.0 o superior)
- PNPM (v8.0.0 o superior)
- Git

## 📦 Instalación y Configuración

```bash
# Clonar el repositorio
git clone https://github.com/InnovaTechGroupUNICA/InnovaTechIca.github.io.git

# Navegar al directorio del proyecto
cd InnovaTechIca.github.io

# Instalar dependencias
pnpm install

# Iniciar servidor de desarrollo
pnpm dev
```

## 🏗️ Arquitectura del Proyecto
```
/
├── public/              # Archivos estáticos
│   ├── images/         # Imágenes optimizadas
│   └── fonts/          # Fuentes personalizadas
├── src/
│   ├── components/     # Componentes reutilizables
│   │   ├── ui/        # Componentes de UI básicos
│   │   └── sections/  # Secciones de la landing page
│   ├── layouts/       # Plantillas de diseño
│   ├── pages/         # Páginas de la aplicación
│   ├── styles/        # Estilos globales
│   └── utils/         # Utilidades y helpers
├── astro.config.mjs   # Configuración de Astro
├── tailwind.config.js # Configuración de Tailwind
└── package.json       # Dependencias y scripts
```

## ⚙️ Scripts Disponibles

| Comando | Descripción |
|---------|-------------|
| `pnpm dev` | Inicia el servidor de desarrollo en `localhost:4321` |
| `pnpm build` | Genera la versión de producción en `./dist/` |
| `pnpm preview` | Previsualiza la versión de producción localmente |
| `pnpm astro check` | Ejecuta verificaciones de tipos y validaciones |
| `pnpm astro add` | Añade integraciones y adaptadores |
| `pnpm lint` | Ejecuta el linter para verificar el código |
| `pnpm format` | Formatea el código según las reglas establecidas |

## 🚀 Despliegue
El sitio está configurado para desplegarse automáticamente en GitHub Pages cuando se hace push a la rama principal. El proceso de CI/CD incluye:

1. Verificación de tipos
2. Linting del código
3. Build de producción
4. Despliegue automático

## 📚 Documentación y Recursos
- [Documentación de Astro](https://docs.astro.build)
- [Guía de Estilo](https://docs.astro.build/en/guides/styling/)
- [Referencia de Componentes](https://docs.astro.build/en/reference/api-reference/)
- [Guía de Contribución](./CONTRIBUTING.md)
- [Política de Código de Conducta](./CODE_OF_CONDUCT.md)

## 🤝 Contribución
1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

### Guías de Contribución
- Sigue las convenciones de código establecidas
- Añade tests para nuevas funcionalidades
- Actualiza la documentación según sea necesario
- Asegúrate de que todos los tests pasen

## 📞 Contacto y Soporte
- 🌐 Sitio Web: [innovatech.github.io](https://innovatech.github.io)
- 📧 Email: InnovaTechGroupUNICA@gmail.com

## 🙏 Agradecimientos
- Equipo de desarrollo de Astro
- Comunidad de código abierto
- Todos los contribuidores del proyecto
