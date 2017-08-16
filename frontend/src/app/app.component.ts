import {Component, ViewContainerRef} from "@angular/core";
import {ToastsManager} from "ng2-toastr";
import {CacheService} from "ionic-cache/ionic-cache";

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',

})
export class AppComponent {
  constructor(public toastr: ToastsManager,
              vRef: ViewContainerRef,
              public cache: CacheService) {
    this.toastr.setRootViewContainerRef(vRef);
    this.cache.setDefaultTTL(60 * 60); //set default cache TTL for 1 hour
  }
}
