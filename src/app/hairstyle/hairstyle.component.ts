import { Component, OnInit ,Input} from '@angular/core';
@Component({
  selector: 'app-hairstyle',
  templateUrl: './hairstyle.component.html',
  styleUrls: ['./hairstyle.component.css']
})
export class HairstyleComponent implements OnInit {



    imageUrls: { url: string, caption: string }[] = [
      { url: './assets/hairstyle/hairstyle1.jpeg', caption: 'Caption for Makeup 1' },
      { url: './assets/hairstyle/hairstyle2.jpeg', caption: 'Caption for Makeup 2' },
      { url: './assets/hairstyle/hairstyle3.jpeg', caption: 'Caption for Makeup 3' },
      { url: './assets/hairstyle/hairstyle4.jpeg', caption: 'Caption for Makeup 4' },
      { url: './assets/hairstyle/hairstyle5.jpeg', caption: 'Caption for Makeup 5' },
      { url: './assets/hairstyle/hairstyle6.jpeg', caption: 'Caption for Makeup 6' },
      // Add more image URLs and captions as needed
    ];
  constructor() { }

  ngOnInit(): void {
  }

   @Input() items: string[] = []; // Array of image URLs or content

}
