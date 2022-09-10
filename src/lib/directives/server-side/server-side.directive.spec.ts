import { ServerSideDirective } from './server-side.directive';

describe('ServerSideClassDirective', () => {
  it('should create an instance', () => {
    const directive = new ServerSideDirective({} as any, {} as any, {} as any);
    expect(directive).toBeTruthy();
  });
});
