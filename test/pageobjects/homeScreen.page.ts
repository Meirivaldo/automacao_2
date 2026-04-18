class homeScreen {
    get titleProductHomeScreen() { return $('//android.widget.TextView[@content-desc="test-Item title" and @text="Sauce Labs Backpack"]'); }
    get priceHomeScreen() { return $('//android.widget.TextView[@content-desc="test-Price" and @text="$29.99"]'); }
    get addProductButton() { return $('(//android.view.ViewGroup[@content-desc="test-ADD TO CART"])[1]'); }
    get removeProductButton() { return $('~remove'); }



    //Ação, navegar para detalhes do produto
    async titleOnTheHomeScreen() {
        await this.titleProductHomeScreen.waitForDisplayed({timeout: 5000});
       // await this.titleProductHomeScreen.click();
       
    }

      async priceOnTheHomeScreen() {
        await this.priceHomeScreen.waitForDisplayed();
       //await this.priceHomeScreen.click();
    }


    async addOnTheHomeScreen() {
        await this.addProductButton.waitForDisplayed();
        await this.addProductButton.click();
    }

    async removeOnTheHomeScreen() {
        await this.removeProductButton.waitForDisplayed();      
        await this.removeProductButton.click();
}


}

export default new homeScreen();