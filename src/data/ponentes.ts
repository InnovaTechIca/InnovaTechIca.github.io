// Importación de fotos
import KevinMunoz from "../assets/ponentes/KEVIN.jpg";
import LuisTasayco from "../assets/ponentes/LUIS.jpg";
import GerardoCayo from "../assets/ponentes/GERMAN.jpg";
import RenzoDeLaCruz from "../assets/ponentes/RENZO.jpg";
import YvanLevano from "../assets/ponentes/YVAN.jpg";
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
    id: "renzo-de-la-cruz",
    nombre: "Renzo Orlando De La Cruz Unzueta",
    cargo: "Data Engineer Associate",
    empresa: "BBVA",
    bio: "Ingeniero de sistemas especializado en Ingeniería de Datos liderando proyectos en BBVA.",
    foto: RenzoDeLaCruz,
    redesSociales: {
      linkedin: "https://www.linkedin.com/in/renzodlcu",
    },
    temaCharla: "Manejo de datos con PySpark",
    horaCharla: "04:15 PM",
    descripcionCharla:
      "Aprende a manejar datos con PySpark, una herramienta poderosa para el análisis de datos.",
    orden: 5,
  },
  {
    id: "luis-tasayco",
    nombre: "Luis Alberto Tasayco Munayco",
    cargo: "Senior Infrastructure & Systems Engineering",
    empresa: "Prima AFP / Pacífico Seguros",
    bio: "Profesional de TI con conocimiento en Metodologia Agil y Gestion de Servicios, Gestion de Entornos de Infraestructura y Ciberseguridad Middleware.",
    foto: LuisTasayco,
    redesSociales: {
      linkedin: "https://www.linkedin.com/in/luis-alberto-tasayco-munayco",
    },
    temaCharla: "Gestión de vulnerabilidades sobre la infraestructura empresarial y en sus aplicaciones",
    horaCharla: "02:45 PM",
    descripcionCharla:
      "Aprende a gestionar vulnerabilidades sobre la infraestructura empresarial y en sus aplicaciones.",
    orden: 4,
  },
  {
    id: "kevin-munoz-torres",
    nombre: "Kevin Muñoz Torres",
    cargo: "Software Engineer Associate",
    empresa: "BBVA",
    bio: "Especialista en ciencia de datos e inteligencia artificial, impulsando el intercambio de conocimiento para desarrollar soluciones basadas en datos.",
    foto: KevinMunoz,
    redesSociales: {
      linkedin: "www.linkedin.com/in/kevin-muñoz-torres-9498061a3",
    },
    temaCharla: "De RNNs a Transformers… y cómo el Model Context Protocol integra la IA en soluciones reales",
    horaCharla: "12:00 PM",
    descripcionCharla:
      "Descubre como el Model Context Protocol (MCP) integra la IA en la vida real.",
    orden: 3,
  },
  {
    id: "german-cayo-morales",
    nombre: "Germán Cayo Morales",
    cargo: "Data Engineer Senior",
    empresa: "Indra Minsait",
    bio: "Director Pro Secretario Colegio de Ingenieros del Perú C.D Ica",
    foto: GerardoCayo,
    redesSociales: {
      linkedin: "https://www.linkedin.com/in/ggcayo?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
    },
    temaCharla: "Implementación de Lakehouse en Microsoft Fabric.",
    horaCharla: "10:30 AM",
    descripcionCharla:
      "Descubre como implementar Lakehouse en Microsoft Fabric.",
    orden: 2,
  },
  {
    id: "yvan-levano",
    nombre: "Yvan Francisco Lévano Casas",
    cargo: "Gerente de Seguridad de la Información",
    empresa: "",
    bio: "Profesional especializado  en Seguridad de la Información con más de 13 años de experiencia en el sector financiero y medios de pago. Lideró procesos de certificación en PCI-DSS. Tiene experiencia como docente universitario e instructor en cursos de certificación internacional.",
    foto: YvanLevano,
    redesSociales: {
      linkedin: "https://www.linkedin.com/in/yvanlevanocasas"
    },
    temaCharla: "De las aulas a Ciber Guardian: Talento para proteger el futuro",
    horaCharla: "09:00 AM",
    descripcionCharla:
      "",
    orden: 1,
  }
];