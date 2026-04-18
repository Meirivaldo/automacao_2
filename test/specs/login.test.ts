describe('Meu Primeiro Teste no Android', () => {
    it('deve navegar até a tela de Login e digitar algo', async () => {
        // 1. Clica no ícone de Login no menu inferior
        const loginMenu = await $('~Login'); // O '~' busca pela Accessibility ID
        await loginMenu.click();

        // 2. Espera o campo de e-mail aparecer e digita
        const emailInput = await $('~input-email');
        await emailInput.setValue('paperm.store@email.com');

        // 3. Digita a senha
        const passwordInput = await $('~input-password');
        await passwordInput.setValue('12345678');

        // 4. Clica no botão Login
        const loginButton = await $('~button-LOGIN');
        await loginButton.click();

        // 5. Pausa só para você ver o resultado no emulador
        await driver.pause(3000);
    });
});