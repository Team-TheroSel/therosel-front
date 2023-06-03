import { Component } from '@angular/core';
import { ApplicationStateService } from '../application-state.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  news1 : String = "Team Therosel is proud to announce the launch of its website as of today! Here you can find an overview of the technology, news on thermochemical energy storage and our web-tool to experience the power of heat batteries for within your own home. If any questions on the topic arise, feel free to contact us via the contact page.";

  news_affordable_heat_pumps : String = "Octopus Energy is revolutionizing the heating industry in Britain with their new heat pump product that costs as little as £2,500, including government grants. This is competitive with the cost of a typical gas boiler and much lower than the current cost of installing a heat pump which can reach up to £13,000. This new product has the potential to drive the transition towards a more sustainable energy future as heat pumps capture the warmth from the outside to heat homes and are more energy efficient with a longer lifespan. The slow adoption of heat pumps has been due to their high cost, but this new offering from Octopus Energy and British Gas' recent announcement of installing heat pumps for as low as £2,999 may drive more installations. The government has also invested over £400 million in energy-saving upgrades for councils, including heat pumps, which could save households on average £200 per year on energy bills."

  news_future_building_technology : String = "As we move towards 2023, building technology is rapidly evolving to make our buildings more sustainable, safer and occupant-focused. Honeywell, a leading provider of building technology, has recently released predictions for emerging trends that will shape the future of building operations. \n\nThe top trends include: \n1. Acceleration of the 'Electrification of everything' movement \n2. Cybersecurity embedded and integrated into digital innovation \n3. Dynamically responsive buildings enabled by AI/ML algorithms \n4. Cities building energy resilience into operational plans, including the use of heat batteries and microgrids \n\nHeat batteries are an important part of building energy resilience as they provide a way to store excess thermal energy for later use. This helps to ensure that essential services can continue to be provided in the wake of power outages or extreme weather events. They also play a role in the acceleration of the 'electrify everything' movement by providing a way to store and use clean energy. \n\nThese trends embody a common theme: technology is becoming increasingly integral to every facet of building operations. Whether it’s helping to reduce carbon impact, defend against cyberattacks, optimize energy performance and occupant well-being, or make communities more resilient in times of crisis, it can provide a competitive business advantage as well as help reduce operating expenses."

  news_lappeenranta_university : String = "Researchers from the Lappeenranta University of Technology have found that solar PV technology could turn Europe into a 'solar-to-X' economy, achieving 100% renewable energy by 2040. The study, published in Progress in Photovoltaics, used the LUT Energy System Transition Model to consider the role of solar in the European energy transition within a global context and found that solar PV could provide 54-56% of total primary energy demand and 61-63% of entire electricity generation by 2050. The success of the proposed scenarios will depend on the solid interplay between solar, wind, battery storage, electrolyzers, and heat batteries."

  news_rondo_energy : String = "Rondo Energy has developed the Rondo Heat Battery (RHB), an energy storage system that dispatches heat and electricity for industrial applications. The battery stores intermittent generation from renewable energy sources such as solar and wind and can hold stored heat energy at high temperatures for long periods of time. It supports manufacturing processes such as steel, cement, and chemical manufacturing, as well as low-temperature food processing. The RHB can be integrated into existing process heating equipment and is expected to significantly reduce emissions and operating costs for industrial facilities. It has been backed by Bill Gates and has raised $25.1 million in funding from Breakthrough and Energy Impact Partners."

  news_sand_battery : String = "Sand batteries, or thermal energy storage systems that use sand as a heat storage medium, have the potential to play a role in the transition to a more sustainable and efficient energy system. Sand batteries can be used to store excess heat generated by renewable energy sources, such as solar panels or wind turbines, or by industrial processes. This stored heat can then heat buildings or provide heat for industrial processes, reducing the need for fossil fuels and improving energy efficiency.\n\nSand batteries are relatively simple and inexpensive to build, making them an attractive option for many applications. They can be used in a variety of settings, including residential, commercial, and industrial, and they have the potential to reduce energy costs and greenhouse gas emissions significantly. With the success of Polar night energy's 20 GWh sand battery in Sweden and rapid investment in this implementation, one can now actually create their very own heat battery to understand the inner workings and better prepare for future technologies."

  public isMobileResolution: boolean;

  constructor(private applicationStateService: ApplicationStateService) {
    this.isMobileResolution = 
    applicationStateService.getIsMobileResolution();
    
  }

  scrollDown(): void {
    document.getElementById("page-1")?.scrollIntoView({behavior:"smooth"})
  }

  scrollDownMobile(): void {
    document.getElementById("page-1-mobile")?.scrollIntoView({behavior:"smooth"})
  }

}
