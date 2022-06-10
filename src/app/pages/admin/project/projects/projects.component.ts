import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/models';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent implements OnInit {
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

  onRemove(id: number | string) {
    if (window.confirm('Are you sure delete project??')) {
      this.projectService.removeProject(id).subscribe(() => {
        this.onGetList();
      });
    }
  }
}
