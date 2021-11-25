export class Firstpage 
{
    navigate(){
        cy.visit("https://www.google.com/ncr");
    }

    filldata(){
        const findsearchinput = cy.get('.a4bIc').click();
        findsearchinput.type("selenium webdriver").type('{enter}');
    }
    

}