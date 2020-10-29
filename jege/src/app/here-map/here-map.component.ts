import { Component, OnInit, OnChanges, ViewChild, ElementRef, Input } from '@angular/core';
declare var H: any;

@Component({
    selector: 'here-map',
    templateUrl: './here-map.component.html',
    styleUrls: ['./here-map.component.scss']
})
export class HereMapComponent implements OnInit {

    @ViewChild("map")
    public mapElement: ElementRef;

    @Input()
    public appId: any;

    @Input()
    public appCode: any;

    @Input()
    public lat: any;

    @Input()
    public lng: any;
 
    private platform: any;
    private map: any;
    private router: any;

    public query: string;  
    private search: any;  
    private ui: any;  

    public constructor() {  this.query = "";  }

    public ngOnInit() {
        this.platform = new H.service.Platform({
            "app_id": this.appId,
            "app_code": this.appCode
        });
        
        this.router = this.platform.getRoutingService();
       
    }

     public ngAfterViewInit() {
        setTimeout(() => {
            let defaultLayers = this.platform.createDefaultLayers();
            this.map = new H.Map(
                this.mapElement.nativeElement,
                defaultLayers.normal.map,
                {
                    zoom: 12,
                    center: { lat: this.lat, lng: this.lng }
                }
            );
            let behavior = new H.mapevents.Behavior(new H.mapevents.MapEvents(this.map));
    
                // Create a marker using the previously instantiated icon:
                var svgMarkup = '<svg width="40" height="40" ' +
  'xmlns="http://www.w3.org/2000/svg">' +
  '<rect stroke="white" x="12" y="-10" width="20" ' +
  'height="20" fill="#135A30" transform="rotate(45)"/><text x="15" y="21" font-size="12pt"  ' +
  'font-family="Arial" font-weight="bold" text-anchor="middle" ' +
  'fill="white">J</text></svg>';
                var icon = new H.map.Icon(svgMarkup);
            var Foiremarker = new H.map.Marker({ lat: 14.7423499, lng: -17.4711872 }, { icon: icon });
                // Add the marker to the map:
            this.map.addObject(Foiremarker);


            function addMarkerToGroup(group, coordinate, html) {
                var marker = new H.map.Marker(coordinate);
                // add custom data to the marker
                marker.setData(html);
                group.addObject(marker);
              }  


            //Relais jege Sacre coeur
            var Sacmarker = new H.map.Marker({ lat: 14.7228717, lng: -17.4794679 }, { icon: icon });
            this.map.addObject(Sacmarker);
            // fin

            //Relais jege Mermoz
            var Mozmarker = new H.map.Marker({ lat: 14.7114717, lng: -17.4801882}, { icon: icon });
            this.map.addObject(Mozmarker);
            // fin

            //Relais jege Dieuppeul
            var Dieupmarker = new H.map.Marker({ lat: 14.7180672, lng: -17.4581086}, { icon: icon });
            this.map.addObject(Dieupmarker);
            // fin

            //Relais jege Keur Massar
            
            var Keurmarker = new H.map.Marker({ lat: 14.786364, lng: -17.311941 }, { icon: icon });
            this.map.addObject(Keurmarker);
            // fin

            //Relais jege Golf
            var Golfmarker = new H.map.Marker({ lat: 14.775334, lng: -17.409013 }, { icon: icon });
            this.map.addObject(Golfmarker);
            // fin
        
        
        }, 100);

    }



     public isoline() { } 

 

}