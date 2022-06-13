import { Component, OnInit } from "@angular/core";
import { ProjectService } from "src/app/services/project.service";

@Component({
  selector: "app-works-page",
  templateUrl: "./works-page.component.html",
  styleUrls: ["./works-page.component.css"],
})
export class WorksPageComponent implements OnInit {
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
}
