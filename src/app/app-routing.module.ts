import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './pages/admin/admin/admin.component';
import { BlogPageComponent } from './pages/outside/blog-page/blog-page.component';
import { HomepageComponent } from './pages/outside/homepage/homepage.component';
import { OutsideComponent } from './pages/outside/outside/outside.component';
import { WorksPageComponent } from './pages/outside/works-page/works-page.component';

const routes: Routes = [
  {
    path: '',
    component: OutsideComponent,
    children: [
      {
        path: '',
        component: HomepageComponent,
      },
      {
        path: 'works',
        component: WorksPageComponent,
      },
      {
        path: 'blog',
        component: BlogPageComponent,
      },
    ],
  },
  { path: 'admin', component: AdminComponent },
  {
    path: 'welcome',
    loadChildren: () =>
      import('./pages/welcome/welcome.module').then((m) => m.WelcomeModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
