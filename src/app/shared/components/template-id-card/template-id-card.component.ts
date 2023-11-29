import { Component, Input, Output } from '@angular/core';

@Component({
  selector: 'app-template-id-card',
  templateUrl: './template-id-card.component.html',
  styleUrls: ['./template-id-card.component.scss'],
})
export class TemplateIdCardComponent {
  @Output() data = {
    name: 'Diseño web',
  };
}
