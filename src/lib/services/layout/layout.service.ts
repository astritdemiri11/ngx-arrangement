import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { isPlatformBrowser } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { fromEvent, map, Observable, shareReplay, take } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class LayoutService {
  model = this.getModel();
  business = this.getBusiness();

  private serverHandset: boolean | null;

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private breakpointObserver: BreakpointObserver
  ) {
    this.serverHandset = null;
    this.model.isBrowser = isPlatformBrowser(this.platformId);

    this.model.handset$ = this.breakpointObserver
      .observe(Breakpoints.Handset)
      .pipe(map(result => result.matches), shareReplay());

    if (this.model.isBrowser) {
      this.model.resize$ = fromEvent(window, 'resize');

      this.model.resize$.subscribe(() => {
        this.model.handset$ = this.breakpointObserver
          .observe(Breakpoints.Handset)
          .pipe(map(result => result.matches), shareReplay());
      })
    }
  }

  private getModel(): {
    isBrowser: boolean,
    handset$: Observable<boolean>,
    resize$: Observable<Event>
  } {
    return {
      isBrowser: true,
      handset$: new Observable<boolean>(),
      resize$: new Observable<Event>()
    }
  }

  private getBusiness() {
    return {
      isHandset: () => {
        if (!this.model.isBrowser && this.serverHandset !== null) {
          return this.serverHandset;
        }

        let isHandset = false;
        this.model.handset$.pipe(take(1)).subscribe(handset => isHandset = handset)

        return isHandset;
      },
      setServerHandset: (handset: boolean) => {
        this.serverHandset = handset;
      }
    }
  }
}
