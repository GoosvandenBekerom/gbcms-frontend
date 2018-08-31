import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './components/login/login.component';

const routes: Routes = [
  // { path: '', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },

  // If nothing matches, redirect home
  { path: '**', redirectTo: '' }
];

export const Routing = RouterModule.forRoot(routes);
