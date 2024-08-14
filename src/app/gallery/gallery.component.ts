import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  images: string[] = [];
  isModalOpen = false;
  selectedImage: string | null = null;
  zoomLevel = 1;

  ngOnInit(): void {
   let images = [32];


          for (let i = 1; i <= 20; i++) {
                    this.images.push(`./assets/gallery/makeup${i}.jpeg`);
                    }
                     //iterate images from 1 to 57
                            for (let i = 1; i <= 12; i++) {
                              this.images.push(`./assets/gallery/hairstyle${i}.jpeg`);
                              }
  }

  openModal(image: string): void {
    this.selectedImage = image;
    this.isModalOpen = true;
  }

  closeModal(): void {
    this.isModalOpen = false;
    this.selectedImage = null;
    this.zoomLevel = 1;
  }

  zoomIn(): void {
    this.zoomLevel += 0.1;
  }

  zoomOut(): void {
    if (this.zoomLevel > 0.1) {
      this.zoomLevel -= 0.1;
    }
  }
}
