import { Routes } from '@angular/router';
import { EditComponent } from './components/edit/edit.component';
import { AppComponent } from './app.component';
import { DetailComponent } from './components/detail/detail.component';

export const routes: Routes = [
  { path: 'detail/:id', component: DetailComponent },
  { path: 'edit', component: EditComponent },
];
