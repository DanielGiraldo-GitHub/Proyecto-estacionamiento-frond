import { Component, OnInit, Output } from '@angular/core';
import { ParqueaderoService } from './parqueadero.service';
import { VehiculoModel } from './../model/vehiculo.model';
import {enableProdMode} from '@angular/core';
import { ParqueaderoModule } from './../model/parqueadero.model';
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
  @Output() disponibilidad : DisponibilidadModel;
  private vehiculo: VehiculoModel;
  private tipoVehiculo: string;
  private parqueadero: ParqueaderoModule;
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

  private buscarVehiculo(placa): void{

    if(placa == ""){
    swal ( "","Por favor ingrese una placa", " error ")
  }else{
    this.parqueaderoService.buscarVehiculo(placa).subscribe (res =>{
      this.vehiculo = res;
      
     }, error =>{
      console.log(error)
     swal ( "",error.error, " error ")
    });
  }
  }

  private salidaVehiculo(placa): void{
    this.buscarVehiculo(placa);
    this.parqueaderoService.salidaVehiculo(this.vehiculo).subscribe (res =>{
      this.parqueadero = res;
      if(this.vehiculo.tipoVehiculo = "C"){
        this.tipoVehiculo = "Carro"
      }else{
        this.tipoVehiculo = "Moto";
      }
      swal ( "Placa    " +this.vehiculo.placa , "Tipo vehiculo  " +this.tipoVehiculo +"\n" +
             "Cilindraje  " +this.vehiculo.cilindraje +"\n" +
             "Fecha ingreso  " +this.parqueadero.fehcaIngreso +"\n" + 
             "Fecha salida  " +this.parqueadero.fechaSalida +"\n" +
             "Precio  $" +this.parqueadero.precio  ) ;
             this.loadParqueadero();
    }, error =>{
            console.log(error)
      swal ( "",error.error, " error ")
    });
  }

  eliminarVehiculo(placa){
    this.salidaVehiculo(placa);
  }
}
