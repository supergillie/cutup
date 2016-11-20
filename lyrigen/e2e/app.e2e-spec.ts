import { LyrigenPage } from './app.po';

describe('lyrigen App', function() {
  let page: LyrigenPage;

  beforeEach(() => {
    page = new LyrigenPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
