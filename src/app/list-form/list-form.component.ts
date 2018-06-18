import { Component, Input, Output, EventEmitter, OnChanges } from '@angular/core';

import { List } from '../shared/list';

@Component({
    moduleId: module.id,
    selector: 'list-form',
    templateUrl: './list-form.component.html',
    styleUrls: ['./list-form.component.css']
})
export class ListFormComponent implements OnChanges {
    @Input() show: boolean;
    @Input() submitType: boolean;
    @Input() listModel: List;

    @Output() save = new EventEmitter();
    @Output() cancel = new EventEmitter();

    list = new List();
    
    ngOnChanges() {
        this.list = this.listModel;
    }

    onSave() {
        this.save.emit(this.list);
    }

    onCancel() {
        this.cancel.emit();
    }

}
