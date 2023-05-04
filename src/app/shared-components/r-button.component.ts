import { Component, Input } from '@angular/core';

@Component({
  selector: 'rButton',
  template: ` {{ text }} `,
})
export class rButton {
  @Input() text = '';
}
