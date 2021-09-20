import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AccCountService } from 'src/app/service/ac-count.service';

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
    this.ACservice.getAcs().subscribe(listAccByService => this.listAcc = listAccByService)
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
