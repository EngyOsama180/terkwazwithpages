import { Thirdpage } from "../../pages/Thirdpage";


describe('Third Test ', () => {
    const thirdpage= new Thirdpage();
  it('should open website successfully', () => {
      thirdpage.navigate();
  });

  it('Should Click on Dynamic Loading  ', () => {
      thirdpage.choosedynamicloading();
  });

  it('Should open example two', () => {
      thirdpage.chooseexampletwo();
  });

  it('should click on start button', () => {
      thirdpage.clickonstrtbtn();
  });

  it('should find hello world successfully', () => {
      thirdpage.checkcontaint();

  });
});