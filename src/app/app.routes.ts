import { Routes } from '@angular/router';
import {
  HomeComponent,
  CheckoutComponent
} from './pages'

export const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'checkout', component: CheckoutComponent}

];
