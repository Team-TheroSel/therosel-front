import { Component } from '@angular/core';
import { ApplicationStateService } from '../application-state.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {


  info_1: String = "This page covers some of the most commonly asked questions in the field of heat batteries and thermochemical heat storage technologies. For further questions, feel free to email us or, better yet, engage on our"
  
  info_2: String = "to receive insights and answers from heat battery field experts!"

  question_1: String = "Heat batteries are thermochemical storage systems which store thermal energy in phase change materials (PCMs). These devices are effective and under research, as they can store 2-5 times more thermal energy per unit volume than water."

  question_2: String = "Heat batteries store thermal energy through materials undergoing a phase change, mostly solid to liquid. When the material changes phase, it absorbs a large quantity of energy, which can be released later by reversing the phase change. This process can occur around 500-1000 times before the storage capability of the battery degrades."

  question_3: String = "Heat batteries can improve the efficiency of existing systems with heal losses, achieving up to 90% efficiency, compared to traditional systems operating at 50-70% efficiency. Like traditional batteries, they also allow energy storage during off-peak times, potentially reducing energy costs by up to 30%."

  question_4: String = "Indeed, heat batteries have been designed with renewable energy systems in mind. For example, a solar thermal collector could charge a heat battery during the day, and the stored heat can be used at night or during unfavourable weather"

  question_5: String = "Yes, by increasing the round-trip efficiency of systems and enabling the use of renewable energy sources, heat batteries have the potential to curb CO2 emissions significantly."

  question_6: String = "Heat batteries can store thermal energy for extended durations with minimal loss due to the high thermal inertia of phase change materials. Depending on the chemistry, they can retain over 90% of their stored heat for over a month."

  question_7: String = "The cost of heat batteries varies significantly based on capacity and technology, ranging from a few hundred to several thousand dollars. As it currently stands, heat batteries have mainly been applied in industrial applications. Thus, there needs to be more information to approximate the prices of consumer heat battery solutions."

  question_8: String = "Heat batteries can be integrated with various heating systems, including gas boilers, heat pumps, and solar collector systems."
  
  question_9: String = "Heat batteries require minimal maintenance due to their solid-state design meaning their lack of moving parts makes it such that there are fewer chances of mechanical failures."

  question_10: String = "With the proper care and maintenance, heat batteries should have a 15-20 years lifespan. However, over time, the storage capacity will gradually degrade, similar to electric batteries, due to the physical and chemical changes in the PCM."




  public isMobileResolution: boolean;

  constructor(private applicationStateService: ApplicationStateService) {
    this.isMobileResolution = applicationStateService.getIsMobileResolution();
  }

}
