import { Component } from '@angular/core';
import { ApplicationStateService } from '../application-state.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  news1 : String = "Team Therosel is proud to announce the launch of its website as of today! Here you can find an overview of the technology, news on thermochemical energy storage and our web-tool to experience the power of heat batteries for within your own home. If any questions on the topic arise, feel free to contact us via the contact page.";

  public isMobileResolution: boolean;

  constructor(private applicationStateService: ApplicationStateService) {
    this.isMobileResolution = 
    applicationStateService.getIsMobileResolution();
  }

}
