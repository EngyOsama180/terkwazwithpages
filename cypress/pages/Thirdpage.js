export class Thirdpage {

    navigate() {
        cy.visit("https://the-internet.herokuapp.com/");
    }

    choosedynamicloading() {
        //access using href link
        const dynamicloading = cy.get('a[href*="/dynamic_loading"]');
        dynamicloading.click();
        //anathor way to access using contains
        //cy.contains("Dynamic Loading").click();}
    }
    chooseexampletwo() {

        //access using href link
        const exampletwo = cy.get('a[href*="/dynamic_loading/2"]');
        exampletwo.click();
        //anathor way to access using contains
        //cy.contains("Example 2: Element rendered after the fact").click();
    }

    clickonstrtbtn() {

        //access using ID
        const startbtn = cy.get('#start');
        startbtn.contains("Start").click();
    }

    checkcontaint() { 
        cy.wait(2000);
        cy.contains("h4","Hello World");
    }

}