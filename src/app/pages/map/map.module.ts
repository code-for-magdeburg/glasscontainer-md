import { NgModule } from "@angular/core";
import { MapComponent } from "./map.component";
import { MarkerService } from '../../services/marker.service';
import { PopUpService } from '../../services/popup.service';
import { BrowserModule } from "@angular/platform-browser";

@NgModule({
  declarations: [MapComponent],
  imports: [
    BrowserModule
  ],
  exports: [MapComponent],
  providers: [
    MarkerService,
    PopUpService
  ]
})
export class MapModule {}