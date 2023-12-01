import { Component, OnInit } from '@angular/core';
import { IEmpleado } from '../interfaces/empleado';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css']
})
export class EmpleadoComponent implements OnInit {

  tituloAntiguo: string = 'Empleados Antiguos';
  tituloNuevo: string = 'Empleados Nuevo'

  empleadosAntiguos: IEmpleado[] = [
  
  { nombres:'Juan',
  apellidos:'Perez',
  direccion:'Los angles 65', 
  sueldo: 3000,
  },
  
  { nombres:'Carlos',
  apellidos:'Rojas',
  direccion:'Purto siciali', 
  sueldo: 4000,
  },
  
  { nombres:'Ramon',
  apellidos:'Valdes',
  direccion:'Purto Mexico', 
  sueldo: 5000,
  }, 
]
  
  empleadosNuevos: IEmpleado[] = [
  
  { nombres:'Sebastian',
  apellidos:'Perez',
  direccion:'Los angles 65', 
  sueldo: 3000,
  },
  
  { nombres:'Bruno',
  apellidos:'Rojas',
  direccion:'Purto siciali', 
  sueldo: 4000,
  },
  
  { nombres:'Ron',
  apellidos:'Valdes',
  direccion:'Purto Mexico', 
  sueldo: 5000,
  }, 

]

  constructor() { }

  ngOnInit(): void {
  }

}
