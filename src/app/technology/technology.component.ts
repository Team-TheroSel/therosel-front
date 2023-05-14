import { Component } from '@angular/core';
import { ApplicationStateService } from '../application-state.service';

@Component({
  selector: 'app-technology',
  templateUrl: './technology.component.html',
  styleUrls: ['./technology.component.css']
})
export class TechnologyComponent {

  basic_principle : String = "Instead of conventional batteries, thermochemical heat batteries store heat instead of electricity. But what does this mean? Current heating systems are mainly based on burning fossil fuels such as gas. With the current energy crisis and the changing climate, a sustainable alternative is necessary. However, the sun emits heat every day, by capturing this heat, we can use this energy for heating purposes. A thermochemical heat battery acts as a storage. Allowing us to store the heat when its available and releasing its energy when there is a demand, bridging the gap between the supply and demand of heat."

  technological_details: String = "To be able to store heat, one needs two reversible chemical reactions. Several materials are appropriate, an example is potassium carbonate (K2CO3), also known as a type of salt. The thermochemical material has two main chemical reactions to store and release thermal energy:"

  dehydration_reaction: String = "During the dehydration reaction, heat is applied externally to the system. Water molecules present in the molecular structure are released. This results in an endothermic reaction, absorbing the heat from its environment. These water molecules, at low temperatures, are then transported away from the thermochemical material. The dehydration reaction is also known as the charging of the heat battery, as heat is absorbed by the material."

  hydration_reaction: String = "During the hydration reaction, water vapor is lead through the porous structure of the thermochemical material. The thermochemical material absorbs the vapor and stores the water molecules in its molecular structure. Such a reaction is exothermic – the bonding of molecules releases energy - heating the area surrounding the material. This is also known as the discharging of the heat battery, as heat is released by the material."

  public isMobileResolution: boolean;

  constructor(private applicationStateService: ApplicationStateService) {
    this.isMobileResolution = 
    applicationStateService.getIsMobileResolution();
  }
}
