import { AutomationPage } from '../pageObjects/automationPage';

describe('Automation Practice Form', () => {
  beforeEach(() => {
    AutomationPage.visit();
  });
  
  it('should fill the form and validate the submission', () => {
    AutomationPage.visit();
    AutomationPage.fillTextField('#firstName', 'Homework');
    AutomationPage.fillTextField('#lastName', 'Enjoyer');
    AutomationPage.fillTextField('#userEmail', 'homework.enjoyer@example.com');
    AutomationPage.selectGender('Male');
    AutomationPage.fillTextField('#userNumber', '1234567890');
    AutomationPage.selectDateOfBirth(28);
    AutomationPage.selectSubject('Economics');
    AutomationPage.selectHobbies('Music');
    AutomationPage.uploadImage('files/12412543.jpg');
    AutomationPage.setCurrentAddress('India');
    AutomationPage.selectState('NCR');
    AutomationPage.selectCity('Delhi');
    AutomationPage.clickSubmit();
    AutomationPage.validateFormSubmission();
  });
});