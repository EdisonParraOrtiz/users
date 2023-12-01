import { Component, OnInit,EventEmitter, Output } from '@angular/core';
import { ICliente } from '../Interfaces/cliente';
import { ClientesService } from '../clientes.service';


@Component({
  selector: 'app-agregar-cliente',
  templateUrl: './agregar-cliente.component.html',
  styleUrls: ['./agregar-cliente.component.css']
})
export class AgregarClienteComponent implements OnInit {

  nuevo: ICliente = {
    nombre: '',
    credito: 5000,
  };

  @Output()
  onNuevoCliente: EventEmitter<ICliente> = new EventEmitter();

  constructor(private clientesService:ClientesService) { }

  ngOnInit(): void {
  }

  agregar() {
    if(this.nuevo.nombre.trim().length=== 0 ){
      return;

    }if(this.nuevo.credito === null){
      return;
    }

    // this.onNuevoCliente.emit(this.nuevo);
    this.clientesService.agregarCliente(this.nuevo);


    this.nuevo= {
      nombre: '',
      credito:0
    }
    
  

  }

}
