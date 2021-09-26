import { Component } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent {
  // Properties
  firstName = 'John';
  lastName = 'Doe';
  age = 30;

  // Methods
  constructor() {}
}
