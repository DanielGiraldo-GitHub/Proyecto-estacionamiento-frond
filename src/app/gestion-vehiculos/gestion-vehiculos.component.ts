import { Component, OnInit } from '@angular/core';
import { VehiculoModel } from '../model/vehiculo.model';
import { ParqueaderoService } from './../parqueadero/parqueadero.service';
import swal from 'sweetalert'
import { ParqueaderoModule } from './../model/parqueadero.model';
import { DisponibilidadModel } from './../model/disponibilidad.model';

@Component({
  selector: 'app-gestion-vehiculos',
  templateUrl: './gestion-vehiculos.component.html',
  styleUrls: ['./gestion-vehiculos.component.css']
})
export class GestionVehiculosComponent implements OnInit {

  private vehiculo: VehiculoModel;
  private respuesta: string;
  private parqueadero: ParqueaderoModule;
  public disponibilidad: DisponibilidadModel;

  constructor(private parqueaderoService : ParqueaderoService) { 
  this.vehiculo = new VehiculoModel;
  }

  private ingresarVehiculo(): void{
    this.parqueaderoService.ingresarVehiculo(this.vehiculo).subscribe (res => {
      this.getDisponibilidad();
      swal ( "", "El vehiculo se ingreso correctamente \n       al parqueadero " , " éxito ");
    }, error =>{
      console.log(error)
      swal ( "",error.error, " error ")
    });    
};


ngOnInit() {
  this.getDisponibilidad();
}

  private salidaVehiculo(): void{
    this.parqueaderoService.salidaVehiculo(this.vehiculo).subscribe (res =>{
      this.parqueadero = res;
      swal ( "Placa " +this.vehiculo.placa , "Tipo vehiculo " +this.vehiculo.tipoVehiculo +"\n" +
             "Cilindraje " +this.vehiculo.cilindraje +"\n" +
             "Hora ingreso " +this.parqueadero.fehcaIngreso +"\n" + 
             "Hora salida " +this.parqueadero.fechaSalida+"\n" +
             "Precio $" +this.parqueadero.precio  )  ;
    }, error =>{
      console.log(error)
      swal ( "",error.error, " error ")
    });
    
    this.vehiculo.placa = "";
    this.vehiculo.tipoVehiculo = "";
    this.vehiculo.cilindraje = null;
    this.getDisponibilidad();
  }

  private buscarVehiculo(): void{
    this.parqueaderoService.buscarVehiculo(this.vehiculo.placa).subscribe (res =>{
      this.vehiculo = res;
    }, error =>{
      console.log(error)
      swal ( "",error.error, " error ")
    });
  }

  private getDisponibilidad(): void{
    this.parqueaderoService.getDisponibilidad().subscribe (res => {
      this.disponibilidad = res;
    }, error =>{
      console.log(error)
      swal ( "",error.error, " error ")
    });
  }

}
