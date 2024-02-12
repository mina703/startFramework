import { Component } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent {
  
  images: string[] = [
    './assets/poert1.png',
    './assets/port2.png',
    './assets/port3.png',
    './assets/poert1.png',
    './assets/port2.png',
    './assets/port3.png'
  ];

  selectedImage: string = '';
  enlargedImageVisible: boolean = false;

  enlargeImage(imagePath: string) {
    this.selectedImage = imagePath;
    this.enlargedImageVisible = true;
  }

  closeEnlargedImage() {
    this.enlargedImageVisible = false;
    this.selectedImage = ''
  }
}
