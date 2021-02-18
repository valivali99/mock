import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-commodity',
  templateUrl: './commodity.component.html',
  styleUrls: ['./commodity.component.scss']
})
export class CommodityComponent implements OnInit {

  @Input() commodity: any;

  constructor() { }

  ngOnInit(): void {
  }

}
