import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'sidebar',
    templateUrl: './src/components/sidebar/sidebar.component.html'
})
export class SidebarComponent implements OnInit {
    toggled: boolean = false;

    constructor( ){}

    ngOnInit() { 

    }
}