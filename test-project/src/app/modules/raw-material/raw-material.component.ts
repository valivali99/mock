import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-raw-material',
  templateUrl: './raw-material.component.html',
  styleUrls: ['./raw-material.component.scss']
})
export class RawMaterialComponent implements OnInit {

  @Input() rawMaterial: any;

  constructor() { }

  ngOnInit(): void {
  }

}
