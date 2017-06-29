import { PersonalWebsiteAngularPage } from './app.po';

describe('personal-website-angular App', () => {
  let page: PersonalWebsiteAngularPage;

  beforeEach(() => {
    page = new PersonalWebsiteAngularPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
