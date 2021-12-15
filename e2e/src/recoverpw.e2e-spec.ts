import { AppPage } from './app.po';
import { browser, by, element } from 'protractor';

describe('Prueba página "RecoverPW"', () => {
    let page: AppPage;
    beforeEach(() => {
        page = new AppPage();
    });

    it('Prueba de ingreso de datos y boton Recuperar.', async () => {
    await browser.get('/recoverpw');
        await element(by.id('userRec')).sendKeys('Marcelo');
        await element(by.id('mailRec')).sendKeys('marcelo.rcanessa@gmail.com');
        await browser.driver.sleep(500);
        await element(by.id('btnRec')).click();
        
    });
});