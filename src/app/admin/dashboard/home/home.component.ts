import { Component, OnInit } from '@angular/core';
import { AppRoutes } from 'src/app/shared/enums';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  readonly appRoutesEnum = AppRoutes;
  constructor() {}

  ngOnInit(): void {}
}
