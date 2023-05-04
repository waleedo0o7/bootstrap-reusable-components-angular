import { Component, Input } from "@angular/core";


@Component({
  selector: 'rModal',
  templateUrl : 'r-modal.component.html',
})


export class rModal{

  @Input() name = '';

}
