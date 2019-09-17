import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  

clickmessage='';
  constructor() { }

  ngOnInit() {
  }
  getinfo(Country:string)
  {
    if(Country=='India')
     this.clickmessage ='India is my country all indians are my brothers and sisters';

     else if(Country=='China')
     this.clickmessage ='China is my country all indians are my brothers and sisters';

     else if(Country=='England')
     this.clickmessage ='England is my country all indians are my brothers and sisters';

     else if(Country=='Japan')
     this.clickmessage ='Japan is my country all indians are my brothers and sisters';

     else if(Country=='Usa')
     this.clickmessage ='Usa is my country all indians are my brothers and sisters';

     else
     this.clickmessage = 'no country selected';
  }

}
