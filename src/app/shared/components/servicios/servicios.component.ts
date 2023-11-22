import { Component, Output } from '@angular/core';
import { IServicios } from '@app/interfaces/servicios/iservicios';

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.scss']
})
export class ServiciosComponent {

@Output() data : IServicios = {
  title: 'Servicios'
}

}
