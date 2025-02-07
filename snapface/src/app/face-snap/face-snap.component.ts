import { Component, OnInit, Input } from '@angular/core';
import { NgStyle, NgClass, UpperCasePipe, DatePipe } from '@angular/common';
import { FaceSnap } from '../models/face-snap';
import { FaceSnapsService } from '../services/face-snaps.service';

@Component({
  selector: 'app-face-snap',
  imports: [
    NgStyle,
    NgClass,
    UpperCasePipe,
    DatePipe
  ],
  templateUrl: './face-snap.component.html',
  styleUrl: './face-snap.component.scss'
})

export class FaceSnapComponent implements OnInit {
  @Input() faceSnap!: FaceSnap;

  userHasSnapped!: boolean;
  snapButtonText!: string;

  constructor( private faceSnapsService: FaceSnapsService) {}
  // call once the component is initialized, after the constructor, before the first ngOnChanges
  ngOnInit(): void {
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
    this.faceSnapsService.snapFaceSnapById(this.faceSnap.id, 'unsnap');
    this.snapButtonText = "Oh Snap!"
    this.userHasSnapped = false;
  }

  snap() {
    this.faceSnapsService.snapFaceSnapById(this.faceSnap.id, 'snap');
    this.snapButtonText = "Oops, un Snap!";
    this.userHasSnapped = true;
  }
  
}
