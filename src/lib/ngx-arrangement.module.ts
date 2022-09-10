import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { VirtualLoadComponent } from './components/virtual-load/virtual-load.component';
import { LoadContentDirective } from './directives/load-content/load-content.directive';
import { ServerSideRenderDirective } from './directives/server-side-render/server-side-render.directive';
import { ServerSideDirective } from './directives/server-side/server-side.directive';

@NgModule({
  declarations: [
    VirtualLoadComponent,
    ServerSideDirective,
    ServerSideRenderDirective,
    LoadContentDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    VirtualLoadComponent,
    ServerSideDirective,
    ServerSideRenderDirective,
    LoadContentDirective
  ]
})
export class ArrangementModule { }
