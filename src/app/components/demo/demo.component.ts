import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent {
  userForm:FormGroup = new FormGroup({
    username: new FormControl(),
    password: new FormControl()
  })

  onClick(){
    console.log(this.userForm.value)
  }
}
