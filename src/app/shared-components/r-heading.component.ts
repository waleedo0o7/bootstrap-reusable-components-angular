import { Component, Input } from '@angular/core';

@Component({
  selector: 'rHeading',
  template: '{{text}}',
})
export class rHeading {
  @Input() text = '';
}
