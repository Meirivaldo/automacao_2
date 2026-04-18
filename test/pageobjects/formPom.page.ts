class FormPage {
    // Definição dos Seletores (Getters)
    get formsMenu() { return $('~Forms'); }
    get inputField() { return $('~text-input'); }
    get switchButton() { return $('~switch'); }
    get dropdownMenu() { return $('//android.widget.EditText[@resource-id="text_input"]'); }
    get btnActive() { return $('~button-Active'); }
    get btnOkAlerta() { return $('id=android:id/button1'); }

    

    // Métodos de Ação
    async navegarParaForms() {
        await this.formsMenu.waitForDisplayed();
        await this.formsMenu.click();
    }

    async preencherCampo(texto: string) {
        await this.inputField.setValue(texto);
    }

    async selecionarOpcaoDropdown(opcao: string) {
        await this.dropdownMenu.click();
        await driver.pause(1000);
        const item = await $(`android=new UiSelector().text("${opcao}")`);
        await item.click();
    }

    async confirmarRegistro() {
        await this.btnActive.click();
        await this.btnOkAlerta.waitForDisplayed();
        await this.btnOkAlerta.click();
    }

    async selecionarOpcaoAleatoria() {
        const opcoes = [
            'webdriver.io is awesome',
            'Appium is awesome',
            'This app is awesome'
        ];

        const sorteada = opcoes[Math.floor(Math.random() * opcoes.length)];

        await this.dropdownMenu.click();
        await driver.pause(1000); 
        
        const itemSorteado = await $(`android=new UiSelector().text("${sorteada}")`);
        await itemSorteado.click();
        
        return sorteada; 
    }
}
export default new FormPage();
