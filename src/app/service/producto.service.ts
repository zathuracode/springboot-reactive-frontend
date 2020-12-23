import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Producto } from '../domain/producto';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  public api:string=`${environment.apiUrl}productos`;

  constructor(public httpCliente:HttpClient) { }

  public findAll():Observable<Producto[]>{
    console.log(this.api);
    return this.httpCliente.get<Producto[]>(this.api);
  }

}
