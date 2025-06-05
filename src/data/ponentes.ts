// Importación de fotos
import KevinMunoz from "../assets/ponentes/KEVIN.jpg";
import LuisTasayco from "../assets/ponentes/LUIS.jpg";
import GerardoCayo from "../assets/ponentes/GERMAN.jpg";
import RenzoDeLaCruz from "../assets/ponentes/RENZO.jpg";
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
    temaCharla: "Big Data",
    horaCharla: "10:00 AM",
    descripcionCharla:
      "Exploraremos cómo las empresas pueden implementar soluciones de inteligencia artificial para optimizar procesos y tomar decisiones basadas en datos. Se presentarán casos prácticos y recomendaciones para la integración exitosa de la IA en cualquier organización.",
    orden: 1,
  },
  {
    id: "luis-tasayco",
    nombre: "Luis Alberto Tasayco Munayco",
    cargo: "Senior Infrastructure & Systems Engineering",
    empresa: "Prima AFP / Pacífico Seguros",
    bio: "",
    foto: LuisTasayco,
    redesSociales: {
      linkedin: "https://www.linkedin.com/in/luis-alberto-tasayco-munayco",
    },
    temaCharla: "Ciberseguridad",
    horaCharla: "11:30 AM",
    descripcionCharla:
      "Descubre cómo la tecnología blockchain está revolucionando industrias tradicionales como la agricultura, logística y seguros. Presentaremos casos reales de implementación en Perú y las oportunidades de desarrollo profesional en este campo emergente.",
    orden: 2,
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
    temaCharla: "Inteligencia Artificial",
    horaCharla: "01:00 PM",
    descripcionCharla:
      "Analizaremos los retos de seguridad que enfrentan las organizaciones durante su proceso de transformación digital y las mejores prácticas para proteger datos e infraestructuras críticas. Incluiremos demostraciones de ataques comunes y cómo prevenirlos.",
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
      linkedin: "https://www.linkedin.com/in/ggcayo?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app "
    },
    temaCharla: "Análisis de Datos",
    horaCharla: "03:00 PM",
    descripcionCharla:
      "Compartiremos experiencias reales implementando culturas DevOps en entornos empresariales tradicionales. Abordaremos desafíos comunes, métricas de éxito y herramientas que facilitan la adopción de estas prácticas para mejorar la entrega continua de software.",
    orden: 4,
  }
];
