import { Routes } from '@angular/router';

export const routes: Routes = [
  // whatever routes i need at the application level
  {
    path: 'demos',
    loadChildren: () =>
      import('./demos/demo.routes').then((d) => d.DEMOS_ROUTES),
  },
  {
    path: 'banking',
    loadChildren: () =>
      import('./banking/banking.routes').then((b) => b.BANKING_ROUTES),
  },
];
