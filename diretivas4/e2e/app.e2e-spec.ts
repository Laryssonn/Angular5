import { Diretivas4Page } from './app.po';

describe('diretivas4 App', function() {
  let page: Diretivas4Page;

  beforeEach(() => {
    page = new Diretivas4Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
