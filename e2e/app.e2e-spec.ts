import { AngularMdlTestPage } from './app.po';

describe('angular-mdl-test App', () => {
  let page: AngularMdlTestPage;

  beforeEach(() => {
    page = new AngularMdlTestPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
