import { Component, OnInit } from '@angular/core';
import { AppRoutes } from '../shared/enums';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  public readonly appRoutesEnum = AppRoutes;
  options: any = {
    isAuthenticated: false,
  };
  constructor() {}

  ngOnInit(): void {}

  changeOptions() {
    this.options.isAuthenticated = !this.options.isAuthenticated;
  }
}
