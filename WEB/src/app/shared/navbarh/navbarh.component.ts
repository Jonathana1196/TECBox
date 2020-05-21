import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/services/auth.service';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-navbarh',
  templateUrl: './navbarh.component.html',
  styleUrls: ['./navbarh.component.css'],
  providers: [AuthService]
})
export class NavbarhComponent {

    // public isLogged = false;
  // public user: any;
  public user$: Observable<any> = this.authSvc.afAuth.user;

  constructor(public authSvc: AuthService, private router: Router) { }

// async  ngOnInit() {
//     this.user = await this.authSvc.getCurrentUser();
//     if (this.user) {
//       this.isLogged = true;
//       // console.log('user →', user);
//     }
//   }

async onLogout() {
    try {
      await this.authSvc.logout();
      this.router.navigate(['/Home']);
    } catch (error) {
      console.log("Error aqui asifdhsalkdjvfnas;dhvgsaiufgbaso;fihapsoufghsaifhsuigfsofb");
      console.log(error);
    }
  }

}
