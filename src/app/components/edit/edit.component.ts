import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Post } from '../../types/PostTypes';

@Component({
  selector: 'app-edit',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.scss',
})
export class EditComponent {
  title!: string;
  image!: File;

  constructor(private http: HttpClient) {}

  onTitleChange(event: Event) {
    this.title = (event.target as HTMLInputElement).value;
  }

  onImageChange(event: Event) {
    this.image = (event.target as HTMLInputElement).files[0];
    const formData = new FormData();
    formData.append('image', this.image);
    this.http.post('http://localhost:3000/upload', formData).subscribe();
  }

  onSubmit() {
    const post: Post = {
      id: Date.now(), // 대체로 서버에서 생성해야 합니다.
      createdAt: new Date(),
      title: this.title,
      image: this.image.name, // 여기서는 파일 이름을 사용하지만, 실제로는 업로드 후 반환된 파일 URL을 사용해야 합니다.
    };
    this.http.post('http://localhost:3000/post', post).subscribe();
  }
}
