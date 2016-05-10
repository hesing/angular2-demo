import {Component} from '@angular/core';
import {NavbarComponent} from '../navbar/navbar.component';
import {SidebarComponent} from '../sidebar/sidebar.component';
import {FormComponent} from '../forms/form.component';


@Component({
    selector: 'my-app',
    templateUrl: './src/components/app/app.component.html',
    directives: [NavbarComponent, SidebarComponent, FormComponent]
})
export class AppComponent { 
	toggleSidebar(){
		if(window.innerWidth > 768){
			return true;
		} else {
			return false;
		}
	}
}