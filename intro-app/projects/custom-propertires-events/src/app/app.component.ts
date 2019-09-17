import { Component } from '@angular/core';
import { Cardinfo } from './my-card/card.domain';
import { Cardevent } from './my-card/my-card.event';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'custom-propertires-events';

  obj : Cardinfo = {
    imgUrl:'C:/Users/user/Pictures/Screenshots',
    title:'Bootstrap',
    info:'Some quick example text to build on the card title and make up the bulk of the card',
    navURl:'https://getbootstrap.com/docs/4.0/components/card/'

   }
   onokay(evdt:Cardevent)
   {
      console.log(evdt)
   }
}
