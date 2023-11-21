import { Component, Input } from '@angular/core';
import { IBandaBio } from './ibanda-bio-metadata';

@Component({
  selector: 'app-banda-principal',
  templateUrl: './banda-principal.component.html',
  styleUrls: ['./banda-principal.component.scss']
})
export class BandaPrincipalComponent {

@Input() data! : IBandaBio;
  
}
