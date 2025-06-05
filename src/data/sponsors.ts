// Importación de logos
import LogoColegio from '../assets/sponsors/ci_ica.png';
import LogoIndra from '../assets/sponsors/indra.jpg';
import LogoCajaMunicipal from '../assets/sponsors/caja_ica.png';
import LogoDevHouse from '../assets/sponsors/devhouse.jpg';
import LogoRumba77 from '../assets/sponsors/rumba77.svg';
import type { ImageMetadata } from 'astro';

// Definición del tipo para los sponsors del evento
export interface Sponsor {
  id: string;
  nombre: string;
  logo: ImageMetadata;
  descripcion: string;
  sitioWeb: string;
  redesSociales: {
    linkedin?: string;
    twitter?: string;
    facebook?: string;
    instagram?: string;
    github?: string;
  };
  beneficios: string[]; // Lo que obtienen como patrocinadores
  orden: number; // Para ordenar los sponsors en la página
}

// Datos de los sponsors para el evento InnovaTech 2025
export const sponsors: Sponsor[] = [
  // {
  //   id: "colegio-ingenieros-ica",
  //   nombre: "Colegio de Ingenieros de Ica",
  //   logo: LogoColegio,
  //   descripcion: "El Colegio de Ingenieros de Ica - Consejo Departamental de Ica es una institución autónoma con personería jurídica de derecho público interno que representa y agrupa a los ingenieros profesionales de la región Ica, promoviendo el desarrollo tecnológico y la formación continua de sus miembros.",
  //   sitioWeb: "https://www.cdica.org.pe/",
  //   redesSociales: {
  //     facebook: "https://www.facebook.com/cipcdica",
  //     linkedin: "https://www.linkedin.com/company/colegio-de-ingenieros-del-peru",
  //   },
  //   beneficios: [
  //     "Logo prominente en todos los materiales del evento",
  //     "Stand premium en la zona de exhibición",
  //     "Presentación de 15 minutos durante la ceremonia de apertura",
  //     "5 entradas VIP para el evento completo"
  //   ],
  //   orden: 1
  // },
  // {
  //   id: "indra",
  //   nombre: "Indra",
  //   logo: LogoIndra,
  //   descripcion: "Indra es una de las principales empresas globales de tecnología y consultoría, con una fuerte presencia en el sector de defensa y seguridad. Con más de 20 años de experiencia en el mercado peruano, Indra ofrece soluciones innovadoras en áreas como la transformación digital, la inteligencia artificial y la ciberseguridad.",
  //   sitioWeb: "https://www.indracompany.com",
  //   redesSociales: {
  //     linkedin: "https://www.linkedin.com/company/indra",
  //     twitter: "https://twitter.com/indra",
  //     instagram: "https://www.instagram.com/indra",
  //     facebook: "https://www.facebook.com/indra",
  //   },
  //   beneficios: [
  //     "Logo destacado en materiales del evento",
  //     "Stand en la zona de exhibición",
  //     "Mención especial durante la ceremonia de apertura",
  //     "3 entradas VIP para el evento completo"
  //   ],
  //   orden: 2
  // },
  // {
  //   id: "caja-municipal-ica",
  //   nombre: "Caja Municipal Ica",
  //   logo: LogoCajaMunicipal,
  //   descripcion: "Caja Municipal Ica es una entidad financiera peruana que ofrece servicios de ahorro y crédito a la población. Fundada en 1994, se ha consolidado como una de las principales cajas municipales del país, promoviendo el desarrollo económico y social de la región Ica a través de productos financieros accesibles y responsables.",
  //   sitioWeb: "https://www.cajamunicipalica.pe",
  //   redesSociales: {
  //     linkedin: "https://www.linkedin.com/company/caja-municipal-ica",
  //     twitter: "https://twitter.com/caja_municipal_ica",
  //     instagram: "https://www.instagram.com/caja_municipal_ica",
  //   },
  //   beneficios: [
  //     "Logo en materiales digitales del evento",
  //     "Espacio para banner promocional",
  //     "2 entradas para el evento completo"
  //   ],
  //   orden: 3
  // },
  // {
  //   id: "dev-house",
  //   nombre: "Dev House",
  //   logo: LogoDevHouse,
  //   descripcion: "Dev House es un restaurante que ofrece una experiencia gastronómica única, combinando sabores locales con técnicas culinarias modernas.",
  //   sitioWeb: "https://www.devhouse.com",
  //   redesSociales: {
  //     linkedin: "https://www.linkedin.com/company/devhouse",
  //     twitter: "https://twitter.com/devhouse",
  //   },
  //   beneficios: [
  //     "Logo en el sitio web del evento",
  //     "Mención en redes sociales",
  //     "2 entradas para el evento completo"
  //   ],
  //   orden: 4
  // },
  // {
  //   id: "rumba77",
  //   nombre: "Rumba77",
  //   logo: LogoRumba77,
  //   descripcion: "Rumba77 es una plataforma web que te ayuda a buscar proveedores para tus eventos o fiestas, crear invitaciones web y añadir tu lista de regalos.",
  //   sitioWeb: "https://rumba77.com/",
  //   redesSociales: {
  //     linkedin: "https://www.linkedin.com/company/rumba77",
  //     twitter: "https://twitter.com/rumba77",
  //   },
  //   beneficios: [
  //     "Logo en el sitio web del evento",
  //     "Mención en redes sociales",
  //     "2 entradas para el evento completo"
  //   ],
  //   orden: 5
  // },
];