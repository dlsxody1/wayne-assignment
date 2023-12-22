import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule, Routes } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Post } from './types/PostTypes';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'wayne-assignment';
  posts!: Post[];

  constructor(private router: Router, private http: HttpClient) {}

  goToEdit() {
    this.router.navigate(['/edit']);
  }

  ngOnInit() {
    this.http
      .get<Post[]>('http://localhost:3000/post')
      .subscribe((posts) => (this.posts = posts));
  }
}
