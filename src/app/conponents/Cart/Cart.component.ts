import { Component, OnInit } from '@angular/core';
import { CartService } from './../../service/Cart.service';



@Component({
  selector: 'app-Cart',
  templateUrl: './Cart.component.html',
  styleUrls: ['./Cart.component.css']
})
export class CartComponent implements OnInit {
  listCart: any = []
  sumprice: any = 0
  sumtotal: any = 0
  isChecked: boolean = false
  listPay: any = []
  display: boolean = false
  constructor(private cartService: CartService) {

  }

  ngOnInit() {
    window.scrollTo(0, 0)
    this.getAllProductInCart();
  };

  getAllProductInCart(): void {
    this.cartService.getProducts().subscribe(x => {
      this.listCart = x
      this.updateSum();
    })
  }

  updateSum() {
    this.sumprice = this.listCart.reduce((acc: any, curr: any) => acc + curr.qty * curr.price, 0)
    this.sumtotal = this.listCart.reduce((acc: any, curr: any) => acc + curr.qty, 0)
  };

  minus(id: number) {
    const result = this.listCart.find((x: any) => x.id === id)
    if (result.qty > 1) {
      result.qty = result.qty - 1
      this.updateSum()
    } else {
      this.cartService.remove(id);
      this.updateSum();
    }

  };

  plus(id: number) {
    const result = this.listCart.find((x: any) => x.id === id)
    result.qty = result.qty + 1
    this.updateSum()

  };

  changeQty(qty: string, id: number) {
    const y: number = +qty
    if (y > 0) {
      const result = this.listCart.find((x: any) => x.id === id)
      if (result) {
        result.qty = qty
      }
    } else {
      const result = this.listCart.find((x: any) => x.id === id)
      if (result) {
        result.qty = 1
      }
    }

  };

  handelChange(id: number) {
    const result = this.listCart.find((x: any) => x.id === id)
    if (result.isChecked) {
      this.listPay.push(result)
    } else {
      const index = this.listPay.findIndex((x: any) => x.id === result.id)
      this.listPay.splice(index, 1)
    }
  };

  showDialog() {
    if (this.listPay.length === 0) {
      alert('Vui lòng chọn sản phẩm để thanh toán')
    } else {
      for (let product of this.listPay) {
        if (this.checkIsChosen(product.colors) && this.checkIsChosen(product.size)) {
          this.display = true
        } else {
          alert(`Vui lòng chọn màu và kích cỡ của sản phẩm ${product.name}`)
          this.display = false
          break;
        }
      }
    }


  };

  checkIsChosen(array: any): boolean {
    const isChosen = array.some((element: any) => element.isChosen);
    if (isChosen) {
      return true
    } else {
      return false
    }
  }

  handleClickColor(color: any, id: number) {
    const result = this.listCart.find((x: any) => x.id === id)
    color.isChosen = !color.isChosen
    if (result) {
      let isChosen = result.colors.find((x: any) => x.color === color.color)
      if (isChosen) {
        isChosen = { ...color }
      }
    }
  };
  handleClickSize(size: any, id: number) {
    const result = this.listCart.find((x: any) => x.id === id)
    size.isChosen = !size.isChosen

    if (result) {
      let isChosen = result.size.find((x: any) => x.size === size.size)
      if (isChosen) {
        isChosen = { ...size }
      }
    }
  }
}
