import { Component, OnInit } from '@angular/core';
import { CategoryPost } from 'src/app/models';
import { CategoryPostService } from 'src/app/services/category-post.service';

@Component({
  selector: 'app-category-posts',
  templateUrl: './category-posts.component.html',
  styleUrls: ['./category-posts.component.css'],
})
export class CategoryPostsComponent implements OnInit {
  catePots!: CategoryPost[];

  constructor(private categoryPostService: CategoryPostService) {}

  ngOnInit(): void {
    this.onGetList();
  }

  onGetList() {
    this.categoryPostService.getAll().subscribe((data) => {
      this.catePots = data;
    });
  }

  onRemove(id: number | string) {
    if (window.confirm('Are you sure delete category??')) {
      this.categoryPostService.remove(id).subscribe((data) => {
        this.onGetList();
      });
    }
  }
}
