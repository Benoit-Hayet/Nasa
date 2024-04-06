import { Component, OnInit } from '@angular/core';
import { NasaService } from './nasa.service';
import { Apod } from './models/apod.model';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {

  apod: Apod = {
    title: '',
    url: '',
  };

  constructor(private nasaservice: NasaService) {}

  ngOnInit(): void {
    this.nasaservice.getImageOfTheDay()
      .subscribe((response) => {
        this.apod = response.url;
      });
  }
}
