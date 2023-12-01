import { Component } from '@angular/core';
import { IEmpleado } from './empleados/interfaces/empleado';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  etiquetaBorrado: string = '';
  
  
  empleados: IEmpleado [] = [];

  ngOnInit() {
    // Aquí puedes realizar lógica de inicialización al inicializar el componente
    console.log('El componente ListadoComponent se ha inicializado.');
  }

  borrar(){
    // console.log('el boton funciona correctamente')
   const emp = this.empleados.shift();
    if (emp !== undefined){
      this.etiquetaBorrado = emp?.nombres + ''+ emp?.apellidos;
    }else{
      this.etiquetaBorrado = ''
    }
  }
}
