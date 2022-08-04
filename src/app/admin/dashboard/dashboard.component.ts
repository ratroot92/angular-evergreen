import { Component, OnInit } from '@angular/core';
import { AppRoutes } from 'src/app/shared/enums';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  readonly appRoutesEnum = AppRoutes;

  constructor() {}

  ngOnInit(): void {}
}
