import { Component, Input, Output } from '@angular/core';

@Component({
  selector: 'app-template-id-card',
  templateUrl: './template-id-card.component.html',
  styleUrls: ['./template-id-card.component.scss'],
})
export class TemplateIdCardComponent {
  @Output() data = {
    name: 'Luis Flores',
    description: '👋 Soy un joven diseñador web de 25 años, con una reciente graduación en Desarrollo Web Frontend. Mi enfoque se centra en HTML5, CSS3, JavaScript, Angular, AJAX, JSON y JQuery, y tengo una pasión especial por el diseño responsivo. Me destaco por fusionar funcionalidad y estética para crear experiencias web impactantes. Estoy emocionado por contribuir con mi entusiasmo y habilidades al mundo del diseño web. ¿Están listos para unirse a esta emocionante travesía conmigo? 🚀'

  };
}
