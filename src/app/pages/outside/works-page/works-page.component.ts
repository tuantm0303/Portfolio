import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/models';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-works-page',
  templateUrl: './works-page.component.html',
  styleUrls: ['./works-page.component.css'],
})
export class WorksPageComponent implements OnInit {
  projects!: Project[];

  constructor(private projectService: ProjectService) {}

  ngOnInit(): void {
    this.onGetList();
  }

  onGetList() {
    this.projectService.getProjects().subscribe((data) => {
      this.projects = data;
    });
  }
}
