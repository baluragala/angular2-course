import { Component } from '@angular/core';

@Component({
    templateUrl: 'app/home/home.component.html',
    styleUrls: ['app/home/home.component.css']
})
export class HomeComponent {
    public pageTitle: string = 'Home';

    getNumber():number{
        return 10;
    }
}
