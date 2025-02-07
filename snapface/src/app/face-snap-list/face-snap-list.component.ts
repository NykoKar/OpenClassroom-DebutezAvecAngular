import { Component, OnInit } from '@angular/core';
import { FaceSnap } from '../models/face-snap';
import { FaceSnapComponent } from '../face-snap/face-snap.component';

@Component({
  selector: 'app-face-snap-list',
  imports: [FaceSnapComponent],
  templateUrl: './face-snap-list.component.html',
  styleUrl: './face-snap-list.component.scss'
})
export class FaceSnapListComponent implements OnInit {
  faceSnaps!: FaceSnap[];

  ngOnInit(): void {
    this.faceSnaps = [
      new FaceSnap(
      'Boubou',
      'A teddy bear',
      'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
      new Date(),
      17
    ),
    new FaceSnap(
      'Bibi',
      'A grizzli',
      'https://cdn.pixabay.com/photo/2025/02/02/01/20/grizzly-9375881_1280.jpg',
      new Date(),
      3
    ),
    new FaceSnap(
      'Deda',
      'A bird',
      'https://cdn.pixabay.com/photo/2025/01/26/20/33/robin-9361610_1280.jpg',
      new Date(),
      200
    )
  ];

    this.faceSnaps[1].setLocation('Paris');
  }

}
