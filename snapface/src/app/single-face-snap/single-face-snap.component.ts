import { Component, OnInit, Input } from '@angular/core';
import { NgStyle, NgClass, UpperCasePipe, DatePipe } from '@angular/common';
import { FaceSnapsService } from '../services/face-snaps.service';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { FaceSnap } from '../models/face-snap';

@Component({
  selector: 'app-single-face-snap',
  imports: [
    NgStyle,
    NgClass,
    UpperCasePipe,
    DatePipe,
    RouterLink
  ],
  templateUrl: './single-face-snap.component.html',
  styleUrl: './single-face-snap.component.scss'
})

export class SingleFaceSnapComponent implements OnInit {
  faceSnap!: FaceSnap;
  userHasSnapped!: boolean;
  snapButtonText!: string;

  constructor(
    private faceSnapsService: FaceSnapsService,
    private route: ActivatedRoute
  ) {}

  // call once the component is initialized, after the constructor, before the first ngOnChanges
  ngOnInit(): void {
    this.prepareInterface();
    this.getFaceSnap();
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

  private prepareInterface() {
    this.userHasSnapped = false;
    this.snapButtonText = "Oh snap";
  }
  
  private getFaceSnap() {
    const faceSnapId = this.route.snapshot.params['id'];
    this.faceSnap = this.faceSnapsService.getFaceSnapById(faceSnapId);
  }
}
