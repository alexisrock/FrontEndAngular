import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  public display : boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  abrirSideBar(){
    this.display = true;
    console.log('entro')
  }
}
