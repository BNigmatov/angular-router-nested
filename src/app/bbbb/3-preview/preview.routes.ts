import { Routes } from '@angular/router';

export default [
  {
    path: '',
    loadComponent: () =>
      import('./preview.component').then((m) => m.BbbbPreviewComponent),
      children: [
        {
          path: 'details',
          loadChildren: () => import('../4-details/details.routes'),
        },
      ],
  },
] as Routes;
