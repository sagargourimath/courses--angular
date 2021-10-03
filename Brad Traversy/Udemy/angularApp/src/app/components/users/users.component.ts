import { Component, OnInit } from '@angular/core';
import { User } from '../../models/User';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  user: User = {
    firstName: '',
    lastName: '',
    email: '',
  };
  users: User[];
  showExtended: boolean = true;
  loaded: boolean = false;
  enableAdd: boolean = false;
  showUserForm: boolean = false;

  constructor() {}

  ngOnInit(): void {
    setTimeout(() => {
      this.users = [
        {
          firstName: 'John',
          lastName: 'Doe',
          email: 'john@gmail.com',
          isActive: true,
          registered: new Date('01/02/2018 08:30:00'),
          hide: true,
        },
        {
          firstName: 'Jack',
          lastName: 'Doe',
          email: 'john@gmail.com',
          isActive: true,
          registered: new Date('03/11/2018 06:30:00'),
          hide: true,
        },
        {
          firstName: 'Jacky',
          lastName: 'Doe',
          email: 'john@gmail.com',
          isActive: false,
          registered: new Date('11/02/2018 08:30:00'),
          hide: true,
        },
      ];

      this.loaded = true;
    }, 2000);
  }

  onSubmit(e: any) {
    console.log(123);
    e.preventDefault();
  }
}
