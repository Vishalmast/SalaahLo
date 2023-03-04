import { Component, OnInit } from '@angular/core';
// import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { first } from 'rxjs/operators';
import { AccountService } from 'src/app/Shared/Services/account.service';
import { AlertService } from 'src/app/Shared/Services/alert.service';
import { Router } from '@angular/router';
import { User } from 'src/app/Shared/Models';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
    form!: FormGroup;
    registerForm!: FormGroup;
    loading = false;
    registerLoading = false;
    submitted = false;
    registerSubmitted = false;
    register = false;

    constructor(
        private formBuilder: FormBuilder,
        // private route: ActivatedRoute,
        private router: Router,
        private accountService: AccountService,
        private alertService: AlertService,
        private modalService: NgbModal
    ) { }

    ngOnInit() {
        this.form = this.formBuilder.group({
            username: ['', Validators.required],
            password: ['', Validators.required]
        });
        this.registerForm = this.formBuilder.group({
            username: ['', Validators.required],
            firstname: ['', Validators.required],
            lastname: ['', Validators.required],
            email: ['', Validators.required],
            phone: ['', Validators.required],
            password: ['', Validators.required]
        });

    }

    signup(){
        this.register = !this.register;
    }

    close(){
        this.modalService.dismissAll();
    }

    // convenience getter for easy access to form fields
    get f() { return this.form.controls; }
    
    get registrationDetails() { return this.registerForm.controls; }
    
    
    registerSubmit(){
        this.registerSubmitted = true;
        if (this.registerForm.invalid) {
            return;
        }
        this.registerLoading = true;
        var data: User = {
            username: this.registrationDetails.username.value,
            firstname: this.registrationDetails.username.value,
            lastname: this.registrationDetails.username.value,
            email: this.registrationDetails.username.value,
            phone: this.registrationDetails.username.value,
            password: this.registrationDetails.username.value

        }
        this.accountService.register(data)
            .pipe(first())
            .subscribe({
                next: () => {
                    this.modalService.dismissAll();
                    location.reload();
                },
                error: error => {
                    alert("Something went wrong");
                    this.registerLoading = false;
                }
            });

    }
    onSubmit() {
        this.submitted = true;

        // reset alerts on submit
        this.alertService.clear();

        // stop here if form is invalid
        if (this.form.invalid) {
            return;
        }

        this.loading = true;
        this.accountService.login(this.f.username.value, this.f.password.value)
            .pipe(first())
            .subscribe({
                next: () => {
                    this.modalService.dismissAll();
                    location.reload();
                },
                error: error => {
                    alert("wrong Username/Password");
                    this.loading = false;
                }
            });
    }
}