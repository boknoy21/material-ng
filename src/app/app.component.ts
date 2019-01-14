import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder, ReactiveFormsModule  } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'material-ng';

  myForm: FormGroup;
  
 

  minDate = new Date(2000, 0, 1);
  maxDate = new Date(2019, 0, 13);

  initVal = new Date(2019, 0, 16);

  constructor(private fb: FormBuilder){
    this.myForm = fb.group({
        'myDate': ['', Validators.compose([Validators.required])]
    });


  }
}
