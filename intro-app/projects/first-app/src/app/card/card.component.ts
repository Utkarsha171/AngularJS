import { Component, OnInit, Input } from '@angular/core';
import { CardInfo } from './card';
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input()
  config: CardInfo
  constructor() { }

  ngOnInit() {
  }

}
