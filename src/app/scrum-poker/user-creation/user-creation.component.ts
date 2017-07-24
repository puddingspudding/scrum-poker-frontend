import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { UserCreationService } from './user-creation.service';

@Component({
    selector: 'app-scrum-poker-user-creation',
    templateUrl: './user-creation.component.html'
})

export class UserCreationComponent implements OnDestroy, OnInit {
    private subscription: Subscription = new Subscription();
    public name: String = '';
    public password: String = '';

    constructor(private userCreationService: UserCreationService) {}

    ngOnInit(): void {

    }

    ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }

    public createUser() {
        this.subscription.add(
            this.userCreationService
                .create(this.name, this.password)
                .subscribe(userId => {
                    console.log(`User Created with ID: ${userId}`);
                })
        );
    }
}
