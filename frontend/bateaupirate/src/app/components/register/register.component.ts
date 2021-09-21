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
  photoUrl: string =
    'https://www.seekpng.com/png/full/356-3562377_personal-user.png';
  error!: string;
  success!: string;
  constructor(
    private authService: SocialAuthService,
    private router: Router,
    private userService: UserService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.userService.authState$.subscribe(
      (authState) => {
        console.log(authState);
        if (authState) {
          this.router.navigateByUrl(
            this.route.snapshot.queryParams['returnUrl'] || '/profile'
          );
        } else {
          this.router.navigateByUrl('/register');
        }
      },
      (err) => {
        console.log(err);
        return (this.error = err);
      }
    );
  }
  register(form: NgForm) {
    // const email = this.email;
    // const mdp1 = this.mdp1;
    // const mdp2 = this.mdp2;
    // const nom = this.nom;
    // const prenom = this.prenom;
    // const pseudo = this.pseudo;
    // const photoUrl = this.photoUrl;
    if (form.invalid) {
      return;
    }
    if (this.mdp1 === this.mdp2) {
      this.userService
        .registerUser(
          this.email,
          this.mdp1,
          this.pseudo,
          this.nom,
          this.prenom,
          this.photoUrl
        )
        .subscribe(
          (data) => {
            console.log(data);
            this.error = '';
            this.success = data.message;
            form.reset();
          },
          (error) => {
            console.log(error.error.errors[0].msg);
            this.error = error.error.errors[0].msg;
          }
        );
    } else {
      this.error = "Passwords doesn't match";
    }
  }
}
