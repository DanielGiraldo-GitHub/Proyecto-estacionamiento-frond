import { Component,Input } from '@angular/core';
import { ParqueaderoService } from './parqueadero/parqueadero.service';
import { DisponibilidadModel } from './model/disponibilidad.model';
import { GestionVehiculosComponent } from './gestion-vehiculos/gestion-vehiculos.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  constructor( private parqueaderoService: ParqueaderoService) { }
  
  gestionVehiculosComponent : GestionVehiculosComponent;
  @Input() disponibilidad: DisponibilidadModel;

  ngOnInit() {
    this.getDisponibilidad();
  }

  ngOnChanges() {
    this.getDisponibilidad();
  }
  

  title = 'Ceiba-Estacionamiento';

  private getDisponibilidad(): void{
    this.parqueaderoService.getDisponibilidad().subscribe (res => {
      this.disponibilidad = res;
    }, error =>{
      console.log(error)
      swal ( "",error.error, " error ")
    });
  }

}
