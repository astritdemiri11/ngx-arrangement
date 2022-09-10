import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

import { LayoutService } from '../../services/layout/layout.service';

@Directive({
  selector: '[serverSide]'
})
export class ServerSideDirective implements OnInit {
  @Input()
  get serverSide() { return this.serverSideInput; }
  set serverSide(value: any) {
    if (value === '') {
      this.serverSideInput = true;
    }

    this.serverSideInput = coerceBooleanProperty(value);
  }

  private serverSideInput?: boolean;

  @Input() ssClass?: string;
  @Input() ssStyle?: string;

  constructor(
    private renderer2: Renderer2,
    private elementRef: ElementRef,
    private layoutService: LayoutService) { }

  ngOnInit() {
    if ((this.serverSide && !this.layoutService.model.isBrowser) ||
      (!this.serverSide && this.layoutService.model.isBrowser)) {
      if (this.ssClass) {
        const classes = this.ssClass.split(' ');

        for (const elemClass of classes) {
          this.renderer2.addClass(this.elementRef.nativeElement, elemClass.trim());
        }
      }

      if (this.ssStyle) {
        const styles = this.ssStyle.split(';');

        for (const elemStyle of styles) {
          const style = elemStyle.split(':');

          this.renderer2.setStyle(this.elementRef.nativeElement, style[0].trim(), style[1].trim());
        }
      }
    }
  }
}
