import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { NotificationsComponent } from 'src/app/notifications/notifications.component';

@Component({
  selector: 'app-zonastatus',
  templateUrl: './zonastatus.page.html',
  styleUrls: ['./zonastatus.page.scss'],
})
  // eslint-disable-next-line @typescript-eslint/naming-convention
  export class zonastatusPage {
    constructor(public popoverCtrl: PopoverController) { }
    async notifications(ev: any) {
      const popover = await this.popoverCtrl.create({
          component: NotificationsComponent,
          event: ev,
          animated: true,
          showBackdrop: true
      });
      return await popover.present();
    }
  }
