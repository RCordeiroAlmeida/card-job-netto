import { Routes } from '@angular/router';

import { Cartao } from './pages/cartao/cartao';

export const routes: Routes = [
  {
    path: '',
    component: Cartao,
    pathMatch: 'full',
  },


  {
    path: '**',
    redirectTo: '',
  },
];
