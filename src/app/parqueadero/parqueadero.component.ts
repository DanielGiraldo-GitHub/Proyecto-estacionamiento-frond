import { Component, OnInit } from '@angular/core';
import { ParqueaderoService } from './parqueadero.service';
import { VehiculoModel } from './../model/vehiculo.model';
import {enableProdMode} from '@angular/core';
import { DisponibilidadModel } from './../model/disponibilidad.model';
enableProdMode();
@Component({
  selector: 'app-parqueadero',
  templateUrl: './parqueadero.component.html',
  styleUrls: ['./parqueadero.component.css'],
  providers: [ParqueaderoService]
})
export class ParqueaderoComponent implements OnInit {

  private carrosParqueados: Array<VehiculoModel>;
  private motosParqueadas: Array<VehiculoModel>;
  private disponibilidad: DisponibilidadModel;
  private disponibilidadCarros: number;
  private disponibilidadMotos: number;

  constructor(private parqueaderoService: ParqueaderoService) { }

  ngOnInit() {
    this.loadParqueadero();
  }

  private loadParqueadero(): void{
    this.parqueaderoService.getCarrosParquedos().subscribe (res =>{
      this.carrosParqueados = res;
    });

    this.parqueaderoService.getMotosParquedas().subscribe (res => {
      this.motosParqueadas = res;
    });

    this.parqueaderoService.getDisponibilidad().subscribe (res => {
      this.disponibilidad = res;
      
    });

  }
}
