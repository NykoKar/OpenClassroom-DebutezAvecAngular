import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-face-snap',
  imports: [],
  templateUrl: './face-snap.component.html',
  styleUrl: './face-snap.component.scss'
})
export class FaceSnapComponent implements OnInit {
  title!: string;
  description!: string;
  createdAt!: Date;
  snaps!: number;
  imageUrl!: string;
  userHasSnapped!: boolean;
  snapButtonText!: string;

  // call once the component is initialized, after the constructor, before the first ngOnChanges
  ngOnInit(): void {
    this.title = 'Boubou';
    this.description = 'A beautiful dog';
    this.createdAt = new Date();
    this.snaps = 0;
    this.imageUrl = 'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg';
    this.userHasSnapped = false;
    this.snapButtonText = "Oh snap";
  }

  onSnap(): void {
    if(this.userHasSnapped){
      this.unSnap();
    }else {
      this.snap();
    }
  }

  unSnap() {
    this.snaps--;
    this.snapButtonText = "Oh Snap!"
    this.userHasSnapped = false;
  }

  snap() {
    this.snaps++;
    this.snapButtonText = "Oops, un Snap!";
    this.userHasSnapped = true;
  }
  
}
