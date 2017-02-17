import {Component, Input} from "@angular/core";
/**
 * Created by moksha on 17/02/17.
 */

@Component({
  selector: 'zeo-l2d',
  template: '<p>This is L2D component</p>'
})
export class LifeToDeathComponent {
  private phase: number = 0;

  @Input('data') dataVar: string;

  constructor() {
    console.log(` constructor Phase :${this.phase++}`);
  }

  ngOnInit() {
    console.log(` ngOnInit Phase :${this.phase++}`);
  }

  ngOnChanges() {
    console.log(` ngOnChanges Phase :${this.phase++}`);
  }

  ngDoCheck() {
    console.log(` ngDoCheck Phase :${this.phase++}`);
  }

  ngAfterContentInit() {
    console.log(` ngAfterContentInit Phase :${this.phase++}`);
  }

  ngAfterContentChecked() {
    console.log(` ngAfterContentChecked Phase :${this.phase++}`);
  }

  ngAfterViewInit() {
    console.log(` ngAfterViewInit Phase :${this.phase++}`);
  }

  ngAfterViewChecked(){
    console.log(` ngAfterViewChecked Phase :${this.phase++}`);
  }

  ngOnDestroy(){
    console.log(` ngAfterViewChecked Phase :${this.phase++}`);
  }
}
