import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from '../../types/PostTypes';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.scss',
})
export class DetailComponent implements OnInit {
  constructor(private route: ActivatedRoute, private http: HttpClient) {}
  post!: Post;

  ngOnInit() {
    const id = this.route.snapshot.params['id'];
    this.http
      .get<Post>(`http://localhost:3000/detail/${id}`)
      .subscribe((post) => {
        this.post = post;
      });
  }
}
