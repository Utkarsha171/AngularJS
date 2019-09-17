import { Component, OnInit, Input } from '@angular/core';
import { flag_interface} from '../flag_interface';

@Component({
  selector: 'app-flags',
  templateUrl: './flags.component.html',
  styleUrls: ['./flags.component.css']
})
export class FlagsComponent implements OnInit {

  @Input()
  country:flag_interface
  constructor() { }

  ngOnInit() {
  }

}
