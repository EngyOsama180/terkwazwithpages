export class Secondpage {

    navigate() {
        cy.visit('https://the-internet.herokuapp.com/');
    }

    finduploadebtn() {
        const uploadebtn = cy.get('a[href*="/upload"]');
        uploadebtn.click();
    }
    uploadeimage() {
        const filepath = '\img.jpg';
        const inputfile = cy.get('input[type="file"]');
        inputfile.attachFile(filepath);
        const submitbtn = cy.get('#file-submit');
        submitbtn.click();
    }

    checkuploade() {
        const uploadfile = cy.get('#uploaded-files');
        uploadfile.contains('img.jpg');
    }

}