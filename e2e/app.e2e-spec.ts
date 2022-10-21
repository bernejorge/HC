import { NuevoPortalPage } from './app.po';

describe('nuevo-portal App', () => {
  let page: NuevoPortalPage;

  beforeEach(() => {
    page = new NuevoPortalPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
