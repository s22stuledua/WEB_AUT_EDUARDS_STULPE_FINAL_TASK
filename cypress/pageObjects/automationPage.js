export class AutomationPage {
  static visit() {
    cy.visit('https://demoqa.com/automation-practice-form');
  }

  static fillTextField(selector, text) {
    cy.get(selector).type(text);
  }
  static selectGender(gender = 'Male') {
      if (gender === 'Male') {
        cy.get('#gender-radio-1').check({ force: true });
      } else if (gender === 'Female') {
        cy.get('#gender-radio-2').check({ force: true });
      } else if (gender === 'Other') {
        cy.get('#gender-radio-3').check({ force: true });
      }
  }

  static selectDateOfBirth(date) {
    cy.get('#dateOfBirthInput').click();
    cy.get('.react-datepicker__month-select').select('2');
    cy.get('.react-datepicker__year-select').select('1930');
    cy.get('.react-datepicker__day').contains(date).click();
  }

  static selectSubject(subject) {
    cy.get('#subjectsInput').type(subject).type('{enter}');
  }

  static selectHobbies(hobby) {
      if (hobby === 'Music') {
          cy.get('input[value="3"]').check({ force: true });
      } else if (hobby === 'Sports') {
          cy.get('input[value="1"]').check({ force: true });
      } else if (hobby === 'Reading') {
          cy.get('input[value="2"]').check({ force: true });
      }
  }

  static uploadImage(imagePath) {
    cy.get('#uploadPicture').attachFile(imagePath);
  }
  static setCurrentAddress(address = 'India') {
      cy.get('#currentAddress').type(address);
  }

  static selectState(state) {
    cy.get('#state').click();
    cy.get(`#react-select-3-option-0`).contains(state).click();
  }

  static selectCity(city) {
    cy.get('#city').click();
    cy.get(`#react-select-4-option-0`).contains(city).click();
  }

  static clickSubmit() {
    cy.get('#submit').click();
  }

  static validateFormSubmission() {
    cy.get('.table').should('contain', '28 February,1930');
    cy.get('.table').should('contain', 'Economics');
    cy.get('.table').should('contain', 'Music');
    cy.get('.table').should('contain', 'India');
    cy.get('.table').should('contain', 'NCR');
    cy.get('.table').should('contain', 'Delhi');
  }
}