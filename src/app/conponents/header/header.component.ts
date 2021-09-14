import { Router } from '@angular/router';
import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { AccCountService } from 'src/app/service/AccCount.service';
import { CartService } from './../../service/Cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnChanges {
  accCurrent: any = {}
  totalProduct: number = 0
  @Input() isLoggin: boolean = false

  constructor(private cartService: CartService,
    private accService: AccCountService,
    private router: Router) {
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);

  }

  getTotal() {
    this.cartService.getProducts().subscribe(listProduct => {
      this.totalProduct = listProduct.length
    })
  };

  getUserLogin() {
    this.accService.isLogin().subscribe(user => { this.accCurrent = user })
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
  redirectTo(url: string) {
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() =>
      this.router.navigate([url]));
  }
  SearchByName(name: any) {
    if (name.value !== '') {
      this.redirectTo(`/search/${name.value}`)
    }
  }
}
