import { Injectable } from '@angular/core';
type HeroData = {
  name?:string,
  role?:string,
}

@Injectable({
  providedIn: 'root'
})
export class HerosService {
  // public heroList: HeroData[] = [];
   heroList = [
    {
      name:'白起',
      role:'战士'
    },
    {
      name:'虞姬',
      role:'射手'
    },
    {
      name:'凯',
      role:'战士/打野'
    }
]

constructor() { }

}
