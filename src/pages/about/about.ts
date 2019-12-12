import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http } from '@angular/http';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  data: any
  constructor(
    public navCtrl: NavController,
    private httpService: Http
  ) {
    this.data = {
      text: ""
    };
  }

  getRequestContact() {
    this.httpService.get("./assets/2015-04-15-baidu-ife-1.md")
      .subscribe(res => {
        console.log(res);
        let temp: any;
        temp = res;
        this.data.text = temp._body;
      })
  }

}
