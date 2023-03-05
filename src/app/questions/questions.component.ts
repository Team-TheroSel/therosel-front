import { Component } from '@angular/core';
import { ApplicationStateService } from '../application-state.service';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent {

  info: String = "Fill out the following properties of your home to get the most accurate estimate of what thermochemical energy storage could offer you. If any of the options does not suit your house, pick the most suitable option.";
  question1: String = "1. What is the total area of your living space?";
  question2: String = "2. What type of house do you live in?";
  question3: String = "3. What is the energy label of your house?";
  question4: String = "4. How many people live in your house?";
  question5: String = "6. Which system do you currently use to heat the majority of your house?";

  public isMobileResolution: boolean;

  constructor(private applicationStateService: ApplicationStateService) {
    this.isMobileResolution = 
    applicationStateService.getIsMobileResolution();
  }
}
