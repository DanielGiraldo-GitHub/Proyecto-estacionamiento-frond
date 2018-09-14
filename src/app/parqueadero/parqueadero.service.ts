import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { VehiculoModel } from '../model/vehiculo.model';



@Injectable({
  providedIn: 'root'
})
export class ParqueaderoService {

  constructor(private http: HttpClient) { }

  private carrosParqueados: Array<VehiculoModel>;
  private motosParqueadas:  Array<VehiculoModel>;

  public getCarrosParquedos():Array<VehiculoModel>{
    this.http.get("http://localhost:8080/listarCarrosParqueados").subscribe(res => {
     this.carrosParqueados = res as VehiculoModel[];
     console.log(this.carrosParqueados);
     
    });
    return this.carrosParqueados;
  }

  public getMotosParquedas():Array<VehiculoModel>{
    this.http.get("http://localhost:8080/listarMotosParqueadas").subscribe(res => {
     this.motosParqueadas = res as VehiculoModel[];
     console.log(this.motosParqueadas);
  });
return this.motosParqueadas;
  }
}