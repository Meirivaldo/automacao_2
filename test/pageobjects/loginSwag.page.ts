class LoginSwagPage {
    get selectedStandardUser() {return $('//android.widget.TextView[@text="standard_user"]');}
    get loginButton() {return $('//android.widget.TextView[@text="LOGIN"]');}



//Ação de logar pelo usuário standard_user
async loginStandardUser() {
    await this.selectedStandardUser.waitForDisplayed();
    await this.selectedStandardUser.click();
    await this.loginButton.waitForDisplayed();
    await this.loginButton.click();
}

}

export default new LoginSwagPage();