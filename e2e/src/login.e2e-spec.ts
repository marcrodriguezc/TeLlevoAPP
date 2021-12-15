import { AppPage } from './app.po';
import { browser, by, element } from 'protractor';

describe('Prueba página "Login"', () => {
    let page: AppPage;
    beforeEach(() => {
        page = new AppPage();
    });

    it('Prueba de ingreso de Usuario/Contraseña y boton Login.', async () => {
    await browser.get('/login');
        await element(by.id('userLog')).sendKeys('Marcelo');
        await element(by.id('passLog')).sendKeys('isla12');
        await browser.driver.sleep(500);
        await element(by.id('logBtn')).click();
        
    });
});