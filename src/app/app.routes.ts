import {Routes} from '@angular/router';
import {DefaultLayoutComponent} from './layouts/default-layout/default-layout.component';
import {HomeComponent, ProjectComponent, WorkComponent} from './components';
import {NotFoundComponent} from './pages/not-found/not-found.component';
import {APP_ROUTE_PATHS} from './app-route-paths';

const layoutChildren: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: APP_ROUTE_PATHS.home,
  },
  {
    path: APP_ROUTE_PATHS.home,
    title: 'Home',
    component: HomeComponent,
  },
  {
    path: APP_ROUTE_PATHS.work,
    title: 'Work',
    component: WorkComponent,
  },
  {
    path: APP_ROUTE_PATHS.projects,
    title: 'Projects',
    component: ProjectComponent,
  },
  {
    path: '**',
    title: 'Not Found',
    component: NotFoundComponent,
  },
];

export const routes: Routes = [
  {
    path: '',
    component: DefaultLayoutComponent,
    children: layoutChildren,
  },
];
