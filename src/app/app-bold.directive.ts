import { Directive, ElementRef,HostListener,Input } from '@angular/core';

@Directive({
  selector: '[appAppBold]'
})
export class AppBoldDirective {

  @Input() bgColor:string;
  constructor(private elementref?:ElementRef) { }

  @HostListener("mouseenter")onMouseEnter(){
    this.elementref.nativeElement.style.fontWeight="bold";
    this.elementref.nativeElement.style.backgroundColor=this.bgColor;
  }

  @HostListener("mouseleave")onMouseLeave(){
    this.elementref.nativeElement.style.fontWeight="normal";
    this.elementref.nativeElement.style.backgroundColor="initial";
  }
}
