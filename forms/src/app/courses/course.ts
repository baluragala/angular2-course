export class Course {

  constructor(public id: number,
              public title: string,
              public code: string,
              public category: string,
              public price: number,
              public description: string,
              public rating: number,
              public imageUrl: string,
              public totalSubscribers?: number,
              public totalLikes?: number) {

  }
}

