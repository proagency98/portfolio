import { Component, Output } from '@angular/core';
import { IHabilidades } from '@app/interfaces/habilidades/ihabilidades';

@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.component.html',
  styleUrls: ['./habilidades.component.scss']
})
export class HabilidadesComponent {

@Output() data: IHabilidades = {
  title: 'Habilidades'
}



}
