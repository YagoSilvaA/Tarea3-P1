import { Component, OnInit } from '@angular/core';
import { MenuService } from '../_service/menu.service';

@Component({
  selector: 'app-menu-table',
  templateUrl: './menu-table.component.html',
  styleUrls: ['./menu-table.component.scss']
})
export class MenuTableComponent implements OnInit {

  platos = [
    {
      price: "123",
      meal: "papa frita"
    },
    {
      price: "1234",
      meal: "camote frito"
    }
  ]


  constructor(
    private menuService: MenuService
  ) { }

  ngOnInit(): void {
    this.menuService.getMenu().subscribe((data) =>{
      this.platos = data;
      console.log(data);
    }

    )
  }

}
