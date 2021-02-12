import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-part',
  templateUrl: './part.component.html',
  styleUrls: ['./part.component.scss']
})
export class PartComponent implements OnInit {

  @Input() part: any;
  
  constructor() { }

  ngOnInit(): void {
  }

}
