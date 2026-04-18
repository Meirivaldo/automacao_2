import homeScreen from '../pageobjects/homeScreen.page';
import loginSwagPage from '../pageobjects/loginSwag.page';

//O capitulo do teste, neste caso a home screen, onde estão os produtos, preços e botões de adicionar e remover.
describe(   'Teste da Home Screen', () => {       
    
    
    //Aqui no it estão os casos de teste, ou seja, as ações que serão realizadas na home screen, como clicar no preço do produto para navegar para os detalhes do produto.
    it('Deve validar o título do produto na tela inicial', async () => {
        await loginSwagPage.loginStandardUser();
        await homeScreen.titleOnTheHomeScreen();
        await expect(homeScreen.titleProductHomeScreen).toBeDisplayed();
    })

    it('Deve validar o preço do produto na tela inicial', async () => {
        await loginSwagPage.loginStandardUser();
        await homeScreen.priceOnTheHomeScreen();
        await expect(homeScreen.priceHomeScreen).toBeDisplayed();
    })

    it('Deve adicionar o produto ao carrinho', async () => {
        await loginSwagPage.loginStandardUser();
        await homeScreen.addOnTheHomeScreen();
        await expect(homeScreen.addProductButton).toBeDisplayed();
    })       

    it('Deve validar os campos da tela de detalhes', async () => {
        await loginSwagPage.loginStandardUser();
        await homeScreen.titleOnTheHomeScreen();
        await homeScreen.priceOnTheHomeScreen();    
        await homeScreen.addOnTheHomeScreen();
    })




});