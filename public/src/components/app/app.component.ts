import {Component} from '@angular/core';
import {NavbarComponent} from '../navbar/navbar.component';
import {SharedService} from '../shared/shared.service';
import {SidebarComponent} from '../sidebar/sidebar.component';
import {RedditAppComponent} from '../redditapp/reddit.component';
import { InventoryApp } from '../inventory_app/inventory.component';

@Component({
    selector: 'my-app',
    templateUrl: './src/components/app/app.component.html',
    directives: [NavbarComponent, SidebarComponent, RedditAppComponent, InventoryApp],
	providers: [SharedService]
})
export class AppComponent { 
	names = ['Ari', 'Carlos', 'Felipe', 'Nate'];

	toggleSidebar(){
		if(window.innerWidth > 768){
			return true;
		} else {
			return false;
		}
	}
}