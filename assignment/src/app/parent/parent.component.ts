import { Component, OnInit } from '@angular/core';
import { flag_interface } from '../flag_interface';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  object: flag_interface ={
    title:  'India',
    imgUrl: 'assets/i.png',
    info: `India (official name: the Republic of India;[19] Hindi:
      Bhārat Gaṇarājya) is a country in South Asia. It is the seventh-largest
      country by area, the second-most populous country, and the most populous
      democracy in the world. `,
  
     mobile: 123456789,
     address: 'Pune,Maharashtra'
  
  }
  

  constructor() { }

  ngOnInit() {
  }

  selectcountry(evDt: flag_interface) {
    this.object.title = evDt.title
    this.object.info = evDt.info
    this.object.address = evDt.address
    this.object.mobile = evDt.mobile
    this.object.imgUrl = evDt.imgUrl
  }


}
