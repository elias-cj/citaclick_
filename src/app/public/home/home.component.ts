import { Component, OnInit } from '@angular/core';

// Definimos las ubicaciones de los hospitales
interface Hospital {
  name: string;
  location: google.maps.LatLngLiteral;
  description: string;
  link: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  // Definimos el centro del mapa
  center: google.maps.LatLngLiteral = { lat: -17.778, lng: -63.181 };
  zoom: number = 12;

  // Hospitales con sus ubicaciones
  hospitals: Hospital[] = [
    {
      name: 'Hospital de la Mujer',
      location: { lat: -17.780, lng: -63.184 },
      description: 'Atención especializada para mujeres, maternidad y ginecología.',
      link: 'https://www.google.com/maps'
    },
    {
      name: 'Hospital San Juan',
      location: { lat: -17.774, lng: -63.170 },
      description: 'Urgencias, pediatría y atención médica de emergencia.',
      link: 'https://www.google.com/maps'
    },
    {
      name: 'Hospital El Rosario',
      location: { lat: -17.770, lng: -63.160 },
      description: 'Cirugía, cardiología, medicina interna. Urgencias 24/7.',
      link: 'https://www.google.com/maps'
    }
  ];

  constructor() {}

  ngOnInit(): void {}
}
