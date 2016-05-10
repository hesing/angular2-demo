import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'navbar',
    templateUrl: './src/components/navbar/navbar.component.html'

})
export class NavbarComponent {
    toggled: boolean = false;
    
    constructor() { }
    
    
    toggleSidebar(){
        this.toggled = !this.toggled;
        console.log(this.toggled);
    }
}