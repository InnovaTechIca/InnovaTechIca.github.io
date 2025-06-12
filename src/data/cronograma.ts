// Definición del tipo para los eventos del cronograma
export interface EventoCronograma {
  hora: string;
  actividad: string;
  tipo: 'ponencia' | 'break' | 'sorteo' | 'inauguracion' | 'foto' | 'recibimiento' | 'clausura' | 'almuerzo';
  duracion: number; // en minutos
}

// Datos del cronograma para el evento InnovaTech 2025
export const eventosCronograma: EventoCronograma[] = [
  {
    hora: "08:00 a.m.",
    actividad: "Recibimiento de participantes",
    tipo: "recibimiento",
    duracion: 30
  },
  {
    hora: "08:30 a.m.",
    actividad: "Inauguración y palabras de bienvenida",
    tipo: "inauguracion",
    duracion: 30
  },
  {
    hora: "09:00 a.m.",
    actividad: "Primera ponencia",
    tipo: "ponencia",
    duracion: 60
  },
  {
    hora: "10:00 a.m.",
    actividad: "Presentación Comunidad",
    tipo: "recibimiento",
    duracion: 30
  },
  {
    hora: "10:30 a.m.",
    actividad: "Segunda ponencia",
    tipo: "ponencia",
    duracion: 60
  },
  {
    hora: "11:30 a.m.",
    actividad: "Break",
    tipo: "break",
    duracion: 15
  },
  {
    hora: "11:45 a.m.",
    actividad: "Sorteo",
    tipo: "sorteo",
    duracion: 10
  },
  {
    hora: "12:00 p.m.",
    actividad: "Tercera ponencia",
    tipo: "ponencia",
    duracion: 60
  },
  {
    hora: "01:00 p.m.",
    actividad: "Presentación Comunidad",
    tipo: "recibimiento",
    duracion: 30
  },
  {
    hora: "01:30 p.m.",
    actividad: "Break Almuerzo",
    tipo: "almuerzo",
    duracion: 60
  },
  {
    hora: "02:30 p.m.",
    actividad: "Sorteo",
    tipo: "sorteo",
    duracion: 15
  },
  {
    hora: "02:45 p.m.",
    actividad: "Cuarta ponencia",
    tipo: "ponencia",
    duracion: 60
  },
  {
    hora: "03:45 p.m.",
    actividad: "Presentación Comunidad / Sorteo",
    tipo: "sorteo",
    duracion: 30
  },
  {
    hora: "04:15 p.m.",
    actividad: "Quinta ponencia",
    tipo: "ponencia",
    duracion: 60
  },
  {
    hora: "05:15 p.m.",
    actividad: "Sorteo / Dinámica",
    tipo: "sorteo",
    duracion: 15
  },
  {
    hora: "05:30 p.m.",
    actividad: "Clausura y Cierre del evento",
    tipo: "clausura",
    duracion: 15
  },
  {
    hora: "05:45 p.m.",
    actividad: "Fin del Evento",
    tipo: "clausura",
    duracion: 15
  }
];

// Información sobre el evento
export const infoEvento = {
  fecha: "21 de junio de 2025",
  lugar: "Colegio de Ingenieros de Ica",
  horaInicio: "08:00 a.m.",
  horaFin: "06:00 p.m."
};