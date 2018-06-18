import { Component, Input, Output, EventEmitter } from '@angular/core';

import { List } from '../shared/list';

@Component({
  selector: 'tr',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})
export class ListItemComponent {
  @Input() item: List;
  @Input() i: number;


  @Output() delete = new EventEmitter();
  @Output() edit = new EventEmitter();

  onDelete() {
    this.delete.emit(this.item);
  }

  onEdit() {
    this.edit.emit(this.i);
  }

}