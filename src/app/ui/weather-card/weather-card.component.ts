import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { WeatherService } from '../../services/weather/weather.service';
import { UiService } from '../../services/ui/ui.service';
@Component({
  selector: 'app-weather-card',
  templateUrl: './weather-card.component.html',
  styleUrls: ['./weather-card.component.css']
})
export class WeatherCardComponent implements OnInit, OnDestroy {

  condition: string;
  currentTemp: number;
  maxTemp: number;
  minTemp: number;
  darkMode: boolean;

  constructor(
    public weather: WeatherService,
    public router: Router,
    public ui: UiService
  ) {
  }

  ngOnInit() {
    this.ui.darkModeState.subscribe((isDark) => {
      this.darkMode = isDark;
    });

    this.weather.getWeatherState('Yogyakarta')
    .subscribe((data: string) => {
      this.condition = data;
    });

    this.weather.getCurrentTemp('Yogyakarta')
    .subscribe((data: number) => {
      this.currentTemp = data;
    });

    this.weather.getMinTemp('Yogyakarta')
    .subscribe((data: number) => {
      this.minTemp = data;
    });

    this.weather.getMaxTemp('Yogyakarta')
    .subscribe((data: number) => {
      this.maxTemp = data;
    });
  }

  ngOnDestroy() {
  }
    openDetails() {
      this.router.navigateByUrl('/details/yogyakarta');
    }

}
