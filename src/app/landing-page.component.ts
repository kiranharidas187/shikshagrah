import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss'
})
export class LandingPageComponent  implements OnInit{

  projectId: string | null = null;
  action: string | null = null;
  validActions: string[] = ['create-observation', 'take-survey', 'project'];

  constructor(private route: ActivatedRoute,  private router: Router) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.action = params['action']; 
      this.projectId = params['id']; 

      if (this.action && !this.validActions.includes(this.action as string)) {
        this.router.navigate(['/404']); 
      }
    });
  }

  // handleAction() {
  //   switch (this.action) {
  //     case 'create-observation':
  //       this.onCreateObservation();
  //       break;
  //     case 'take-survey':
  //       this.onTakeSurvey();
  //       break;
  //     case 'project':
  //       this.onStartProject();
  //       break;
  //     default:
  //       console.error('Invalid action');
  //   }
  // }

  onInstallClick() {
     window.open('https://play.google.com/store/apps/details?id=org.shikshagraha.app&hl=en_IN', '_blank');
  }

  
  getDeepLink(event:any): string {
    event.preventDefault();

    // Build the deep link dynamically based on the current action and projectId
    if (this.action && this.projectId) {
      return `https://shikshagraha.org/manage-learn/${this.action}/${this.projectId}`;
    }
    return '';
  }

  // onClickAction() {
  //   const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
  //   const deepLink = this.getDeepLink(); 

  //   if (deepLink) {
  //     if (isMobile) {
  //       if (/Android/i.test(navigator.userAgent)) {
  //         // Android deep link
  //         window.location.href = deepLink;
  //         setTimeout(() => {
  //           window.location.href = 'https://play.google.com/store/apps/details?id=org.shikshagraha.app&hl=en_IN';
  //         }, 2000);
  //       } else if (/iPhone|iPad|iPod/i.test(navigator.userAgent)) {
  //         // iOS deep link
  //         window.location.href = deepLink;
  //         setTimeout(() => {
  //           window.location.href = 'https://apps.apple.com/us/app/shikshagraha/id123456789';
  //         }, 1000);
  //       }
  //     } else {
  //       // Desktop fallback
  //       alert("Please download the Shikshagraha app on your mobile device.");
  //       window.open('https://play.google.com/store/apps/details?id=org.shikshagraha.app&hl=en_IN', '_blank');
  //     }
  //   } else {
  //     console.error('Deep link could not be constructed.');
  //   }
  // }

  // onStartProject(){
  //   this.onClickAction()
  // }

  // onCreateObservation() {
  //   this.onClickAction()
  // }

  // onTakeSurvey() {
  //   this.onClickAction()
  // }

}
