import { Component, Input, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'shared-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class SharedHeaderComponent implements OnInit {
  @Input() options: any;
  constructor() {
    console.log('=============================');
    console.log('this.options', this.options);
    console.log('=============================');
  }
  ngOnInit(): void {}
}
