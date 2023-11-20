import { Component } from '@angular/core';
import { ICardUser } from '@app/shared/components/cards/card-user/icard-user-metada';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent {
  public users: ICardUser[] =[
    {
      name: 'Luis Flores',
      age: 25,
      description: 'Me gusta la musica',
      avatar: 'assets/img/altumcode-P2SkP_PXhlU-unsplash.jpg',
      work: 'Diseñador web'
    },
    {
      name: 'Hector',
      age: 30,
      description: 'Soy de pocos amigos',
      avatar: 'assets/img/altumcode-P2SkP_PXhlU-unsplash.jpg'
    },
    {
      name: 'Maria',
      age: 43,
      description: 'Disfruto el tiempo con mis hijos',
      avatar: 'assets/img/altumcode-P2SkP_PXhlU-unsplash.jpg'
    },
    {
      name: 'Juan',
      age: 18,
      description: 'Me gustaria ser ingeniero quimico',
      avatar: 'assets/img/altumcode-P2SkP_PXhlU-unsplash.jpg'
    },
    {
      name: 'Larios',
      age: 21,
      description: 'La programacion es mi pasion',
      avatar: 'assets/img/altumcode-P2SkP_PXhlU-unsplash.jpg'
    },
  ] 

}
