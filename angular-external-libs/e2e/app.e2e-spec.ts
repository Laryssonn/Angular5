import { AngularExternalLibsPage } from './app.po';

describe('angular-external-libs App', function() {
  let page: AngularExternalLibsPage;

  beforeEach(() => {
    page = new AngularExternalLibsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
