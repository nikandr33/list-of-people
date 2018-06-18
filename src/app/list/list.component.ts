import { Component, OnInit } from '@angular/core';

import { List } from '../shared/list';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  list: List[] = [];
  showNew: Boolean = false;
  submitType: string = 'Save';
  selectedRow: number;
  listModel = new List();

  constructor() {
    this.list.push(new List('Nik', 19));
  }

  ngOnInit() {}

  onNew() {
    this.submitType = 'Save';
    this.showNew = true;
  }

  save(listToSave: List) {
    if (this.submitType === 'Save') {
      this.list.push(listToSave);
    } else {
      this.list[this.selectedRow].firstName = listToSave.firstName;
      this.list[this.selectedRow].age = listToSave.age;
    }
    this.showNew = false;
  }

  edit(index: number) {
    this.selectedRow = index;
    this.listModel = new List();
    this.listModel = Object.assign({}, this.list[this.selectedRow]);
    this.submitType = 'Update';
    this.showNew = true;
  }

  delete(item: List) {
    let index = this.list.indexOf(item);
    if(index > -1)
      this.list.splice(index, 1);
  }

  cancel() {
    this.showNew = !this.showNew;
  }

}
