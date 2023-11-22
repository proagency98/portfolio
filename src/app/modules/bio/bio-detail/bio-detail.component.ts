import { Component } from '@angular/core';
import { IBandaBio } from '@app/shared/components/banda-principal/ibanda-bio-metadata';

@Component({
  selector: 'app-bio-detail',
  templateUrl: './bio-detail.component.html',
  styleUrls: ['./bio-detail.component.scss']
})
export class BioDetailComponent {

public user: IBandaBio = {
  name: 'Luis Flores',
  profesion: 'Diseñador Digital',
  subtittle: 'Futuro Diseñador de Productos Graficos'
}



}
