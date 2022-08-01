export interface ProductI{
  id:number,
  title:string,
  price:number,
  description:string,
  category:string,
  image:string,
  rating:RatingProductI
}

interface RatingProductI{
  rate:number,
  count:number
}
