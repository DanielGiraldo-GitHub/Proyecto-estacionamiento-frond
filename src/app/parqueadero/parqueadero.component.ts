import { Component, OnInit } from '@angular/core';
import { ParqueaderoService } from './parqueadero.service';
import { VehiculoModel } from './../model/vehiculo.model';
import {enableProdMode} from '@angular/core';
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

  constructor(private parqueaderoService: ParqueaderoService) { }

  ngOnInit() {
    this.loadParqueadero();
  }

  private loadParqueadero(): void{
    this.parqueaderoService.getCarrosParquedos();
    this.parqueaderoService.getMotosParquedas();
  }
}
