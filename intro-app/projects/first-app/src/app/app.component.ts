import { Component } from '@angular/core';
import { CardInfo } from './card/card';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'first-app';

  obj: CardInfo = {
    imgUrl: 'G:/angular/intro-app/projects/first-app/src/app/download.png',
    title: 'India',
    info: 'India is my country',
    navUrl: 'https://getbootstrap.com/docs/4.0/components/card/'
  }

}
