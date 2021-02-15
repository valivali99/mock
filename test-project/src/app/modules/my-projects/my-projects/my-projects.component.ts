import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-my-projects',
  templateUrl: './my-projects.component.html',
  styleUrls: ['./my-projects.component.scss']
})
export class MyProjectsComponent implements OnInit {

  projects: any;
  hideComponents: boolean = false;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.getData();
  }
  //expansion pannel
  getData() {
    this.dataService.getData().subscribe((data: any) => {
      this.projects = data
    });
  }

  toggleExpansion() {
    this.hideComponents = !this.hideComponents;
  }
}
