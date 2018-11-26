import { Rotas07Page } from './app.po';

describe('rotas07 App', function() {
  let page: Rotas07Page;

  beforeEach(() => {
    page = new Rotas07Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
