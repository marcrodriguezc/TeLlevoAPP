import { AppPage } from './app.po';
import { browser, by, element } from 'protractor';

describe('Prueba página "Home"', () => {
    let page: AppPage;
    beforeEach(() => {
        page = new AppPage();
    });

    it('Prueba de boton Login Home.', async () => {
    await browser.get('/home');
        await browser.driver.sleep(500);
        await element(by.id('btnLog')).click();
        
    });
});