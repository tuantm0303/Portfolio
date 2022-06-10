import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './pages/admin/admin/admin.component';
import { PostsFormComponent } from './pages/admin/post/posts-form/posts-form.component';
import { PostsComponent } from './pages/admin/post/posts/posts.component';
import { ProjectsComponent } from './pages/admin/projects/projects.component';
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
  {
    path: 'admin',
    component: AdminComponent,
    children: [
      { path: '', component: ProjectsComponent },
      {
        path: 'posts',
        children: [
          { path: '', component: PostsComponent },
          { path: 'add', component: PostsFormComponent },
          { path: 'edit/:id', component: PostsFormComponent },
        ],
      },
    ],
  },
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
