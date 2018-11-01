import { Component,OnInit } from '@angular/core';
import { ParqueaderoService } from './../parqueadero/parqueadero.service';
import { DisponibilidadModel } from './../model/disponibilidad.model';

@Component({
  selector: 'app-grafica',
  templateUrl: './grafica.component.html',
  styleUrls: ['./grafica.component.css']
})
export class GraficaComponent implements OnInit  {

  constructor( private parqueaderoService: ParqueaderoService) { }

  public pieChartLabels:string[] = ['Motos parqueadas', 'Cupos disponibles carros','Carros parqueados',"Cupos disponebles moto"];
  public pieChartData:number[] = [1,5,6,7];
  public pieChartType:string = 'pie';
  public disponibilidad: DisponibilidadModel;
  // events
  public chartClicked(e:any):void {
    console.log(e);
  }

    ngOnInit(){
      this.getDisponibilidad();
    }

  public chartHovered(e:any):void {
    console.log(e);
  }

  public getDisponibilidad(): void{
    this.parqueaderoService.getDisponibilidad().subscribe (res => {
      this.disponibilidad = res;
      this.pieChartData = [(10-(this.disponibilidad.motos)),
        this.disponibilidad.carros,
        (20-(this.disponibilidad.carros)),
        this.disponibilidad.motos];
        
    }, error =>{
      console.log(error)
      swal ( "",error.error, " error ")
    });
  }

}
