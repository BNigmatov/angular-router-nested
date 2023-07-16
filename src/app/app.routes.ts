import { Route } from '@angular/router';
import { BbbbComponent } from './bbbb/bbbb.component';

export const appRoutes: Route[] = [
  // Redirect empty path to '/example'
  { path: '', pathMatch: 'full', redirectTo: 'bbbb' },

  {
    path: 'bbbb',
    loadChildren: () => import('./bbbb/bbbb.routes'),
  },
];
