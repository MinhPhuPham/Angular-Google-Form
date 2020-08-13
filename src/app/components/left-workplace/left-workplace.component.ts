import { Component, OnInit, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-left-workplace',
  templateUrl: './left-workplace.component.html',
  styleUrls: ['./left-workplace.component.scss']
})
export class LeftWorkplaceComponent implements OnInit {

  @Input() data: any;
  constructor() { }

  model;

  ngOnInit(): void {
    
  }

  ngOnChanges(changes: SimpleChanges) {
    if(!changes.data) return;
    this.model = changes.data.currentValue
  }

}
