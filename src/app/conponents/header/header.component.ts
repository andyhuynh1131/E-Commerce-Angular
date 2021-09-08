import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AccCountService } from 'src/app/service/AccCount.service';
import { CartService } from './../../service/Cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  accCurrent: any = {}
  totalProduct: number = 0

  constructor(private cartService: CartService,
    private accService: AccCountService,
    private router: Router) {
  }

  getTotal() {
    this.cartService.getProducts().subscribe(x => {
      this.totalProduct = x.length
    })
  };

  getUserLogin() {
    this.accService.isLogin().subscribe(x => { this.accCurrent = x })
  }

  ngOnInit() {
    this.getTotal();
    this.getUserLogin();
  };


  logOut() {
    const conFirmLogOut = confirm('Bạn có chắc chắn muốn đăng xuất ? ')
    if (conFirmLogOut) {
      this.accService.logOut();
    }

  }
  redirectTo(uri: string) {
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() =>
      this.router.navigate([uri]));
  }
  SearchByName(name: any) {
    if (name.value !== '') {
      this.redirectTo(`/search/${name.value}`)
    }
  }
}
