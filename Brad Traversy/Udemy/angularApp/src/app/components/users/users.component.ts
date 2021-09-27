import { Component, OnInit } from '@angular/core';
import { User } from '../../models/User';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  users: User[];
  showExtended: boolean = true;
  loaded: boolean = false;

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
        },
      ];

      this.addUser({
        firstName: 'David',
        lastName: 'Letterman',
        age: 30,
        address: {
          street: '50 Main St',
          city: 'Boston',
          state: 'MA',
        },
      });

      this.loaded = true;
    }, 2000);

    this.showExtended = false;
  }

  addUser(user: User) {
    this.users.push(user);
  }
}
