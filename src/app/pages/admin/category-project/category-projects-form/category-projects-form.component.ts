import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryProject } from 'src/app/models';
import { CategoryProjectService } from 'src/app/services/category-project.service';

@Component({
  selector: 'app-category-projects-form',
  templateUrl: './category-projects-form.component.html',
  styleUrls: ['./category-projects-form.component.css'],
})
export class CategoryProjectsFormComponent implements OnInit {
  cateProject: CategoryProject = {
    id: 0,
    name: '',
  };
  constructor(
    private categoryProjectService: CategoryProjectService,
    private router: Router,
    private activeRouter: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = this.activeRouter.snapshot.params['id'];
    this.categoryProjectService.getOne(id).subscribe((data) => {
      this.cateProject = data;
      console.log(this.cateProject);
    });
  }

  submitForm() {
    const id = this.activeRouter.snapshot.params['id'];
    if (id) {
      this.categoryProjectService.update(this.cateProject).subscribe((data) => {
        this.router.navigateByUrl('admin/categoryprojects');
      });
    }

    this.categoryProjectService.create(this.cateProject).subscribe((data) => {
      this.router.navigateByUrl('admin/categoryprojects');
    });
  }
}
