import { Secondpage } from "../../pages/Secondpage";

describe('Second Test check image successfully uploaded  ', () => {
    const secondpage = new Secondpage();

    it('should open website successfully', () => {
        secondpage.navigate();
    });

    it('Should Click on File Upload', () => {
        secondpage.finduploadebtn();
    });

    it('Should uploade image', () => {
      secondpage.uploadeimage();
    });

    it('Should check image Upload', () => {
        secondpage.checkuploade();
    });


});