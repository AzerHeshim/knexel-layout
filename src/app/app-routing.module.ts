import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {ContactComponent} from './contact/contact.component';
import {VacanciesComponent} from './vacancies/vacancies.component';
import {VacancyComponent} from './vacancy/vacancy.component';
import {BlogsComponent} from './blogs/blogs.component';
import {BlogComponent} from './blog/blog.component';
import {ServicesComponent} from './services/services.component';
import {ServiceComponent} from './service/service.component';
import {ProjectsComponent} from './projects/projects.component';
import {ProjectComponent} from './project/project.component';
import {GalleryComponent} from './gallery/gallery.component';
import {SertificationsComponent} from './sertifications/sertifications.component';
import {CeoComponent} from './ceo/ceo.component';
import {PhylosophyComponent} from './phylosophy/phylosophy.component';
import {GoalsComponent} from './goals/goals.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'vacancies', component: VacanciesComponent },
  { path: 'vacancy', component: VacancyComponent },
  { path: 'blogs', component: BlogsComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'service', component: ServiceComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'project', component: ProjectComponent },
  { path: 'gallery', component: GalleryComponent },
  { path: 'sertifications', component: SertificationsComponent },
  { path: 'ceo', component: CeoComponent },
  { path: 'philosophy', component: PhylosophyComponent },
  { path: 'goals', component: GoalsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
