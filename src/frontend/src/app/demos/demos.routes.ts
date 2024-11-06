import { Routes } from '@angular/router';
import { DemosComponent } from './demos.component';
import { ChangeDetectionComponent } from './components/change-detection.component';

export const DEMOS_ROUTES: Routes = [
  {
    path: '',
    component: DemosComponent,
    children: [
      {
        path: 'change-detection',
        component: ChangeDetectionComponent,
      },
    ],
  },
];
