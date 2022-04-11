import { WeatherUrlPipe } from './weather-url.pipe';

describe('WeatherUrlPipe', () => {
  it('create an instance', () => {
    const pipe = new WeatherUrlPipe();
    expect(pipe).toBeTruthy();
  });
});
