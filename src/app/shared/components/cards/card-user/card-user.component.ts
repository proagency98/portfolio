import { Component, Input } from '@angular/core';
import { ICardUser } from './icard-user-metada';


@Component({
  selector: 'app-card-user',
  templateUrl: './card-user.component.html',
  styleUrls: ['./card-user.component.scss']
})
export class CardUserComponent{
@Input() data: ICardUser = {
  avatar: '',
  name: '',
  age: 0,
  description: '',
  work: ''
}
}
