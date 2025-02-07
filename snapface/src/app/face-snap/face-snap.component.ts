import { Component, Input } from '@angular/core';
import { UpperCasePipe } from '@angular/common';
import { FaceSnap } from '../models/face-snap';
import { FaceSnapsService } from '../services/face-snaps.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-face-snap',
  imports: [
    UpperCasePipe,
  ],
  templateUrl: './face-snap.component.html',
  styleUrl: './face-snap.component.scss'
})

export class FaceSnapComponent {
  @Input() faceSnap!: FaceSnap;

  constructor(private router: Router) {}

  onViewFaceSnap() {
    this.router.navigateByUrl(`facesnaps/${this.faceSnap.id}`);
  }
  
}
