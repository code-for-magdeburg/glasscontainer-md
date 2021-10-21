import { Component } from "@angular/core";
declare module 'leaflet';
import * as L from 'leaflet';
import { MarkerService } from "src/app/services/marker.service";

const iconRetinaUrl = '../../assets/marker-icon-2x.png';
const iconUrl = '../../marker-icon.png';
const shadowUrl = '../../marker-shadow.png';
const iconDefault = L.icon({
  iconRetinaUrl,
  iconUrl,
  shadowUrl,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  tooltipAnchor: [16, -28],
});
L.Marker.prototype.options.icon = iconDefault;

@Component({
    selector: 'map-page',
    templateUrl: 'map.component.html',
    styleUrls: ['map.component.scss']
})
export class MapComponent{
    private map: any;

    constructor(private markerService: MarkerService) { }

    private initMap(): void {
        this.map = L.map('map', {
            center: [ 52.12773, 11.62916 ],
            zoom: 11
        });

        const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
            minZoom: 11,
            attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        });

        tiles.addTo(this.map);
    }

    ngAfterViewInit(): void {
      this.initMap();
      this.markerService.makeRecyclingMarkers(this.map);
    }
}