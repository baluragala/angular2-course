import {Directive, ElementRef, HostListener, Input} from '@angular/core';
@Directive({
  selector: '[myHighlightWithEvent]'
})
export class HighlightWithEventDirective {
  constructor(private el: ElementRef) {
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight('yellow');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight(null);
  }

  @HostListener('click') onClick() {
    this.highlight("red");
  }

  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }
}
