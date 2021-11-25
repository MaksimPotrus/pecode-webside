import {loginPage} from "../page_objects/page_objects"

export const verifyUrl = url => {
    cy.url().should('include', url);
}

export const enterUserNameUsername = (username) => {
    cy.get(loginPage.username)
        .type(username);
}

export const enterUserNamePassword = (password) => {
    cy.get(loginPage.password)
        .type(password);
}

export const validateErrorMessage = (message) => {
    cy.get(loginPage.error_message)
        .should('contain.text' , message);
}

export const verifyPlaceholder = (selector, placeholder) => {
    cy.get(selector)
        .should('have.attr', 'placeholder', placeholder);
}

