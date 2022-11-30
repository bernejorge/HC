import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-registrarse-modal',
  templateUrl: './registrarse-modal.component.html',
  styleUrls: ['./registrarse-modal.component.css']
})
export class RegistrarseModalComponent implements OnInit {

  resgistrationForm = this.fb.group({
		docnumber: [''],
		nac: [''],
	  });
  constructor(public activeModal: NgbActiveModal, private fb: FormBuilder) { }

  ngOnInit() {
  }

}
