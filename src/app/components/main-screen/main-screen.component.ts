import { Component, OnInit } from '@angular/core';
import {ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-main-screen',
  templateUrl: './main-screen.component.html',
  styleUrls: ['./main-screen.component.scss']
})
export class MainScreenComponent implements OnInit {

  constructor(private cdref: ChangeDetectorRef) { }

  model;

  ngOnInit(): void {
  }

  onDataChange(data){
    this.model = data;
    console.log(this.model);
    
    this.cdref.detectChanges();
  }

}
