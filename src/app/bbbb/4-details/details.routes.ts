import { Routes } from '@angular/router';

export default [
  {
    path: '',
    loadComponent: () =>
      import('./details.component').then((m) => m.BbbbDetailsComponent),
    children: [
      {
        path: 'edit',
        // loadChildren: () => import('../5-edit/edit.routes'),
        loadChildren: () => import('../5-edit/edit.module').then(m => m.BbbbEditModule),
      },
    ],
  },
] as Routes;
