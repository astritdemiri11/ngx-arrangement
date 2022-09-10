import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

import { LayoutService } from '../../services/layout/layout.service';

@Directive({
  selector: '[serverSideRender]'
})
export class ServerSideRenderDirective {
  @Input()
  get serverSideRender() { return this.serverSideRenderInput; }
  set serverSideRender(value: any) {
    if (value === '') {
      this.serverSideRenderInput = true;
    }

    this.serverSideRenderInput = coerceBooleanProperty(value);
  }

  private serverSideRenderInput?: boolean;

  constructor(
    private viewContainer: ViewContainerRef,
    private templateRef: TemplateRef<any>,
    private layoutService: LayoutService) { }

  ngOnInit() {
    if (this.layoutService.model.isBrowser || this.serverSideRender) {
      this.viewContainer.createEmbeddedView(this.templateRef);
    }
    else {
      this.viewContainer.clear();
    }
  }
}
