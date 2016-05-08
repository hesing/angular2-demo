import {Injectable} from '@angular/core';

@Injectable()
export class SharedService {
    toggled: boolean = false;

    toggleSidebar(toggled: boolean){  
        this.toggled = toggled;
        console.log(this.toggled);
    }
}