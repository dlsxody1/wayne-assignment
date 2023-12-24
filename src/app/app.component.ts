import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Post } from './types/PostTypes';
import 'slick-carousel';
import { SlickCarouselModule } from 'ngx-slick-carousel';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterModule, SlickCarouselModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'wayne-assignment';
  posts!: Post[];
  slideConfig = { slidesToShow: 4, slidesToScroll: 4 };

  constructor(private router: Router, private http: HttpClient) {}

  goToEdit() {
    this.router.navigate(['/edit']);
  }

  goToDetail(id: number) {
    this.router.navigate([`/detail/${id}`]);
  }

  ngOnInit() {
    this.http.get<Post[]>('http://localhost:3000').subscribe((posts) => {
      this.posts = posts;
    });
  }
}
