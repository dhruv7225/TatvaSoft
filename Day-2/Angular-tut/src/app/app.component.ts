import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './app.component.html',
})
export class AppComponent {
  name = '';
  email = '';
  age: number | null = null;
  gender = '';
  submitted = false;

  onSubmit() {
    this.submitted = true;
  }

  resetForm(form: any) {
    form.reset();
    this.submitted = false;
  }
}
