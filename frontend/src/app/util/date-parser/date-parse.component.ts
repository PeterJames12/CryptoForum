import {Component, OnInit, Input} from "@angular/core";

@Component({
  selector: 'date-parse',
  templateUrl: 'date-parse.component.html'
})
export class DateParseComponent implements OnInit{
  @Input('date') date: Date;

  constructor() {}
  ngOnInit() {}
}

