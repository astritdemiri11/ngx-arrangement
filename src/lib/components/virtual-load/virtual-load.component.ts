import { AfterContentInit, Component, ContentChild, ElementRef, Input, OnDestroy, OnInit, TemplateRef } from '@angular/core';
import { fromEvent, Subscription } from 'rxjs';

import { LoadContentDirective } from '../../directives/load-content/load-content.directive';
import { LayoutService } from '../../services/layout/layout.service';

@Component({
  selector: 'virtual-load',
  templateUrl: './virtual-load.component.html',
  styleUrls: ['./virtual-load.component.css']
})
export class VirtualLoadComponent implements OnInit, AfterContentInit, OnDestroy {
  @Input() offset?: number;
  @Input() relativeTo?: ElementRef<HTMLElement> | null;
  @Input() show?: boolean;

  @ContentChild(LoadContentDirective, { read: TemplateRef }) contentTemplate?: TemplateRef<HTMLElement>;

  private scrollSubscription: Subscription | null;

  constructor(
    private elementRef: ElementRef<HTMLElement>,
    private layoutService: LayoutService) {
    this.scrollSubscription = null;
  }

  ngOnInit() {
    if (this.show == null) {
      this.show = false;
    }

    if (this.offset == null) {
      this.offset = 1;
    }

    if (!this.show) {
      this.tryShow();

      if (!this.show) {
        this.scrollSubscription = fromEvent(this.relativeTo ? this.relativeTo.nativeElement : window, 'scroll').subscribe(() => {
          this.tryShow();

          if (this.show && this.scrollSubscription) {
            this.scrollSubscription.unsubscribe();
            this.scrollSubscription = null;
          }
        });
      }
    }
  }

  ngAfterContentInit() {
    if (!this.contentTemplate) {
      throw new Error(`virtual-load component, [load-content] attribute is required`);
    }
  }

  ngOnDestroy() {
    if (this.scrollSubscription) {
      this.scrollSubscription.unsubscribe();
    }
  }

  private tryShow() {
    if (!this.layoutService.model.isBrowser) {
      return false;
    }

    if (this.show) {
      return true;
    }

    const scrollingElemBottom = this.relativeTo ? this.relativeTo.nativeElement.getBoundingClientRect().bottom : window.innerHeight;

    var distanceToTop = this.elementRef.nativeElement.getBoundingClientRect().top;

    const offset = this.offset || 0;

    if (distanceToTop + offset <= scrollingElemBottom) {
      this.show = true;
    }

    return false;
  }
}
