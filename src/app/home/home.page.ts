import { Component } from '@angular/core';
import Braintree, { DropInOptions } from 'cordova-plugin-braintree-sdk';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  private BRAINTREE_TOKEN = 'sandbox_7bvyvbqr_wfy3fnnvkh3vhkyq';

  constructor() { }
  createDropIn() {

    const paymentOptions: DropInOptions = {
      token: this.BRAINTREE_TOKEN
    }
    Braintree.presentDropInPaymentUI(
     paymentOptions,
     function (success) {
      console.log('respuesta correcta',JSON.stringify(success));
    }, function (error) {
      console.error('respuesta erronea',error);
    });
  }
}
