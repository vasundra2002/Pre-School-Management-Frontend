import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  selectedMenu: string = 'Home';

  selectMenu(menu: string): void {
    this.selectedMenu = menu;
  }

}
