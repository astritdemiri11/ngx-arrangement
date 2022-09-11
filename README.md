# ngx-arrangement

Lazy load, responsive and server side (angular universal) html rendering library for Angular.

Official documentation: https://astritdemiri.com/ng-library/ngx-arrangement

Simple example using ngx-arrangement: https://stackblitz.com/github/astritdemiri11/ngx-arrangement-example

Get the complete changelog here: https://github.com/astritdemiri11/ngx-arrangement/releases

## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
  * [Import the ArrangementModule](#1-import-the-arrangementmodule)
    * [SharedModule](#sharedmodule)
  * [Use the service, the pipe or the directive](#use-the-service-the-pipe-the-component-or-the-directive)
* [API](#api)
  * [LayoutService](#layoutservice)
    * [Properties](#properties)
    * [Methods](#methods)

## Installation

First you need to install the npm module:

```sh
npm install ngx-arrangement --save
```

Choose the version corresponding to your Angular version:

 Angular       | ngx-arrangement
 ------------- | ---------------
 14 (ivy only) | 1.x+           


## Usage

#### 1. Import the `ArrangementModule`:

Finally, you can use ngx-arrangement in your Angular project. You have to import `ArrangementModule` in the root NgModule of your application.

```ts
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {ArrangementModule} from 'ngx-arrangement';

@NgModule({
    imports: [
        ArrangementModule,
        BrowserModule
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
```

##### SharedModule

If you use a [`SharedModule`](https://angular.io/guide/sharing-ngmodules) that you import in multiple other feature modules,
you can export the `ArrangementModule` to make sure you don't have to import it in every module.

```ts
@NgModule({
    exports: [
        ArrangementModule,
        CommonModule
    ]
})
export class SharedModule { }
```

> Note: Module services are provided in root `@Injectable({ providedIn: 'root' })`, see [`Dependency Injection`](https://angular.io/guide/dependency-injection).

#### Use the service, the pipe, the component or the directive:

You can either use the `LayoutService`, the `VirtualLoadComponent`, the `ServerSideDirective` or the `ServerSideRenderDirective` exported by library

This is how you use the **component** for rendering only if visible in screen:
```html
<virtual-load>
  <ng-template loadContent>
    Your content goes here
  </ng-template>
</virtual-load>
```


This is how you use the **directive** to configure if html should be rendered in server:
```html
<div *serverSideRender="false"></div>
```

This is how you use the **directive** to configure server side styles:
```html
<div serverSide ssStyle="zIndex: -1"></div>
```

## API

### LayoutService

#### Properties:

- `model.isBrowser`: Return a boolean that detects if app is executed in browser or server.
- `model.handset$`: Observer that detects if app is desktop or mobile version.

    example:
    ```ts
    model.handset$.subscribe((handset: boolean) => {
	  // do something
	});
    ```
- `model.resize$`: Observer that detects window resize.

    example:
    ```ts
    model.resize$.subscribe((event: Event) => {
	  // do something
	});
    ```
#### Methods:

- `isHandset()`:  Return a boolean that detects if app is executed in mobile or desktop
- `setServerHandset(handset: boolean): string`: Set the mobile or desktop for server rendering.
