import { UniversityDevoxxPage } from './app.po';

describe('university-devoxx App', () => {
  let page: UniversityDevoxxPage;

  beforeEach(() => {
    page = new UniversityDevoxxPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
