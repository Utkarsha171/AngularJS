import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Cardinfo } from './card.domain';
import { Cardevent } from './my-card.event';

@Component({
  selector: 'app-my-card',
  templateUrl: './my-card.component.html',
  styleUrls: ['./my-card.component.css']
})
export class MyCardComponent implements OnInit {

  @Input()
  config : Cardinfo

  @Output()
  okay:EventEmitter<Cardevent>=new EventEmitter()
  constructor() { }

  ngOnInit() {
  }

  okclk(parent:string)
  {
    const evdt: Cardevent={
    tmps:Date.now(),
    parent: parent,
    card: this.config

  }
  
    this.okay.emit(evdt)
  }
  
}
