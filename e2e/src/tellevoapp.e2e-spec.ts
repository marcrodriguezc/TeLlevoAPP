import { AppPage } from './app.po';
import { browser, by, element } from 'protractor';

describe('Prueba página "TeLlevoAPP"', () => {
    let page: AppPage;
    beforeEach(() => {
        page = new AppPage();
    });

    it('Prueba de boton Logout en TeLlevoAPP.', async () => {
    await browser.get('/tellevoapp');
        await browser.driver.sleep(500);
        await element(by.id('btnLgt')).click();
        
    });
});