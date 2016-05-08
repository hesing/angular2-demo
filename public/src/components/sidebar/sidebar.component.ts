import { Component, OnInit } from '@angular/core';
import {SharedService} from '../shared/shared.service';

@Component({
    selector: 'sidebar',
    templateUrl: './src/components/sidebar/sidebar.component.html'
})
export class SidebarComponent implements OnInit {
    toggled: boolean = false;

    constructor( private _sharedService: SharedService){}

    ngOnInit() { 
        console.log(this._sharedService.toggled);   
    }
}