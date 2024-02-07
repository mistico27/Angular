import { Injectable } from '@angular/core';
import { Food } from 'src/app/shared/models/food';
import { Tag } from 'src/app/shared/models/Tags';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getAllTags():Tag[]{
    return[
      {name:'All',count:14},
      {name:'FastFood',count:4},
      {name:'Pizza',count:2},
      {name:'Lunch',count:3},
      {name:'SlowFood',count:2},
      {name:'Ravioli',count:1},
      {name:'Fry',count:1},
      {name:'Grill',count:1},
    ];
  }


  getFoodById(id:number): Food{
      return this.getAll().find(food=> food.id==id)!;
  }


  getAllFoodsByTag(tag:String):Food[]{
    if(tag=="All"){
      return this.getAll();
    }else{
      return this.getAll().filter(food=>food.tags?.includes(tag));
    }
  }

  getAll():Food[]{
    return[
      {
        id: 1,
        name: 'Pizza Pepperoni',
        cookTime: '10-20',
        price: 10,
        favorite: false,
        origins: ['italy'],
        stars: 4.5,
        imageUrl: '/assets/images/image1.jpg',
        tags: ['FastFood', 'Pizza', 'Lunch'],
      },
      {
        id: 2,
        name: 'Meatball',
        price: 20,
        cookTime: '20-30',
        favorite: true,
        origins: ['persia', 'middle east', 'china'],
        stars: 4.7,
        imageUrl: '/assets/images/image2.jpg',
        tags: ['SlowFood', 'Lunch'],
      },
      {
        id: 3,
        name: 'Pesto Ravioli',
        price: 5,
        cookTime: '10-15',
        favorite: false,
        origins: ['Italy', 'us'],
        stars: 3.5,
        imageUrl: '/assets/images/image4.jpg',
        tags: ['FastFood', 'Ravioli'],
      },
      {
        id: 4,
        name: 'Fried Potatoes',
        price: 2,
        cookTime: '15-20',
        favorite: true,
        origins: ['belgium', 'france'],
        stars: 3.3,
        imageUrl: '/assets/images/food-4.jpg',
        tags: ['FastFood', 'Fry'],
      },
      {
        id: 5,
        name: 'Chicken grill',
        price: 11,
        cookTime: '40-50',
        favorite: false,
        origins: ['india', 'asia'],
        stars: 3.0,
        imageUrl: '/assets/images/image5.jpg',
        tags: ['SlowFood', 'Grill'],
      },
      {
        id: 6,
        name: 'Vegetables Pizza',
        price: 9,
        cookTime: '40-50',
        favorite: false,
        origins: ['italy'],
        stars: 4.0,
        imageUrl: '/assets/images/food-6.jpg',
        tags: ['FastFood', 'Pizza', 'Lunch'],
      },
    ]
  }



}
