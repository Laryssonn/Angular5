import { Servicos5Page } from './app.po';

describe('servicos5 App', function() {
  let page: Servicos5Page;

  beforeEach(() => {
    page = new Servicos5Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
