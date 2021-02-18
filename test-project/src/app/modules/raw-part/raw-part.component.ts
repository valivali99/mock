import { Component, Input, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-raw-part',
  templateUrl: './raw-part.component.html',
  styleUrls: ['./raw-part.component.scss']
})
export class RawPartComponent implements OnInit {

  @Input() rawPart: any;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
  }

}
