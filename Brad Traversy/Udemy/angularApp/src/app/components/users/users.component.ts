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
  enableAdd: boolean = true;
  currentClasses: {};

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
          image: 'http://lorempixel.com/600/600/people/3',
          isActive: true,
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
          image: 'http://lorempixel.com/600/600/people/2',
          isActive: true,
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
          image: 'http://lorempixel.com/600/600/people/1',
          isActive: false,
        },
      ];

      this.loaded = true;
      this.setCurrentClasses();
    }, 2000);
  }

  addUser(user: User) {
    this.users.push(user);
  }

  setCurrentClasses() {
    this.currentClasses = {
      'btn-success': this.enableAdd,
      'big-text': this.showExtended,
    };
  }
}
