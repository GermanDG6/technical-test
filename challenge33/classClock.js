class Clock {
  constructor() {
    this.date = new Date();
    this.hours = this.date.getHours();
    this.minutes = this.date.getMinutes();
    this.seconds = this.date.getSeconds();
  }

  update(seconds) {
    this.seconds += seconds;
    if (this.seconds >= 60) {
      this.minutes++;
      this.seconds = 0;
    }
    if (this.minutes >= 60) {
      this.hours++;
      this.minutes = 0;
    }
    if (this.hours > 24) {
      this.hours = 0;
    }
  }

  show() {
    this.update(1);
    console.log(
      this.hours.toString().length < 2 ? `0${this.hours} :` : `${this.hours} :`,
      this.minutes.toString().length < 2
        ? `0${this.minutes} :`
        : `${this.minutes} :`,
      this.seconds.toString().length < 2
        ? `0${this.seconds}`
        : `${this.seconds}`
    );
  }

  turnOn() {
    setInterval(() => {
      this.show();
    }, 1000);
  }
}

const myClock = new Clock();
console.log(myClock.turnOn());
