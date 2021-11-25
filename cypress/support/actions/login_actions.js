import {loginPage} from "../page_objects/page_objects"
import {validateErrorMessage, verifyPlaceholder} from "./global_actions";

export const clickOnSignInButton = () => {
    cy.get(loginPage.sign_in_button).click();
}

export const verifyPecodeImage = () => {
    cy.get(loginPage.image)
        .should('be.visible')
        .should('have.attr', 'src', Cypress.env("pecodeImage"));
}

export const validateUsernameErrorMessage = () => {
    cy.get(loginPage.username)
        .should('have.css', 'border-color', Cypress.env("red"));
    validateErrorMessage("No account found with that username.");
}

export const validateEnterUsernameErrorMessage = () => {
    validateErrorMessage("Please enter username.");
}

export const validateEnterPasswordErrorMessage = () => {
    cy.get(loginPage.password)
        .should('have.css', 'border-color', Cypress.env("red"));
    validateErrorMessage("Please enter your password.");
}

export const verifyQAPortalLogin = () => {
    cy.get(loginPage.loginForm)
        .should('be.visible')
        .contains("QA Portal Login")
        .should('have.css', 'color', Cypress.env("green"));
}

export const verifyUsernamePlaceholder = () => {
    cy.get(loginPage.username)
        .should('be.visible');
    verifyPlaceholder(loginPage.username, 'Username');
}

export const verifyPaaswordPlaceholder = () => {
    cy.get(loginPage.password)
        .should('be.visible');
    verifyPlaceholder(loginPage.password, 'Password');
}

export const verifySignInButton = () => {
    cy.get(loginPage.sign_in_button)
        .should('be.visible')
        .should('have.attr', 'type', 'submit')
        .should('have.css', 'color', Cypress.env("white"))
        .contains('Login');
}