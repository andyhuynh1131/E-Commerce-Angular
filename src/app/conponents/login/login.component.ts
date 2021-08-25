import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AccCountService } from 'src/app/service/AccCount.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: string = ''
  password: string = ''
  listAcc: any = []
  constructor(private ACservice: AccCountService, private router: Router) {

  }

  ngOnInit() {
    window.scrollTo(0, 0)
    this.getACsbyService();
  }
  getACsbyService(): void {
    this.ACservice.getAcs().subscribe(x => this.listAcc = x)
  };

  onSubmit() {
    for (let acc of this.listAcc) {
      if (this.username === acc.username && this.password === acc.password) {

        this.ACservice.login(this.username, this.password);
        alert('Đăng nhập thành công');
        this.router.navigate(['/']);
      } else {
        alert('Sai tài khoản hoặc mật khẩu')
      }
    }
  };

}
