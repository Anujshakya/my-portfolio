import {Routes} from '@angular/router';
import {DefaultLayoutComponent} from './layouts/default-layout/default-layout.component';
import {BlogComponent, HomeComponent, ProjectComponent, WorkComponent} from './components';

export const routes: Routes = [
  {
    path: '',
    component: DefaultLayoutComponent,
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
      },
      {
        path: 'home',
        title: 'Home',
        component: HomeComponent,
      },
      {
        path: 'work',
        title: 'Work',
        component: WorkComponent,
      },
      {
        path: 'blogs',
        title: 'Blogs',
        component: BlogComponent,
      },
      {
        path: 'projects',
        title: 'Projects',
        component: ProjectComponent,
      }
    ]
  }
];
