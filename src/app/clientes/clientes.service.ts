import { Injectable } from '@angular/core';
import { ICliente } from './Interfaces/cliente';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  private  _clientes: ICliente[] = [
   
  ];

  get clientes(): ICliente[]{
    return this._clientes
  }

  agregarCliente(cliente: ICliente){
    this.clientes.push(cliente);
    localStorage.setItem('clientes',JSON.stringify (this._clientes));
  }

  constructor() {
    console.log("Servicio habilitado")
    this._clientes= JSON.parse(localStorage.getItem('clientes')!) || []  ;
   }
}


// {
//   nombre: 'Pedro',
//   credito: 5000,
// },
// {
//   nombre: 'Carmen',
//   credito: 450,
// },
// {
//   nombre: 'Lucas',
//   credito: 790,
// },