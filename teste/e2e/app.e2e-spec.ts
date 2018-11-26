import { TestePage } from './app.po';

describe('teste App', function() {
  let page: TestePage;

  beforeEach(() => {
    page = new TestePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
