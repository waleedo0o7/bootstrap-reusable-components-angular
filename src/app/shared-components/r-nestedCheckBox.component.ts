import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'rNestedCheckBox',
  template: `
    <div class="form-check" *ngFor="let item of list; let i = index">

      <input
        type="checkbox"
        class="form-check-input"
        [id]="item.id"
        [checked]="item.selected"
      />

      <label
        class="form-check-label"
        [for]="item.id"
        (click)="someEvent.emit(i)"
      >
        {{ item.id }} --- {{ i }} --- {{ item.selected }}
      </label>

      <rNestedCheckBox
        *ngIf="item.childs"
        [list]="item.childs"
        (someEvent)="someFunction($event)"
      ></rNestedCheckBox>
    </div>
  `,
})
export class rNestedCheckBox {
  @Input() list: any;
  @Output() someEvent = new EventEmitter();

  someFunction(e: any) {
    console.log(this.list[e]);
  }
}
