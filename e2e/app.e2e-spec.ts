import { GamifGamePage } from './app.po';

describe('gamif-game App', () => {
  let page: GamifGamePage;

  beforeEach(() => {
    page = new GamifGamePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
