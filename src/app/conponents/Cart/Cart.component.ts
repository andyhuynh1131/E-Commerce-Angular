import { Component, OnInit } from '@angular/core';
import { CartService } from '../../service/Cart.service';



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
    this.cartService.getProducts().subscribe((listProduct: any) => {
      listProduct.map((product: any) => {
        if (!product.isOld) {
          product = this.ChangeObj(product)
        }
      })
      this.listCart = listProduct

      this.updateSum();
    })
  }

  updateSum() {
    this.sumprice = this.listCart.reduce((acc: any, curr: any) => acc + curr.qty * curr.price, 0)
    this.sumtotal = this.listCart.reduce((acc: any, curr: any) => acc + curr.qty, 0)
  };

  minus(id: number) {
    const result = this.listCart.find((product: any) => product.id === id)
    if (result.qty > 1) {
      result.qty = result.qty - 1
      this.updateSum()
    } else {
      this.cartService.remove(id);
      this.updateSum();
    }
  };

  plus(id: number) {
    const result = this.listCart.find((product: any) => product.id === id)
    result.qty = result.qty + 1
    this.updateSum()

  };

  changeQty(qty: string, id: number) {
    if (Number(qty) > 0) {
      const result = this.listCart.find((product: any) => product.id === id)
      if (result) {
        result.qty = qty
      }
    } else {
      const result = this.listCart.find((product: any) => product.id === id)
      if (result) {
        result.qty = 1
      }
    }

  };
  ChangeObj(product: any): any {
    product.colors = product.colors.map((name: any) => ({ color: name, isChosen: false }))
    product.size = product.size.map((name: any) => ({ size: name, isChosen: false }))
    product.isOld = true
    return product
  }
  handelChange(id: number) {
    const result = this.listCart.find((product: any) => product.id === id)
    if (result.isChecked) {
      this.listPay.push(result)
    } else {
      const index = this.listPay.findIndex((product: any) => product.id === result.id)
      this.listPay.splice(index, 1)
    }
  };

  showDialog() {
    if (this.listPay.length === 0) {
      alert('Vui l??ng ch???n s???n ph???m ????? thanh to??n')
    } else {
      for (let product of this.listPay) {
        if (this.checkIsChosen(product.colors) && this.checkIsChosen(product.size)) {
          this.display = true
        } else {
          alert(`Vui l??ng ch???n m??u v?? k??ch c??? c???a s???n ph???m ${product.name}`)
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
    const result = this.listCart.find((product: any) => product.id === id)
    color.isChosen = !color.isChosen
    if (result) {
      let isChosen = result.colors.find((product: any) => product.color === color.color)
      if (isChosen) {
        isChosen = { ...color }
      }
    }
  };
  handleClickSize(size: any, id: number) {
    const result = this.listCart.find((product: any) => product.id === id)
    size.isChosen = !size.isChosen

    if (result) {
      let isChosen = result.size.find((product: any) => product.size === size.size)
      if (isChosen) {
        isChosen = { ...size }
      }
    }
  }
}
