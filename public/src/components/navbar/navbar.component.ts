import { Component, OnInit } from '@angular/core';
import {SharedService} from '../shared/shared.service';

@Component({
    selector: 'navbar',
    templateUrl: './src/components/navbar/navbar.component.html'

})
export class NavbarComponent {
    toggled: boolean = false;
    
    constructor( private _sharedService: SharedService) { }
    
    // ngOnInit(): any {
    //     this.toggled = this._sharedService.toggleSidebar();
    // }
    
    toggleSidebar(){
        this.toggled = !this.toggled;
        console.log(this.toggled);
        this._sharedService.toggleSidebar(this.toggled);
    }
}