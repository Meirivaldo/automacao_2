const randomNumberThreeOne = Math.floor(111 + Math.random() * 999);
const randomNumberThreeTwo = Math.floor(111 + Math.random() * 999);
const randomNumberThreeThree = Math.floor(111 + Math.random() * 999);
const randomNumberTwo = Math.floor(11 + Math.random() * 99);


describe('Acessar a tab Forms', () => {
    it('deve navegar até a tela de form e preencher o formulario', async () => {
        const loginMenuForm = await $('~Forms');
        await loginMenuForm.click();

        //Como melhoria usar as caracteres do CPF 111.111.111-11
        const formsImputField = await $('~text-input');
        await formsImputField.setValue(randomNumberThreeOne.toString() + '.' + randomNumberThreeTwo.toString() + '.' + randomNumberThreeThree.toString() + '-' + randomNumberTwo.toString());
        //const resultField = await $('~input-test-result');
        // await resultField.waitForDisplayed({timeout: 5000});
        //const textCaptured = await resultField.getText();
        // await expect(textCaptured).toEqual(numeroAleatorio.toString());

        const buttonSwitch = await $('~switch');
        await buttonSwitch.waitForDisplayed({ timeout: 5000 });
        await buttonSwitch.click();

        // Nessa opção comentada escolhe os 3, devera separar por teste, ex.: teste 1 validar a 1a opção...
        // describe('Validação do Dropdown de Forms', () => {

        //     const openDropdown = async () => {
        //         const dropdown = await $('//android.widget.EditText[@resource-id="text_input"]');
        //         await dropdown.waitForDisplayed({ timeout: 5000 });
        //         await dropdown.click();
        //         await driver.pause(1000); 
        //     };

        //     it('Teste 1: Deve selecionar a opção Webdriver.io', async () => {
        //         await openDropdown();
        //         const opcao = await $('android=new UiSelector().text("webdriver.io is awesome")');
        //         await opcao.click();
        //         await expect(await $('//android.widget.EditText[@resource-id="text_input"]')).toHaveText('webdriver.io is awesome');
        //     });

        //     it('Teste 2: Deve selecionar a opção Appium', async () => {
        //         await openDropdown();
        //         const opcao = await $('android=new UiSelector().text("Appium is awesome")');
        //         await opcao.click();
        //         await expect(await $('//android.widget.EditText[@resource-id="text_input"]')).toHaveText('Appium is awesome');
        //     });

        //     it('Teste 3: Deve selecionar a opção This app', async () => {
        //         await openDropdown();
        //         const opcao = await $('android=new UiSelector().text("This app is awesome")');
        //         await opcao.click();
        //         await expect(await $('//android.widget.EditText[@resource-id="text_input"]')).toHaveText('This app is awesome');
        //     });
        // });

        // Essa função escolhe um dos 3 aleatoriamente.
        describe('Validação do Dropdown de Forms', () => {

            const openDropdown = async () => {
                const dropdown = await $('//android.widget.EditText[@resource-id="text_input"]');
                await dropdown.waitForDisplayed({ timeout: 5000 });
                await dropdown.click();
                await driver.pause(1000);
            };

            it('Deve selecionar uma opção aleatória e seguir para o próximo campo', async () => {
                await openDropdown();
                const optionDropdown = [
                    'webdriver.io is awesome',
                    'Appium is awesome',
                    'This app is awesome'
                ];
                const drawn = optionDropdown[Math.floor(Math.random() * optionDropdown.length)];

                // 3. Clica na opção drawn (sorteada)
                const itemSorteado = await $(`android=new UiSelector().text("${drawn}")`);
                await itemSorteado.click();

                // 4. Valida se o dropdown agora mostra o texto sorteado
                await expect($('//android.widget.EditText[@resource-id="text_input"]')).toHaveText(drawn);
                console.log(`Sucesso! Opção selecionada: ${drawn}`);

                await driver.pause(1000);
            });

        });


        describe('Validate button to activate registration', () => {

            it('Deve clicar no botão Active e confirmar o alerta', async () => {
                const buttonActive = await $('~button-Active');
                await buttonActive.waitForDisplayed({ timeout: 1000 });
                await buttonActive.click();

                const registrationOk = await $('id=android:id/button1');
                await registrationOk.waitForDisplayed({ timeout: 1000 });
                await registrationOk.click();

                const visibleElement = await $('//android.widget.TextView[@text="Form components"]');
                await visibleElement.waitForDisplayed({ timeout: 1000})
                await expect(visibleElement).toHaveText('Form components');
            });
        });
    });
});
