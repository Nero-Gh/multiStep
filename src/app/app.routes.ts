import { Routes } from '@angular/router';
import { HomeComponent } from './pages/component/home/home.component';
import { SelectPlanComponent } from './pages/component/select-plan/select-plan.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'select-plan',
    component: SelectPlanComponent,
  },
];
