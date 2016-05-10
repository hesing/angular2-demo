import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'form-demo',
    templateUrl: './src/components/forms/form.component.html'
})
export class FormComponent {
    constructor() { }
    
    onSubmit(form: any){
        console.log(form);
    }
}