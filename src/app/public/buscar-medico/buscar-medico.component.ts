import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

interface Medico {
  id: number;
  nombre: string;
  especialidad: string;
  descripcion: string;
  horasAtencion: string;
  telefono: string;
  email: string;
  imagen: string; // Agregamos un campo para la imagen del médico
}

@Component({
  selector: 'app-buscar-medico',
  templateUrl: './buscar-medico.component.html',
  styleUrls: ['./buscar-medico.component.css']
})
export class BuscarMedicoComponent implements OnInit {
  // Lista de médicos de ejemplo
  medicos: Medico[] = [
    {
      id: 1,
      nombre: 'Dr. Juan Pérez',
      especialidad: 'Cardiología',
      descripcion: 'Especialista en enfermedades del corazón.',
      horasAtencion: 'Lunes a Viernes: 8:00 AM - 2:00 PM',
      telefono: '123-456-789',
      email: 'juan.perez@hospital.com',
      imagen: 'https://vithas.es/wp-content/uploads/2021/08/0b11b0c8f940261a80cbdb8337468ac8-330x416.jpeg' // Ruta de la imagen del médico
    },
    {
      id: 2,
      nombre: 'Dra. Ana Gómez',
      especialidad: 'Pediatría',
      descripcion: 'Atención médica para niños y adolescentes.',
      horasAtencion: 'Lunes a Viernes: 9:00 AM - 4:00 PM',
      telefono: '987-654-321',
      email: 'ana.gomez@hospital.com',
      imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfmMdxC5hi9O0OVrn5yy3XlQzBjMWJ72u47A&s' // Ruta de la imagen
    },
    {
      id: 3,
      nombre: 'Dr. Carlos Díaz',
      especialidad: 'Dermatología',
      descripcion: 'Tratamiento de enfermedades de la piel.',
      horasAtencion: 'Lunes, Miércoles y Viernes: 10:00 AM - 1:00 PM',
      telefono: '456-123-789',
      email: 'carlos.diaz@hospital.com',
      imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTq-DTlZ8JLpvim4sS-bhmkH3pyfUYU9gChyg&s' // Ruta de la imagen
    },
    {
      id: 4,
      nombre: 'Dr. Elias Campos',
      especialidad: 'Dermatología',
      descripcion: 'Tratamiento de enfermedades de la piel.',
      horasAtencion: 'Lunes, Miércoles y Viernes: 10:00 AM - 1:00 PM',
      telefono: '456-123-789',
      email: 'carlos.diaz@hospital.com',
      imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQioSVp5SZl2mEeRWfgSDAYuetO1nvuBy79xQ&s' // Ruta de la imagen
    }
  ];

  // Filtro de especialidad
  especialidadFiltro: string = '';
  medicoFiltro: string = '';

  constructor(private router: Router) {}

  // Función para filtrar médicos por especialidad o nombre
  getMedicosFiltrados() {
    return this.medicos.filter(medico => {
      const nombreCoincide = medico.nombre.toLowerCase().includes(this.medicoFiltro.toLowerCase());
      const especialidadCoincide = medico.especialidad.toLowerCase().includes(this.especialidadFiltro.toLowerCase());
      return nombreCoincide && especialidadCoincide;
    });
  }

  // Función para redirigir a la página de reservas con la información del médico
  agendarCita(medico: Medico) {
    this.router.navigate(['/reservas'], { state: { medico } });
  }

  ngOnInit(): void {
    // Aquí puedes hacer cualquier lógica inicial que necesites
  }
}
