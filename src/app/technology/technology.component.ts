import { Component } from '@angular/core';
import { ApplicationStateService } from '../application-state.service';

@Component({
  selector: 'app-technology',
  templateUrl: './technology.component.html',
  styleUrls: ['./technology.component.css']
})
export class TechnologyComponent {

  basic_principle : String = "Instead of conventional batteries, thermochemical heat batteries store heat instead of electricity. But what does this mean? Current heating systems are mainly based on burning fossil fuels such as gas. With the current energy crisis and the changing climate, a sustainable alternative is necessary. However, the sun emits heat every day, by capturing this heat, we can use this energy for heating purposes. A thermochemical heat battery acts as a storage. Allowing us to store the heat when its available and releasing its energy when there is a demand, bridging the gap between the supply and demand of heat."

  technological_details: String = "To be able to store heat, one needs two reversible chemical reactions for which several materials, so called thermochemical materials, are appropriate. An example is potassium carbonate, a type of salt that is currently one of the most promising candidates for thermochemical material. The chemical reactions used for charging and discharging the material are the dehydration and hydration reactions:"

  dehydration_reaction: String = "During the dehydration reaction, heat is applied externally to the system. Water molecules present in the crystal structure are released. This results in an endothermic reaction, absorbing the heat from its environment. These water molecules, at low temperatures, are then transported away from the thermochemical material. The dehydration reaction is also known as the charging of the heat battery, as heat is absorbed by the material."

  hydration_reaction: String = "During the hydration reaction, water vapor is lead through the porous structure of the thermochemical material. The thermochemical material absorbs the vapor and stores the water molecules in its crystal structure. Such a reaction is exothermic – the bonding of molecules releases energy – heating the area surrounding the material. This is also known as the discharging of the heat battery, as heat is released by the material."

  types_storage: String = "Thermal energy can be stored in many different ways. Here is an overview of several principles that can be used for thermal energy storage:"

  shs: String = "Heat is stored by heating a certain material and extracting this heat when necessary. A material that could be used for this is water. This type of heat storage is the most commercially available option. The disadvantage of this storage medium is that the storage capacity is limited by the specific heat capacity of the storage material. Apart from that the material cannot store the heat infinitely, it will lose its heat over time.\n\nExample: Imagine filling a bathtub with hot water. Over time, the water will cool down completely releasing its heat. But before it cools down completely, the hot water can still be used for heating purposes."

  lhs: String = "Latent heat storage is very similar to sensible heat storage, heat is stored in a material, but is associated with a phase transition. All material can be categorized into one of the three phases: gas, liquid or solid. A phase transition means that during a transition heat can be added or extracted from a material, allowing it to store heat. Therefore, these media are also known as PCMs, Phase Change Materials. PCMs can be materials such as salt, polymers, and paraffin waxes, … If the volume change during phase transitions is small, storage units can be more compact than SHS.\n\nExample: During off-peak periods, redundant electricity can be used to make ice from water. This can be stored and used as a cooling capacity during the afternoon when there is much demand for air conditioning."

  tcs: String = "Thermo-chemical heat storage (TCS) involves reversible exotherm/endotherm chemical reactions with thermo-chemical materials (TCM). Heat is applied to the material to decompose certain molecules. The reaction products are separated, known as the charging of the material. Combining the reaction products with the material will result in a release of thermal energy, also known as the discharging of the material. Since the heat is stored in the material molecular structure of the material, it will not dissipate the heat over time, unlike LHS and SHS.\n\n"

  future: String = "We believe that adapting heat batteries on a large scale in our society will massively change our future. As this technology can be widely applied in both industry as well as the built environment, it will allow many opportunities to make heating sustainable and circular.\n\nUnlike other heat storage technologies, TCS allows for much greater flexibility, since the thermo-chemical heat battery can be moved around easily without losing any of its capacity. In other words, the source and usage of heat do not necessarily need to be in the same place. Therefore, it is only a matter of connecting the sources and usage of thermal energy. This allows for endless possible applications. Identifying the heat sources helps us navigate, what the future could entail:"

  sources: String = "  - Waste heat from the food and beverage industry;\n   - Waste heat from data centers;\n   - Capture solar radiation on empty industrial roofs or individual households;\n   - Excess heat from spaces, to cool down the environment and avoid the usage of air-conditioning;\n   - Heat from geothermal sources;"

  uses: String = "  - Heating for domestic use;\n   - Heating for industrial applications;"

  advantages: String = "We already learned that thermochemical heat batteries store heat without any heat loss. But thermochemical heat batteries made from salt hydrates and water vapor offer many more benefits:\n   - Affordable, abundant material: salts such as potassium carbonate are cheap and can easily be obtained;\n   - Transportable: due to the high energy density of thermochemical materials and zero energy loss, transporting heat over a distance is now doable;\n   - Sustainable: salts such as potassium carbonate can easily be recycled;\n   - Safe: salts such as potassium carbonate are non-toxic and safe to use in your home."


  public isMobileResolution: boolean;

  constructor(private applicationStateService: ApplicationStateService) {
    this.isMobileResolution = 
    applicationStateService.getIsMobileResolution();
  }
}
