import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { SocialAuthService } from 'angularx-social-login';
import { UserService } from './../../services/user.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  email!: string;
  mdp1!: string;
  mdp2!: string;
  nom!: string;
  prenom!: string;
  pseudo!: string;
  error!: string;
  constructor(
    private authService: SocialAuthService,
    private router: Router,
    private userService: UserService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.userService.authState$.subscribe((authState) => {
      console.log(authState);
      if (authState) {
        this.router.navigateByUrl(
          this.route.snapshot.queryParams['returnUrl'] || '/profile'
        );
      } else {
        this.router.navigateByUrl('/register');
      }
    });
  }
  register(form: NgForm) {
    const email = this.email;
    const mdp1 = this.mdp1;
    const mdp2 = this.mdp2;
    const nom = this.nom;
    const prenom = this.prenom;
    const pseudo = this.pseudo;
    // console.log(email, mdp, pseudo, nom, prenom);
    if (form.invalid) {
      return;
    }

    form.reset();
    if (mdp1 === mdp2) {
      this.userService.registerUser(email, mdp1, pseudo, nom, prenom);
    } else {
      this.error = 'Les mots de passe ne sont pas identiques';
    }
  }
}
