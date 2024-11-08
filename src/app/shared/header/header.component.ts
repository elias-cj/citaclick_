import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  // State to control the sidebar visibility
  isSidebarOpen = false;

  // Toggle the sidebar
  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }
}
