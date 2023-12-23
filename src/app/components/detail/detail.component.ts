import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from '../../types/PostTypes';

@Component({
  selector: 'app-detail',
  standalone: true,
  imports: [],
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.scss',
})
export class DetailComponent {
  constructor(private route: ActivatedRoute, private http: HttpClient) {}
  post!: Post;

  getDetailImage() {
    const id = this.route.snapshot.params['id'];
    this.http
      .get<Post>(`http://localhost:3000/post/${id}`)
      .subscribe((post) => (this.post = post));
  }
}
