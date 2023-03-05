import { Component, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import { ApplicationStateService } from '../application-state.service';

@Component({
  selector: 'app-navigationbar',
  templateUrl: './navigationbar.component.html',
  styleUrls: ['./navigationbar.component.css']
})
export class NavigationbarComponent {

  public isMobileResolution: boolean;
  isShowing: boolean = false;

  @ViewChild('toggleMenu') toggleMenu: ElementRef;
  @ViewChild('dropbar') dropbar: ElementRef;

  constructor(private applicationStateService: ApplicationStateService, private renderer: Renderer2) {
    this.isMobileResolution = 
    applicationStateService.getIsMobileResolution();

    this.renderer.listen('window', 'click',(e:Event)=>{
      if(e.target !== this.toggleMenu.nativeElement && e.target !== this.dropbar.nativeElement){
        this.isShowing=false;
      }
    });

  }

  toggleNavbar() {
    this.isShowing = !this.isShowing;
  }
}
