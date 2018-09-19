import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { VehiculoModel } from '../model/vehiculo.model';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';
import { DisponibilidadModel } from './../model/disponibilidad.model';
import { ParqueaderoModule } from './../model/parqueadero.model';


@Injectable({
  providedIn: 'root'
})
export class ParqueaderoService {

 constructor(private http: HttpClient) { }

 private httpHeaders = new  HttpHeaders({'Content-Type':'application/json'});

  public getCarrosParquedos():Observable<VehiculoModel[]>{
    return this.http.get<VehiculoModel[]>("http://localhost:8080/listarCarrosParqueados");
  }

  
  public getMotosParquedas():Observable<VehiculoModel[]>{
    return this.http.get<VehiculoModel[]>("http://localhost:8080/listarMotosParqueadas");
  }

  public getDisponibilidad():Observable<DisponibilidadModel>{
    return this.http.get<DisponibilidadModel>("http://localhost:8080/consultarDisponibilidad");
  }

  public ingresarVehiculo(vehiculo:VehiculoModel):Observable<string>{
     return this.http.post<string>("http://localhost:8080/ingresarVehiculo",vehiculo,{headers:this.httpHeaders});
  }

  public salidaVehiculo(vehiculo:VehiculoModel):Observable<ParqueaderoModule>{
    return this.http.post<ParqueaderoModule>("http://localhost:8080/salidaVehiculo",vehiculo,{headers:this.httpHeaders});
 }

 public buscarVehiculo(placa:string):Observable<VehiculoModel>{
  return this.http.get<VehiculoModel>(`http://localhost:8080/buscarVehiculo/${placa}`);
}
}