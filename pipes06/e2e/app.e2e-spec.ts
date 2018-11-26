import { Pipes06Page } from './app.po';

describe('pipes06 App', function() {
  let page: Pipes06Page;

  beforeEach(() => {
    page = new Pipes06Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
