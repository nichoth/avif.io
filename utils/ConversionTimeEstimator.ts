import { minutesAndSeconds } from "@utils/utils";
import last from "lodash/last";
import minBy from "lodash/minBy";
import maxBy from "lodash/maxBy";

interface Sample {
  time: number;
  remainingTimeEstimate: number;
}

export default class ConversionTimeEstimator {
  private samples: Sample[] = [];
  private startTime = 0;
  private estimate = 0;

  private coarseMinutesEstimate?: number;
  private coarseSecondsEstimate?: number;

  constructor(
    private readonly samplingTime: number,
    private readonly holdTime: number
  ) {}

  start(): void {
    this.samples = [];
    this.startTime = Date.now();
  }

  update(progress: number): void {
    const now = Date.now();

    if (
      this.samples.length &&
      now - last(this.samples)!.time < this.samplingTime
    ) {
      return;
    }

    this.samples.push({
      time: now,
      remainingTimeEstimate: this.calculateRemainingTime({
        time: now,
        progress,
      }),
    });
    this.dropOldSamples();
    this.updateRemainingTimeEstimate();
  }

  get minutes(): number | undefined {
    return this.coarseMinutesEstimate;
  }

  get seconds(): number | undefined {
    return this.coarseSecondsEstimate;
  }

  // Calculates remaining time based on conversion speed at the moment of sampling.
  private calculateRemainingTime(args: { time: number; progress: number }) {
    const { time, progress } = args;
    const remainingWork = 1 - progress;
    const speed = progress / (time - this.startTime);
    return remainingWork / speed;
  }

  private minSample() {
    return minBy(this.samples, (sample) => sample.remainingTimeEstimate);
  }

  private maxSample() {
    return maxBy(this.samples, (sample) => sample.remainingTimeEstimate);
  }

  private dropOldSamples() {
    const now = Date.now();
    while (this.samples.length && now - this.samples[0].time > this.holdTime) {
      this.samples.shift();
    }
  }

  private updateRemainingTimeEstimate() {
    console.assert(this.samples.length > 0);

    const minSample = this.minSample();
    const maxSample = this.maxSample();

    if (!minSample || !maxSample) return;

    const { remainingTimeEstimate: minEstimate } = minSample;
    const { remainingTimeEstimate: maxEstimate } = maxSample;

    if (
      this.estimate === undefined ||
      this.estimate < minEstimate ||
      this.estimate > maxEstimate
    ) {
      this.estimate = (minEstimate + maxEstimate) / 2;
      this.coarserEstimate();
    }
  }

  private coarserEstimate() {
    const [minutes, seconds] = minutesAndSeconds(this.estimate);

    if (minutes >= 10) {
      this.coarseMinutesEstimate = Math.round(minutes / 10);
      this.coarseSecondsEstimate = undefined;
    } else if (minutes >= 3) {
      this.coarseMinutesEstimate = minutes + (seconds > 30 ? 1 : 0);
      this.coarseSecondsEstimate = undefined;
    } else if (minutes >= 1) {
      this.coarseMinutesEstimate = minutes;
      this.coarseSecondsEstimate = Math.round(seconds / 30) * 30;
    } else if (seconds >= 15) {
      this.coarseMinutesEstimate = 0;
      this.coarseSecondsEstimate = Math.round(seconds / 10) * 10;
    } else {
      this.coarseMinutesEstimate = 0;
      this.coarseSecondsEstimate = 0;
    }
    if (this.coarseSecondsEstimate === 60) {
      this.coarseMinutesEstimate++;
      this.coarseSecondsEstimate = 0;
    }
  }
}
