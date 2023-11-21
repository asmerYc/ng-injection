import { Injectable } from '@angular/core';
type HeroData = {
  name:string,
  role:string,
  avatar:string,
}

@Injectable({
  providedIn: 'root'
})
export class HerosService {

   readonly heroList:HeroData[] = [
    {
      name:'白起',
      role:'战士',
      avatar:'../../../assets/zhanshi.jpeg',
    },
    {
      name:'虞姬',
      role:'射手',
      avatar:'../../../assets/sheshou.jpeg'
    },
    {
      name:'凯',
      role:'战士/打野',
      avatar:'../../../assets/daye.jpeg'
    },
]

constructor() { }

}
