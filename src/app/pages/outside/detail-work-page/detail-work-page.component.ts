import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Project } from 'src/app/models';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-detail-work-page',
  templateUrl: './detail-work-page.component.html',
  styleUrls: ['./detail-work-page.component.css'],
})
export class DetailWorkPageComponent implements OnInit {
  project: Project = {
    id: 0,
    name: '',
    img: '',
    createdAt: new Date(),
    updatedAt: new Date(),
    categoryProjectId: '',
    short_desc: '',
    desc: '',
  };

  constructor(
    private projectService: ProjectService,
    private activeRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = this.activeRoute.snapshot.params['id'];
    if (id) {
      this.projectService.getProject(id).subscribe((data) => {
        this.project = data;
      });
    }
  }
}
