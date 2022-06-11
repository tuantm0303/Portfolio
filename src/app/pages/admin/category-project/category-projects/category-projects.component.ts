import { Component, OnInit } from '@angular/core';
import { CategoryProject } from 'src/app/models';
import { CategoryProjectService } from 'src/app/services/category-project.service';

@Component({
  selector: 'app-category-projects',
  templateUrl: './category-projects.component.html',
  styleUrls: ['./category-projects.component.css'],
})
export class CategoryProjectsComponent implements OnInit {
  cateProjects!: CategoryProject[];

  constructor(private categoryProjectService: CategoryProjectService) {}

  ngOnInit(): void {
    this.onGetList();
  }

  onGetList() {
    this.categoryProjectService.getAll().subscribe((data) => {
      this.cateProjects = data;
    });
  }

  onRemove(id: number | string) {
    if (window.confirm('Are you sure delete category??')) {
      this.categoryProjectService.remove(id).subscribe((data) => {
        this.onGetList();
      });
    }
  }
}
