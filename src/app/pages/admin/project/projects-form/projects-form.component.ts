import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Project } from "src/app/models";
import { ProjectService } from "src/app/services/project.service";

@Component({
  selector: "app-projects-form",
  templateUrl: "./projects-form.component.html",
  styleUrls: ["./projects-form.component.css"],
})
export class ProjectsFormComponent implements OnInit {
  project: Project = {
    id: 0,
    name: "",
    img: "",
    createdAt: new Date(),
    updatedAt: new Date(),
    categoryProjectId: 0,
    short_desc: "",
    desc: "",
  };

  constructor(
    private projectService: ProjectService,
    private router: Router,
    private activeRouter: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = this.activeRouter.snapshot.params["id"];
    this.projectService.getProject(id).subscribe((data) => {
      this.project = data;
    });
  }

  submitForm() {
    const id = this.activeRouter.snapshot.params["id"];
    if (id) {
      this.projectService.updateProject(this.project).subscribe((data) => {
        this.router.navigateByUrl("admin/projects");
      });
    }

    this.projectService.createProject(this.project).subscribe((data) => {
      this.router.navigateByUrl("admin/projects");
    });
  }
}
