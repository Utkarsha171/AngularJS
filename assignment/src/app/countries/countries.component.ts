import { Component, OnInit, Input,EventEmitter,Output } from '@angular/core';
import { flag_interface } from '../flag_interface';
@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
})
export class CountriesComponent implements OnInit {

  @Input()
  country:flag_interface

  @Output()
  select: EventEmitter<flag_interface> = new EventEmitter()

  constructor() { }
  

  ngOnInit() {
  }

 onclick(cname:string)
 {
  if (cname === "USA") {
    console.log(cname)
    const country: flag_interface = {
      title: 'United States of America',
      imgUrl: 'assets/usa.jpg',
      info: `The United States of America (USA),
      commonly known as the United States (U.S. or US) or America,
       is a country comprising 50 states, a federal district,
       five major self-governing territories, and various possessions.
      `,
      mobile: 19161899199,
      address: 'Mumbai,Maharashtra'

    }
    this.select.emit(country)
  } else if (cname === "UK") {

    console.log(cname)
    const country: flag_interface = {
      title: 'United Kingdom',
      imgUrl: 'assets/uk.jpg',
      info: `The United Kingdom of Great Britain
      and Northern Ireland, commonly known as the United Kingdom (UK)[15]
      or Britain,[note 11] is a sovereign country
      located off the north-western coast of the European mainland.
      
      `,
      mobile: 4949819819,
      address: 'Delhi,India'
    }
    this.select.emit(country)
  }
  else if (cname === "China") {
    const country: flag_interface = {
      title: 'China',
      imgUrl: 'assets/china.jpg',
      info: `China (Chinese: 中国; pinyin: Zhōngguó; lit. "Central State"),
      officially the People's Republic of China (PRC),
       is a country in East Asia and the world's most populous country,
       with a population of around 1.404 billion in 2017.
      `,
      mobile: 4948119985,
      address: 'Gujrat,India'
    }
    this.select.emit(country)
  }
  else if (cname === "India") {
    const country: flag_interface = {
      title: 'India',
      imgUrl: 'assets/i.png',
      info: `India (official name: the Republic of India;[19] Hindi:
        Bhārat Gaṇarājya) is a country in South Asia. It is the seventh-largest
        country by area, the second-most populous country, and the most populous
        democracy in the world. `,
      mobile: 3746734437,
      address: 'Pune,India'
    }
    this.select.emit(country)
 } else if(cname === "Japan"){
  const country: flag_interface = {
  title: 'Japan',
  imgUrl:'assets/Japan.jpg',
  info :`Japan (Japanese: 日本, Nippon [ɲippoꜜɴ] (About this soundlisten) or
     Nihon [ɲihoꜜɴ] (About this soundlisten); formally 日本国, About this
     soundNippon-koku or Nihon-koku, lit. 'State of Japan')
     is an island country in East Asia. Located in the
     Pacific Ocean, it lies off the eastern coast of the
      Asian continent and stretches from the Sea of Okhotsk
      in the north to the East China Sea and the Philippine
      Sea in the south.
   
    `,
    mobile: 655565616,
    address: 'Pune,India'
  }
  this.select.emit(country)


 }





}

}

 
   


