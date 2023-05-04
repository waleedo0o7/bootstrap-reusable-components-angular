import { Component, Input } from '@angular/core';

@Component({
  selector: 'rText',
  template: '{{text}}',
})
export class rText {
  @Input() text = '';
}
