import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-assembly',
  templateUrl: './assembly.component.html',
  styleUrls: ['./assembly.component.scss']
})
export class AssemblyComponent implements OnInit {

  @Input() assembly: any;

  constructor() { }

  ngOnInit(): void {
  }

}
