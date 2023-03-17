import { Component, ElementRef, Input, TemplateRef, ViewChild, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalDismissReasons, NgbDatepickerModule, NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { AccountService } from 'src/app/Shared/Services/account.service';
import { LoginComponent } from './login/login.component';


@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.css']
})
export class HeaderComponent {
	@ViewChild('userpage') userpage: ElementRef
	salaahDo: boolean;
	currentUser: string;
	currentUsername: string;
	constructor(
		private modalService: NgbModal, 
		private router: Router, 
		private accountService: AccountService,
		private activatedRoute: ActivatedRoute
		) {
		// const temp = JSON.parse({localStorage.getItem('user')} || '{}');
		this.currentUser = localStorage.getItem("user")!;
		this.currentUsername = localStorage.getItem("username")!;
		// if (temp === null){
		// 	this.currentUser = '';
		// }
		// else{
		// 	this.currentUser = temp;
		// }
		// console.log(this.currentUser, "this is the current")
	}
	ngOnInit(): void {
		if (window.location.href.toString().includes("salaahDo")){
			this.salaahDo = true;
		}
		else{
			this.salaahDo = false;
		}
		console.log(this.activatedRoute);
	}
	disabled = false;
	loginPopup: any;
	open() {
		this.loginPopup = this.modalService.open(LoginComponent, { ariaLabelledBy: 'modal-basic-title' }).result.then(
			(result) => {
				console.log("opened the login popup" + result)
			},
			(reason) => {
				console.log('Dismissed the login popup');
			},
		);
	}

	openUser() {
		// this.router.navigate(['/user/']);
		
			this.modalService.open(this.userpage, { ariaLabelledBy: 'modal-basic-title' , modalDialogClass: 'custom-class' }).result.then(
				(result) => {
					console.log("restult")
				},)

	}

	logout() {
		this.accountService.logout();
		this.modalService.dismissAll();
		location.reload();
	}

}
