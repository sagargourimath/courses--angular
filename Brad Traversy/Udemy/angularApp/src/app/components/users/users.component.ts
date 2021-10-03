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
    age: undefined,
    address: {
      street: '',
      city: '',
      state: '',
    },
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
          age: 30,
          address: {
            street: '50 Main St',
            city: 'Boston',
            state: 'MA',
          },
          isActive: true,
          registered: new Date('01/02/2018 08:30:00'),
          hide: true,
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
          hide: true,
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
          hide: true,
        },
      ];

      this.loaded = true;
    }, 2000);
  }

  addUser() {
    this.user.isActive = true;
    this.user.registered = new Date();
    this.users.unshift(this.user);

    this.user = {
      firstName: '',
      lastName: '',
      age: undefined,
      address: {
        street: '',
        city: '',
        state: '',
      },
    };
  }

  toggleHide(user: User) {
    user.hide = !user.hide;
  }

  onSubmit(e: any) {
    console.log(123);
    e.preventDefault();
  }
}
