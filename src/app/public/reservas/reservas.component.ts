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
  imagen: string;
}

@Component({
  selector: 'app-reservas',
  templateUrl: './reservas.component.html',
  styleUrls: ['./reservas.component.css']
})
export class ReservasComponent implements OnInit {
  medico: Medico | undefined;
  fecha: string = '';
  hora: string = '';
  horariosDisponibles: string[] = [];

  constructor(private router: Router) { }

  ngOnInit(): void {
    // Recibir el médico desde el estado de la navegación
    this.medico = history.state.medico;
    
    if (this.medico) {
      // Aquí puedes procesar los horarios según el médico (se puede ajustar si el horario depende de la fecha)
      this.horariosDisponibles = this.getHorariosDisponibles(this.medico.horasAtencion);
    }
  }

  // Método para obtener los horarios disponibles
  getHorariosDisponibles(horas: string): string[] {
    return horas.split(' - '); // Suponiendo que los horarios están en formato "8:00 AM - 2:00 PM"
  }

  // Método para confirmar la cita
  confirmarCita(): void {
    if (this.fecha && this.hora) {
      alert(`Cita agendada con ${this.medico?.nombre} para el ${this.fecha} a las ${this.hora}.`);
      this.router.navigate(['/']); // Redirigir a la página principal después de confirmar
    } else {
      alert('Por favor, selecciona una fecha y hora para la cita.');
    }
  }
}
