import { Component, OnInit } from "@angular/core";
import { CategoryProject, Project } from "src/app/models";
import { ProjectService } from "src/app/services/project.service";

@Component({
  selector: "app-projects",
  templateUrl: "./projects.component.html",
  styleUrls: ["./projects.component.css"],
})
export class ProjectsComponent implements OnInit {
  projects!: any;

  constructor(private projectService: ProjectService) {}

  ngOnInit(): void {
    this.onGetList();
  }

  onGetList() {
    this.projectService.getCateofProject().subscribe((data) => {
      this.projects = data;
    });
  }

  onRemove(id: number | string) {
    if (window.confirm("Are you sure delete project??")) {
      this.projectService.removeProject(id).subscribe(() => {
        this.onGetList();
      });
    }
  }
}
