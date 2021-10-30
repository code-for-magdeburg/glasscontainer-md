import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
declare module 'leaflet';
import * as L from 'leaflet';
import { PopUpService } from './popup.service';

@Injectable({
  providedIn: 'root',
})
export class MarkerService {
  capitals: string = '../assets/container.geojson';
  private map: any;

  constructor(private http: HttpClient, private popupService: PopUpService) {}

  makeRecyclingMarkers(map: any): void {
    this.http.get(this.capitals).subscribe((res: any) => {
      for (const c of res.features) {
        const lon = c.geometry.coordinates[0];
        const lat = c.geometry.coordinates[1];
        const marker = L.marker([lat, lon]);

        marker.bindPopup(this.popupService.makeRecyclingPopup(c.properties));
        marker.bindTooltip("Straße: ").openTooltip();
        marker.addTo(map);
      }
      console.log(res.features.length);
    });
  }
}
