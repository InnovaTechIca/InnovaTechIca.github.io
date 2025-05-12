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
    actividad: "Segunda ponencia",
    tipo: "ponencia",
    duracion: 60
  },
  {
    hora: "11:00 a.m.",
    actividad: "Break",
    tipo: "break",
    duracion: 20
  },
  {
    hora: "11:20 a.m.",
    actividad: "Sorteo",
    tipo: "sorteo",
    duracion: 25
  },
  {
    hora: "11:45 a.m.",
    actividad: "Tercera ponencia",
    tipo: "ponencia",
    duracion: 60
  },
  {
    hora: "12:45 p.m.",
    actividad: "Break / Almuerzo",
    tipo: "almuerzo",
    duracion: 60
  },
  {
    hora: "01:45 p.m.",
    actividad: "Cuarta ponencia",
    tipo: "ponencia",
    duracion: 75
  },
  {
    hora: "03:00 p.m.",
    actividad: "Sorteo",
    tipo: "sorteo",
    duracion: 30
  },
  {
    hora: "03:30 p.m.",
    actividad: "Quinta Ponencia",
    tipo: "ponencia",
    duracion: 60
  },
  {
    hora: "04:30 p.m.",
    actividad: "Clausura del evento",
    tipo: "clausura",
    duracion: 20
  },
  {
    hora: "04:50 p.m.",
    actividad: "Foto final",
    tipo: "foto",
    duracion: 10
  }
];

// Información sobre el evento
export const infoEvento = {
  fecha: "21 de junio de 2025",
  lugar: "Colegio de Ingenieros de Ica",
  horaInicio: "08:00 a.m.",
  horaFin: "05:00 p.m."
};