import { Component, OnDestroy, OnInit } from '@angular/core';




@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit, OnDestroy {
  currentSlide = 0
  interval: any
  listSlider: any = [
    {
      id: 0,
      title: "Polo nữ tô dáng dịu dàng dễ thương",
      desription: ' Polo nữ dáng suông tạo nên vẻ đẹp diệu dàng của người con gái việt ',
      img: '../../../assets/images/slide_1.05395af1.png',
      color: '#4267b2'
    },
    {
      id: 1,
      title: "Polo nữ tô dáng sang trọng quý phái",
      desription: ' Polo nữ dáng suông tạo nên vẻ đẹp sang trọng quý phái người con gái việt hiện đại ',
      img: '../../../assets/images/slide_2.a5d8646f.png',
      color: 'pink'
    },
    {
      id: 2,
      title: "Polo nữ tô dáng cá tính sôi động",
      desription: ' Polo nữ dáng suông tạo nên vẻ đẹp cá tính sôi động của người con gái ',
      img: '../../../assets/images/slide_3.6e2ad4f2.png',
      color: '#d3b428'
    },
  ]
  constructor() {

  }

  ngOnInit() {
    this.interval = setInterval(() => {
      this.nextSlide()
    }, 5000)
  }

  nextSlide() {
    this.currentSlide = this.currentSlide + 1 === this.listSlider.length ? 0 : this.currentSlide + 1
  };

  prevSlide() {
    this.currentSlide = this.currentSlide - 1 < 0 ? this.listSlider.length - 1 : this.currentSlide - 1
  };

  prev() {
    this.prevSlide()
  };

  next() {
    this.nextSlide()
  };

  ngOnDestroy(): void {
    clearInterval(this.interval)
  };
}
