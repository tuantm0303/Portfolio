import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './pages/admin/admin/admin.component';
import { CategoryPostsFormComponent } from './pages/admin/category-post/category-posts-form/category-posts-form.component';
import { CategoryPostsComponent } from './pages/admin/category-post/category-posts/category-posts.component';
import { CategoryProjectsFormComponent } from './pages/admin/category-project/category-projects-form/category-projects-form.component';
import { CategoryProjectsComponent } from './pages/admin/category-project/category-projects/category-projects.component';
import { PostsFormComponent } from './pages/admin/post/posts-form/posts-form.component';
import { PostsComponent } from './pages/admin/post/posts/posts.component';
import { ProfileFormComponent } from './pages/admin/profile/profile-form/profile-form.component';
import { ProfileComponent } from './pages/admin/profile/profile/profile.component';
import { ProjectsFormComponent } from './pages/admin/project/projects-form/projects-form.component';
import { ProjectsComponent } from './pages/admin/project/projects/projects.component';
import { BlogPageComponent } from './pages/outside/blog-page/blog-page.component';
import { DetailWorkPageComponent } from './pages/outside/detail-work-page/detail-work-page.component';
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
      {
        path: 'works/detail/:id',
        component: DetailWorkPageComponent,
      },
    ],
  },
  {
    path: 'admin',
    component: AdminComponent,
    children: [
      {
        path: 'profile',
        children: [
          { path: '', component: ProfileComponent },
          { path: 'edit', component: ProfileFormComponent },
        ],
      },
      {
        path: 'projects',
        children: [
          { path: '', component: ProjectsComponent },
          { path: 'add', component: ProjectsFormComponent },
          { path: 'edit/:id', component: ProjectsFormComponent },
        ],
      },
      {
        path: 'posts',
        children: [
          { path: '', component: PostsComponent },
          { path: 'add', component: PostsFormComponent },
          { path: 'edit/:id', component: PostsFormComponent },
        ],
      },
      {
        path: 'categoryprojects',
        children: [
          { path: '', component: CategoryProjectsComponent },
          { path: 'add', component: CategoryProjectsFormComponent },
          { path: 'edit/:id', component: CategoryProjectsFormComponent },
        ],
      },
      {
        path: 'categoryposts',
        children: [
          { path: '', component: CategoryPostsComponent },
          { path: 'add', component: CategoryPostsFormComponent },
          { path: 'edit/:id', component: CategoryPostsFormComponent },
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
