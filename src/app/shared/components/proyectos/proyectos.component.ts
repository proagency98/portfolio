import { Component, Output } from '@angular/core';
import { IHabilidades } from '@app/interfaces/habilidades/ihabilidades';
import { IProyectos } from '@app/interfaces/proyectos/iproyectos';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.scss']
})
export class ProyectosComponent {

@Output() data: IProyectos = {
  title: 'Proyectos'
}
}
