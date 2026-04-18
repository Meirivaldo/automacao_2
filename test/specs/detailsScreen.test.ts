class DetailsScreen {

get backToHomeScreenButton() { return $('~back'); }
get titleDetailsScreen() { return $('~title'); }
get descriptionDetailsScreen() { return $('~description'); }    
get priceDetailsScreen() { return $('~price'); }    
get addProductDetailsScreen() { return $('~add'); }  
get removeProductDetailsScreen() { return $('~remove'); }


async backToHomeScreen() {
    await this.backToHomeScreenButton.waitForDisplayed();
    await this.backToHomeScreenButton.click();
}

async titleOnTheDetailsScreen() {
    await this.titleDetailsScreen.waitForDisplayed();
    await this.titleDetailsScreen.click();  
}

async descriptionOnTheDetailsScreen() {
    await this.descriptionDetailsScreen.waitForDisplayed();
    await this.descriptionDetailsScreen.click();    
}

async priceOnTheDetailsScreen() {
    await this.priceDetailsScreen.waitForDisplayed();
    await this.priceDetailsScreen.click();      
}

async addOnTheDetailsScreen() {
    await this.addProductDetailsScreen.waitForDisplayed();
    await this.addProductDetailsScreen.click();      
}

async removeOnTheDetailsScreen() {
    await this.removeProductDetailsScreen.waitForDisplayed();
    await this.removeProductDetailsScreen.click();      
}

}