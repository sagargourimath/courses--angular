import { Component, OnInit } from '@angular/core';
import { User } from '../../models/User';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  users: User[];
  showExtended: boolean = false;
  loaded: boolean = false;
  enableAdd: boolean = true;

  constructor() {}

  ngOnInit(): void {
    setTimeout(() => {
      this.users = [
        {
          firstName: 'John',
          lastName: 'Doe',
          age: 30,
          address: {
            street: '50 Main St',
            city: 'Boston',
            state: 'MA',
          },
          isActive: true,
          registered: new Date('01/02/2018 08:30:00'),
        },
        {
          firstName: 'Jack',
          lastName: 'Doe',
          age: 30,
          address: {
            street: '50 Main St',
            city: 'Boston',
            state: 'MA',
          },
          isActive: true,
          registered: new Date('03/11/2018 06:30:00'),
        },
        {
          firstName: 'Jacky',
          lastName: 'Doe',
          age: 30,
          address: {
            street: '50 Main St',
            city: 'Boston',
            state: 'MA',
          },
          isActive: false,
          registered: new Date('11/02/2018 08:30:00'),
        },
      ];

      this.loaded = true;
    }, 2000);
  }

  addUser(user: User) {
    this.users.push(user);
  }
}
