import { Component } from '@angular/core';
import { ApplicationStateService } from '../application-state.service';

@Component({
  selector: 'app-technology',
  templateUrl: './technology.component.html',
  styleUrls: ['./technology.component.css']
})
export class TechnologyComponent {

  info_line1 : String = "Heat batteries using thermochemical energy storage is a novel method of storing heat that aims to reduce heating energy usage. Heat generated through solar collectors or as a byproduct of industrial processes can be captured and stored for heating your home or office building. Unlike heat storage by heating a large water reservoir, thermochemical energy storage stores heat in the form of chemical bonds between water molecules and a salt crystal. This salt crystal consists of potassium carbonate and is both safe and environmentally-friendly. The process of charging a heat battery "

  public isMobileResolution: boolean;

  constructor(private applicationStateService: ApplicationStateService) {
    this.isMobileResolution = 
    applicationStateService.getIsMobileResolution();
  }
}
