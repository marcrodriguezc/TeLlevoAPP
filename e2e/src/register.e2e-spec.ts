import { AppPage } from './app.po';
import { browser, by, element } from 'protractor';

describe('Prueba página "Registro"', () => {
    let page: AppPage;
    beforeEach(() => {
        page = new AppPage();
    });

    it('Prueba de boton Volver.', async () => {
    await browser.get('/register');
        await browser.driver.sleep(500);
        await element(by.id('btnBack')).click();
    
    });
});