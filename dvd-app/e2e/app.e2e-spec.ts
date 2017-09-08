import { DvdAppPage } from './app.po';

describe('dvd-app App', () => {
  let page: DvdAppPage;

  beforeEach(() => {
    page = new DvdAppPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
