export class Lolipop{
    id: string;
    name: string;
    flavor: string;
    price: string;
    brief_desc: string;
    comp_desc: string;
    images: string;
    ingredients: string;
    available: boolean;


    constructor(id: string, name: string, flavor: string, price: string, brief_desc: string, comp_desc: string, images: string, ingredients: string, available: boolean){
      this.id = id;
      this.name = name
      this.flavor = flavor
      this.price = price
      this.brief_desc = brief_desc
      this.comp_desc = comp_desc
      this.images = images
      this.ingredients = ingredients
      this.available = available
    }
  }