export class FaceSnap {

  constructor(
    public title: string,
    public description: string,
    public imageUrl: string,
    public createdAt: Date,
    public snaps: number
  ) {};

  addSnap(): void {
    this.snaps++;
  }

  removeSnap(): void {
    this.snaps--;
  }
}

/*

Usage of public here is a shorthand to create and initialize the properties of the class.
*/