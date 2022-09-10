import { ServerSideRenderDirective } from './server-side-render.directive';

describe('ServerSideRenderDirective', () => {
  it('should create an instance', () => {
    const directive = new ServerSideRenderDirective({} as any, {} as any, {} as any);
    expect(directive).toBeTruthy();
  });
});
