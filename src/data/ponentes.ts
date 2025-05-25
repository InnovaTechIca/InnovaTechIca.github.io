// Importación de fotos
import Ponente1 from "../assets/ponente1.jpg";
import LuisTasayco from "../assets/ponentes/luis-tasayco.jpg";
import GerardoCayo from "../assets/ponentes/gerardo-cayo.jpg";
import RenzoDeLaCruz from "../assets/ponentes/renzo-de-la-cruz.jpg";
import type { ImageMetadata } from "astro";

// Definición del tipo para los ponentes del evento
export interface Ponente {
  id: string;
  nombre: string;
  cargo: string;
  empresa: string;
  bio: string;
  foto: ImageMetadata;
  redesSociales: {
    linkedin?: string;
    twitter?: string;
    github?: string;
    website?: string;
  };
  temaCharla: string;
  horaCharla: string; // Hora de la charla
  descripcionCharla: string;
  orden: number; // Para ordenar los ponentes en la página
}

// Datos de los ponentes para el evento InnovaTech 2025
export const ponentes: Ponente[] = [
  {
    id: "luis-tasayco",
    nombre: "Luis Alberto Tasayco Munayco",
    cargo: "Senior Infraestructure",
    empresa: "Pacífico Seguros",
    bio: "Luis es especialista en aprendizaje automático con más de 10 años de experiencia en el sector. Ha liderado proyectos de IA para algunas de las empresas más grandes de Latinoamérica, implementando soluciones que han transformado la manera en que las organizaciones aprovechan sus datos.",
    foto: LuisTasayco,
    redesSociales: {
      linkedin: "https://www.linkedin.com/in/luis-alberto-tasayco-munayco",
    },
    temaCharla: "Infraestructura",
    horaCharla: "10:00 AM",
    descripcionCharla:
      "Exploraremos cómo las empresas pueden implementar soluciones de inteligencia artificial para optimizar procesos y tomar decisiones basadas en datos. Se presentarán casos prácticos y recomendaciones para la integración exitosa de la IA en cualquier organización.",
    orden: 1,
  },
  {
    id: "gerardo-cayo",
    nombre: "Gerardo Germán Cayo Morales",
    cargo: "Senior Data Solutions Architect",
    empresa: "Indra",
    bio: "Gerardo es ingeniero de software con especialización en tecnologías blockchain. Co-fundó Blockchain Innovations en 2018, una startup que desarrolla soluciones para la trazabilidad de productos agrícolas usando blockchain. Su trabajo ha sido reconocido por el Ministerio de Producción como una de las iniciativas más innovadoras del país.",
    foto: GerardoCayo,
    redesSociales: {
      linkedin: "https://www.linkedin.com/in/ggcayo/",
    },
    temaCharla: "Analítica de Datos Datalakehouse",
    horaCharla: "11:30 AM",
    descripcionCharla:
      "Descubre cómo la tecnología blockchain está revolucionando industrias tradicionales como la agricultura, logística y seguros. Presentaremos casos reales de implementación en Perú y las oportunidades de desarrollo profesional en este campo emergente.",
    orden: 2,
  },
  {
    id: "renzo-de-la-cruz",
    nombre: "Renzo De la Cruz Unzueta",
    cargo: "BBVA Perú",
    empresa: "Data Engineer",
    bio: "Renzo es experto en seguridad informática con certificaciones CISSP y CEH. Ha trabajado protegiendo infraestructuras críticas en sectores como banca y telecomunicaciones. Actualmente dirige el equipo de ciberseguridad para Latinoamérica en SecureNet Global, donde implementa estrategias de defensa contra amenazas avanzadas.",
    foto: RenzoDeLaCruz,
    redesSociales: {
      linkedin: "https://www.linkedin.com/in/renzodlcu/",
    },
    temaCharla: "Data",
    horaCharla: "01:00 PM",
    descripcionCharla:
      "Analizaremos los retos de seguridad que enfrentan las organizaciones durante su proceso de transformación digital y las mejores prácticas para proteger datos e infraestructuras críticas. Incluiremos demostraciones de ataques comunes y cómo prevenirlos.",
    orden: 3,
  },
  {
    id: "yvan-levano-casas",
    nombre: "Yvan Lévano Casas",
    cargo: "Ingeniero DevOps Senior",
    empresa: "CloudNative Solutions",
    bio: "Miguel es especialista en arquitecturas cloud-native y DevOps. Ha liderado la transformación de infraestructuras tradicionales a modelos basados en microservicios y contenedores para empresas del Fortune 500. Es contribuidor activo en proyectos open source y mentor de jóvenes desarrolladores.",
    foto: Ponente1,
    redesSociales: {
      linkedin: "https://linkedin.com/in/miguel-torres-guzman",
      github: "https://github.com/migtorres",
      twitter: "https://twitter.com/migueltorresg",
    },
    temaCharla: "Ciberseguridad",
    horaCharla: "03:00 PM",
    descripcionCharla:
      "Compartiremos experiencias reales implementando culturas DevOps en entornos empresariales tradicionales. Abordaremos desafíos comunes, métricas de éxito y herramientas que facilitan la adopción de estas prácticas para mejorar la entrega continua de software.",
    orden: 4,
  },
  {
    id: "kevin-munoz-torres",
    nombre: "Kevin Muñoz Torres",
    cargo: "Diseñadora de Experiencia de Usuario",
    empresa: "UXInnovate",
    bio: "Sofía combina diseño y psicología para crear experiencias digitales centradas en el usuario. Ha trabajado con startups y grandes corporaciones rediseñando interfaces que mejoran significativamente las métricas de conversión y retención. Es autora del libro 'Diseño UX en mercados emergentes' y docente universitaria.",
    foto: Ponente1,
    redesSociales: {
      linkedin: "https://linkedin.com/in/sofia-castro-ux",
      website: "https://sofiacastro.design",
      twitter: "https://twitter.com/sofiacastroux",
    },
    temaCharla: "IA",
    horaCharla: "04:30 PM",
    descripcionCharla:
      "Exploraremos metodologías de diseño que no solo crean interfaces atractivas sino que responden a objetivos de negocio concretos. Veremos cómo implementar design sprints, investigación con usuarios reales y cómo medir el impacto de nuestras decisiones de diseño.",
    orden: 5,
  },
];
