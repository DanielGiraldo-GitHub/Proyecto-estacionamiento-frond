import { Component } from '@angular/core';
import { ParqueaderoService } from './parqueadero/parqueadero.service';
import { DisponibilidadModel } from './model/disponibilidad.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  constructor( private parqueaderoService: ParqueaderoService) { }

  public disponibilidad: DisponibilidadModel;

  ngOnInit() {
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
