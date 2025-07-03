import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './user-form.component.html',
})
export class UserFormComponent {
  name = '';
  email = '';

  onSubmit() {
    console.log('Submitted:', { name: this.name, email: this.email });
  }
}
