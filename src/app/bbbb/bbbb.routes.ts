import { Routes } from '@angular/router';
import { BbbbComponent } from './bbbb.component';

export default [
  {
    path: '',
    // component: BbbbComponent,
    loadComponent: () =>
      import('./bbbb.component').then((m) => m.BbbbComponent),
    children: [
      {
        path: '',
        pathMatch: 'full',
        loadComponent: () =>
          import('./2-preview-empty/preview-empty.component').then(
            (m) => m.BbbbPreviewEmptyComponent
          ),
      },
      {
        path: ':id',
        // pathMatch: 'full',
        loadChildren: () => import('./3-preview/preview.routes'),
      },
    ],
  },
] as Routes;
