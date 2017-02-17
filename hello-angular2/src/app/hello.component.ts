import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component(
    {
        selector:'my-hello',
        templateUrl: 'app/hello.component.html',
        styleUrls:['app/hello.component.css']
    }
)
export class HelloComponent {
    color:string='orange';
    size:number=16;
    @Input()
    pageTitle:string;

    @Output() dataAvailable = new EventEmitter();


    onClick(){
        console.log('Clicked');
        this.color='red';
        this.size++;
        this.dataAvailable.emit({message:'Here is the data to parent'});
    }
}