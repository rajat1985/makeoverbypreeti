import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-makeup',
  templateUrl: './makeup.component.html',
  styleUrls: ['./makeup.component.css']
})
export class MakeupComponent implements OnInit {

imageUrls: { url: string, caption: string }[] = [
  { url: './assets/makeup1.jpeg', caption: 'Caption for Makeup 1' },
  { url: './assets/makeup2.jpeg', caption: 'Caption for Makeup 2' },
  { url: './assets/makeup3.jpeg', caption: 'Caption for Makeup 3' },
  { url: './assets/makeup4.jpeg', caption: 'Caption for Makeup 4' },
  { url: './assets/makeup5.jpeg', caption: 'Caption for Makeup 5' },
  { url: './assets/makeup6.jpeg', caption: 'Caption for Makeup 6' },
  { url: './assets/makeup7.jpeg', caption: 'Caption for Makeup 7' },
  // Add more image URLs and captions as needed
];
  constructor() { }

   ngOnInit(): void {
   }

    @Input() items: string[] = []; // Array of image URLs or content

 }
