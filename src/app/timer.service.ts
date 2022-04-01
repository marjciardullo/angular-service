import { Injectable } from '@angular/core';

@Injectable()
export class TimerService {
  private timer: any;
  private counter = 0;

  constructor() {}

  start(ms: number) {
    if (!this.timer) {
      this.timer = setInterval(() => {
        this.counter++;
      }, ms);
    }
  }

  stop() {
    
  }

  getCount() {
    return this.counter;
  }
}
