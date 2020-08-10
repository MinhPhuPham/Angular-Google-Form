import { Component, OnInit } from '@angular/core';
import {FormGroup} from '@angular/forms';
import {FormlyFieldConfig} from '@ngx-formly/core';

@Component({
  selector: 'app-right-workplace',
  templateUrl: './right-workplace.component.html',
  styleUrls: ['./right-workplace.component.scss']
})
export class RightWorkplaceComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  form = new FormGroup({});
  model = { email: 'email@gmail.com' };
  fields: FormlyFieldConfig[] = [
    {
      key: 'email',
      type: 'input',
      templateOptions: {
        label: 'Email address',
        placeholder: 'Enter email',
        required: true,
      }
    },
    {
      key: 'number',
      type: 'input',
      templateOptions: {
        label: 'Phone Number',
        placeholder: 'Enter phone',
        required: true,
      }
    }
  ];

  onSubmit() {
    alert(
      JSON.stringify(this.model, null, 4)
    );
  }

}
