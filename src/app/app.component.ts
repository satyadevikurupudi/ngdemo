import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'demo';
  image=[
    {
      "src":"https://images.pexels.com/photos/28651765/pexels-photo-28651765/free-photo-of-serene-water-lily-bloom-on-peaceful-lake.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
      "alt":"imgage1",
      "title":"",
      "description":"",
    },
    {
      "src":"https://images.pexels.com/photos/20218579/pexels-photo-20218579/free-photo-of-a-woman-pouring-coffee-from-a-moka-pot-into-a-cup.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
      "alt":"imgage1",
      "title":"",
      "description":"",
    },
  ]
}
