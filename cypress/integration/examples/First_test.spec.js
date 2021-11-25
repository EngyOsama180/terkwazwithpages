import { Firstpage } from "../../pages/Firstpage";


describe('First Test Google search ', () => {
    
    const firstpage = new Firstpage();

    it('should open website successfully', () => {
       firstpage.navigate();
    });
  
    it('Should Fill data in search field & search by input selenium webdriver ', () => {
       firstpage.filldata();
    });
  
     it('check third result is What is the WebDriver in selenium? ', () => {
     let x=  cy.get('.wWOJcd');
     x.eq(0).contains("What is the WebDriver in selenium?");
    });
    
  });
