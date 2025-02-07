import { Injectable } from "@angular/core";
import { FaceSnap } from "../models/face-snap";

// The @Injectable() decorator is used to define a service class.
// providedIn: 'root' specifies that the service should be provided in the root injector.
@Injectable({
  providedIn: 'root'
})
export class FaceSnapsService {
  faceSnaps: FaceSnap[] = [
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
    ).withLocation('Montreal'),
    new FaceSnap(
      'Deda',
      'A bird',
      'https://cdn.pixabay.com/photo/2025/01/26/20/33/robin-9361610_1280.jpg',
      new Date(),
      200
    )
  ];

  getFaceSnaps() {
    return [...this.faceSnaps]; // we use ... because we want to return a copy of the array
  }

  addFaceSnap(faceSnap: FaceSnap) {
    this.faceSnaps.push(faceSnap);
  }

}