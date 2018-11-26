import { DataTestePage } from './app.po';

describe('data-teste App', function() {
  let page: DataTestePage;

  beforeEach(() => {
    page = new DataTestePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
