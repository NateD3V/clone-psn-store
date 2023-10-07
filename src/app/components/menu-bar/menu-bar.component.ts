import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.css','./menu-responsive.component.css']
})
export class MenuBarComponent implements OnInit {

  isMenuVisible = false

  toggleMenu() {
    this.isMenuVisible = !this.isMenuVisible;
  }


  constructor() { 
    
  }

  ngOnInit(): void {
  }

}

