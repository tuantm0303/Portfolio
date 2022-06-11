import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryPost } from 'src/app/models';
import { CategoryPostService } from 'src/app/services/category-post.service';

@Component({
  selector: 'app-category-posts-form',
  templateUrl: './category-posts-form.component.html',
  styleUrls: ['./category-posts-form.component.css'],
})
export class CategoryPostsFormComponent implements OnInit {
  catePost: CategoryPost = {
    id: 0,
    name: '',
  };
  constructor(
    private categoryPostService: CategoryPostService,
    private router: Router,
    private activeRouter: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = this.activeRouter.snapshot.params['id'];
    console.log(id);
    this.categoryPostService.getOne(id).subscribe((data) => {
      this.catePost = data;
    });
  }

  submitForm() {
    const id = this.activeRouter.snapshot.params['id'];
    if (id) {
      this.categoryPostService.update(this.catePost).subscribe((data) => {
        this.router.navigateByUrl('admin/categoryposts');
      });
    }

    this.categoryPostService.create(this.catePost).subscribe((data) => {
      this.router.navigateByUrl('admin/categoryposts');
    });
  }
}
