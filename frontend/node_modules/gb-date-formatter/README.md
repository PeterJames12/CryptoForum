# gb-date-formatter

[![Build Status](https://travis-ci.org/GaryB432/gb-date-formatter.svg?branch=master)](https://travis-ci.org/GaryB432/gb-date-formatter)

A partial re-engineering of [AngularJs's date formatting](https://docs.angularjs.org/api/ng/filter/date).

## Install

    $ npm install gb-date-formatter

## API

### To use the `DateFormatter` class in a TypeScript file

```ts
import { DateFormatter } from "gb-date-formatter";

const formatter = new DateFormatter();
console.log(formatter.format(new Date("1924-02-25T07:44:40.755Z"), "MMMM y"));
// February 1924

```

### To use the `DateFormatter` class in a JavaScript file

```js
var DateFormatter = require("gb-date-formatter").DateFormatter;

var formatter = new DateFormatter();
console.log(formatter.format(new Date("1924-02-25T07:44:40.755Z"), "MMMM y"));
// February 1924
```

### To use the `DateFormatter` class in an Angular pipe

wrap the gb-date-formatter in an [Angular Pipe](https://angular.io/docs/ts/latest/guide/pipes.html)
```js
import { Pipe, PipeTransform } from '@angular/core';
import { DateFormatter, FormatString } from 'gb-date-formatter';

@Pipe({ name: 'gbCustomDate' })
export class CustomDatePipe implements PipeTransform {
  private static namedFormats: { [name: string]: FormatString; } = {
    medium: 'MMMM y',
    long: 'EEE MMM d, y h:mm a'
  };
  private formatter: DateFormatter = new DateFormatter('en-US');

  public transform(value: Date, fmt: string): string {
    return this.formatter.format(value, CustomDatePipe.namedFormats[fmt]);

  }
}
```

and add the directive to a template
```html
<td [title]="friend.birthday | gbCustomDate:'long'">{{friend.birthday | gbCustomDate:'medium'}}</td>
```
