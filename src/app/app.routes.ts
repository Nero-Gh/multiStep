import { Routes } from '@angular/router';
import { HomeComponent } from './pages/component/home/home.component';
import { SelectPlanComponent } from './pages/component/select-plan/select-plan.component';
import { AddOnsComponent } from './pages/component/add-ons/add-ons.component';
import { SummeryComponent } from './pages/component/summery/summery.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'select-plan',
    component: SelectPlanComponent,
  },
  {
    path: 'add-ons',
    component: AddOnsComponent,
  },
  {
    path: 'summery',
    component: SummeryComponent,
  },
];
