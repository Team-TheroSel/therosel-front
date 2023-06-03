import { Component } from '@angular/core';
import { ApplicationStateService } from '../application-state.service';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.css']
})
export class AboutusComponent {

  public isMobileResolution: boolean;

  line1: String = "In September 2021, as part of the Energy Transition track of the Honors Academy, we formed a team dedicated to the heat transition. As honors bachelor students, we wanted to make heating more sustainable and have an impact on the energy transition. By sharing our common ambition, we created the team TheroSel, focusing on storing heat in a thermochemical material. A heat battery is a material that stores thermal energy. This would allow us to store heat when in abundance and retrieve heat when necessary. Making us less dependent on unsustainable heat sources such as gas and making it more efficient as storing it in water as it can store heat for longer. The team consists of five members, from three different backgrounds. This diversity allows us to combine our different knowledge and skill sets into the project.";

  line2: String = "Heat batteries are becoming a reality and are needed for the energy transition. To create this transition we need people that want to adapt. In the early stages of the team, we are focused on presenting this technology to the public. The public needs to be aware of this technology, its (dis)advantages, costs and applicability. That is where we come in. The purpose of this team is to provide the public with the right knowledge and a tool to check the applicability of this technology in everyone's personal situation. Hopefully you will stay as excited as we are about this technology!";

  info_raoul: String = "Third year Honors Bachelor student Applied Physics TU/e";

  text_raoul: String = "'I hope to work towards a sustainable future in which there are no more worries for a loss of quality of life for the next generation.'"

  info_vicky: String = "Third year Honors Bachelor student Mechanical Engineering TU/e";

  text_vicky: String = "'I work towards creating a sustainable future, where renewable energy powers our world, ecosystems thrive, and every individual embraces eco-conscious choices for the well-being of our planet.'";

  info_nipun: String = "Third year Honors Bachelor student Automotive Technology TU/e"

  text_nipun: String = "'I dream about a sustainable way of heating homes with heat batteries, storing excess thermal energy and utilizing it when needed, reducing reliance on fossil fuels and promoting energy efficiency for a greener future.'";

  info_jasmine: String = "Third year Honors Bachelor student Applied Physics TU/e";

  text_jasmine: String = "'I want to live in a world where sustainable practices are the norm, where clean energy powers our lives, and harmony with nature shapes our every decision, ensuring a thriving and resilient future for all.'";

  info_lars: String = "Third year Honors Bachelor student Applied Physics TU/e";

  text_lars: String = "'I want to live in a world where sustainability is at the heart of everything we do, and our actions reflect our commitment to creating a greener, healthier, and more equitable future for all.'";

  contactline: String = "Feel free to contact us via any of the means below.";

  constructor(private applicationStateService: ApplicationStateService) {
    this.isMobileResolution = 
    applicationStateService.getIsMobileResolution();
  }

}
