import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OptionsService {

  projectOptions: any = [{
    optionName: "Copy",
    iconName: "file_copy"
  },
  {
    optionName: "Cut",
    iconName: "content_cut"
  },
  {
    optionName: "Paste",
    iconName: "content_paste"
  },
  {
    optionName: "Delete",
    iconName: "delete"
  },
  {
    optionName: "Import",
    iconName: "note_add"
  },
  ]

  constructor() { }

  getProjectMenuOptions() {
    return this.projectOptions;
  }

}
