import FormPom from '../pageobjects/formPom.page';

describe('Automação Profissional com POM', () => {

    it('Deve completar o formulário usando Page Objects', async () => {
        // Agora o código parece uma história:
        await FormPom.navegarParaForms();
        
        const meuCpf1 = Math.floor(100 + Math.random() * 900).toString(); 
        const meuCpf2 = Math.floor(100 + Math.random() * 900).toString();
        const meuCpf3 = Math.floor(100 + Math.random() * 900).toString();
        const meuCpf4 = Math.floor(10 + Math.random() * 90).toString();
        await FormPom.preencherCampo(meuCpf1 + '.' + meuCpf2 + '.' + meuCpf3 + '-' + meuCpf4);
        
        await FormPom.switchButton.click();
        
        await FormPom.selecionarOpcaoAleatoria();
        
        await FormPom.confirmarRegistro();

        console.log('Teste POM finalizado com sucesso!');
    });

});