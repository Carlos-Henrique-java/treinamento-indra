import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { ICliente } from '../interfaces/cliente1';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {
  api = environment.api;
  endpoint = 'clientes';
  constructor(private http: HttpClient) { }

  ListarTodosClientes(){
    return this.http.get<ICliente[]>(`${this.api}/${this.endpoint}/`);
  }
}