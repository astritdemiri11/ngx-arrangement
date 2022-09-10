# ngx-arrangement [![Build Status](astrit)](https://astritdemiri.com/ng-library/ngx-arrangement/build)

Lazy load, responsive and server side html rendering library for Angular.

Simple example using ngx-arrangement: https://stackblitz.com/github/astritdemiri11/ngx-arrangement-example

Get the complete changelog here: https://github.com/astritdemiri11/ngx-arrangement/releases

## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
  * [Import the TranslateModule](#1-import-the-translatemodule)
    * [SharedModule](#sharedmodule)
  * [Use the service, the pipe or the directive](#use-the-service-the-pipe-the-component-or-the-directive)


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
        BrowserModule,
        ArrangementModule
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
        CommonModule,
        ArrangementModule
    ]
})
export class SharedModule { }
```

> Note: Module services are provided in root `@Injectable({ providedIn: 'root' })`, see [`Dependency Injection`](https://angular.io/guide/dependency-injection).

#### Use the service, the pipe, the component or the directive:

You can either use the `LayoutService`, the `VirtualLoadComponent`, the `ServerSideDirective` or the `ServerSideRenderDirective` to get your translation values
