import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { CategoryProject, Project } from "src/app/models";
import { CategoryProjectService } from "src/app/services/category-project.service";
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
  cateProjects!: CategoryProject[];

  constructor(
    private projectService: ProjectService,
    private router: Router,
    private activeRouter: ActivatedRoute,
    private projectCateProject: CategoryProjectService
  ) {}

  ngOnInit(): void {
    const id = this.activeRouter.snapshot.params["id"];
    this.projectService.getProject(id).subscribe((data) => {
      this.project = data;
    });

    this.getCate();
  }

  getCate() {
    this.projectCateProject.getAll().subscribe((data) => {
      this.cateProjects = data;
    });
  }

  submitForm() {
    const id = this.activeRouter.snapshot.params["id"];
    if (id) {
      this.projectService
        .updateProject({
          ...this.project,
          categoryProjectId: +this.project.categoryProjectId,
        })
        .subscribe((data) => {
          this.router.navigateByUrl("admin/projects");
        });
    }

    this.projectService
      .createProject({
        ...this.project,
        categoryProjectId: +this.project.categoryProjectId,
      })
      .subscribe((data) => {
        this.router.navigateByUrl("admin/projects");
      });
  }
}
