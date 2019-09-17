import { Component, OnInit, Input } from '@angular/core';
import { flag_interface } from '../flag_interface';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  @Input()
  country:flag_interface
  constructor() { }

  ngOnInit() {
  }

}
