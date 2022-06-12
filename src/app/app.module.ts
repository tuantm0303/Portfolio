import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NZ_I18N } from "ng-zorro-antd/i18n";
import { en_US } from "ng-zorro-antd/i18n";
import { registerLocaleData } from "@angular/common";
import en from "@angular/common/locales/en";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { IconsProviderModule } from "./icons-provider.module";
import { NzLayoutModule } from "ng-zorro-antd/layout";
import { NzMenuModule } from "ng-zorro-antd/menu";
import { NzTableModule } from "ng-zorro-antd/table";
import { NzButtonModule } from "ng-zorro-antd/button";
import { NzFormModule } from "ng-zorro-antd/form";
import { NzAlertModule } from "ng-zorro-antd/alert";
import { NzSelectModule } from "ng-zorro-antd/select";

import { HeaderComponent } from "./components/header/header.component";
import { FooterComponent } from "./components/footer/footer.component";
import { AdminComponent } from "./pages/admin/admin/admin.component";
import { HomepageComponent } from "./pages/outside/homepage/homepage.component";
import { OutsideComponent } from "./pages/outside/outside/outside.component";
import { BlogPageComponent } from "./pages/outside/blog-page/blog-page.component";
import { WorksPageComponent } from "./pages/outside/works-page/works-page.component";
import { ProjectsComponent } from "./pages/admin/project/projects/projects.component";
import { PostsComponent } from "./pages/admin/post/posts/posts.component";
import { PostsFormComponent } from "./pages/admin/post/posts-form/posts-form.component";
import { ProjectsFormComponent } from "./pages/admin/project/projects-form/projects-form.component";
import { ProfileComponent } from "./pages/admin/profile/profile/profile.component";
import { ProfileFormComponent } from "./pages/admin/profile/profile-form/profile-form.component";
import { CategoryProjectsComponent } from "./pages/admin/category-project/category-projects/category-projects.component";
import { CategoryProjectsFormComponent } from "./pages/admin/category-project/category-projects-form/category-projects-form.component";
import { CategoryPostsComponent } from "./pages/admin/category-post/category-posts/category-posts.component";
import { CategoryPostsFormComponent } from "./pages/admin/category-post/category-posts-form/category-posts-form.component";
import { DetailWorkPageComponent } from "./pages/outside/detail-work-page/detail-work-page.component";

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomepageComponent,
    AdminComponent,
    OutsideComponent,
    BlogPageComponent,
    WorksPageComponent,
    ProfileComponent,
    ProfileFormComponent,
    ProjectsComponent,
    ProjectsFormComponent,
    PostsComponent,
    PostsFormComponent,
    CategoryProjectsComponent,
    CategoryProjectsFormComponent,
    CategoryPostsComponent,
    CategoryPostsFormComponent,
    DetailWorkPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    IconsProviderModule,
    NzLayoutModule,
    NzMenuModule,
    NzTableModule,
    NzButtonModule,
    NzFormModule,
    NzAlertModule,
    NzSelectModule,
    ReactiveFormsModule,
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent],
})
export class AppModule {}
