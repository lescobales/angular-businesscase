import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from 'src/app/service/user/user.service';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.scss']
})
export class InscriptionComponent {
  constructor(private userService: UserService){}

  onSubmitInscriptionForm(inscriptionForm: NgForm) {
    this.userService.addUser(inscriptionForm.value)
  }
}
