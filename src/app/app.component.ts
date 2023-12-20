import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule, Routes } from '@angular/router';
import { EditComponent } from './components/edit/edit.component';

const router: Routes = [{ path: 'edit', component: EditComponent }];

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'wayne-assignment';
  constructor(private router: Router) {}

  goToEdit() {
    {
      window.location.href = '/edit';
    }
  }
}
