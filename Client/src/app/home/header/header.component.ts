import {Component, ViewEncapsulation} from '@angular/core';
import { ModalDismissReasons, NgbDatepickerModule, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './login/login.component';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(private modalService: NgbModal){}
  disabled = false;

  open() {
		this.modalService.open(LoginComponent, { ariaLabelledBy: 'modal-basic-title' }).result.then(
			(result) => {
				console.log(result)
			},
			(reason) => {
				console.log(`Dismissed ${this.getDismissReason(reason)}`);
			},
		);
	}
  private getDismissReason(reason: any): string {
		if (reason === ModalDismissReasons.ESC) {
			return 'by pressing ESC';
		} else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
			return 'by clicking on a backdrop';
		} else {
			return `with: ${reason}`;
		}
	}


}
