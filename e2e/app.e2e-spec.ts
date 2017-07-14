import { SportsSocialClubPage } from './app.po';

describe('sports-social-club App', () => {
  let page: SportsSocialClubPage;

  beforeEach(() => {
    page = new SportsSocialClubPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
