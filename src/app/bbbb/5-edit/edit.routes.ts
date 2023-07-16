import { Routes } from '@angular/router';
import { BbbbEditComponent } from './edit.component';

export default [
  {
    path: '',
    component: BbbbEditComponent,
    // loadComponent: () => import('./edit.component').then((m) => m.BbbbEditComponent),
  },
] as Routes;
