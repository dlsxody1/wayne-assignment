import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { CreatePost, Post } from '../../types/PostTypes';
import imageCompression from 'browser-image-compression';

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
  url!: string;

  constructor(private http: HttpClient, private router: Router) {}

  onTitleChange(event: Event) {
    this.title = (event.target as HTMLInputElement).value;
    console.log(this.title, 'title');
  }

  async onImageChange(event: Event) {
    try {
      const inputElement = event.target as HTMLInputElement;
      if (inputElement && inputElement.files && inputElement.files.length > 0) {
        const options = {
          maxSizeMB: 1,
          maxWidthOrHeight: 1920,
        };
        this.image = inputElement.files[0];
        if (this.image.size > 1024 * 1024) {
          alert('이미지 크기는 1MB를 초과할 수 없습니다.');
          return;
        }
        const compressedImage = await imageCompression(this.image, options);
        const formData = new FormData();
        formData.append('image', compressedImage, compressedImage.name);
        console.log(formData, 'formData');
        this.http
          .post('http://localhost:3000/upload', formData)
          .subscribe((response: any) => {
            console.log(response);
            this.url = response.url;
          });
      }
    } catch (err: any) {
      console.log(err);
    }
  }

  onSubmit(event: Event) {
    event.preventDefault();
    console.log(this.image, 'image');
    const post: CreatePost = {
      title: this.title,
      image: this.url,
    };
    console.log(post);
    this.http.post('http://localhost:3000/post', post).subscribe();
    this.router.navigate(['/']);
  }
}
