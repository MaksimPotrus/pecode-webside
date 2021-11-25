import {enterUserNamePassword, enterUserNameUsername, verifyUrl} from "../actions/global_actions";
import {
    clickOnSignInButton,
    validateEnterPasswordErrorMessage,
    validateEnterUsernameErrorMessage,
    validateUsernameErrorMessage,
    verifyPaaswordPlaceholder,
    verifyPecodeImage,
    verifyQAPortalLogin, verifySignInButton,
    verifyUsernamePlaceholder
} from "../actions/login_actions";

Given("I navigate to the Website", ()=>{
    cy.visit("/");
});

When("User on the pecode Website", ()=>{
    verifyUrl("https://www.pecodesoftware.com/qa-portal/registerlogin/registerlogin.php");
});

Then("All page items should be visible and exist", ()=>{
    verifyPecodeImage();
    verifyQAPortalLogin();
    verifyUsernamePlaceholder();
    verifyPaaswordPlaceholder();
    verifySignInButton();
    cy.screenshot();
});

When("I entered empty crediential", ()=>{
    enterUserNameUsername(" ");
    enterUserNamePassword(" ");
});

And("User click on sign in button", ()=>{
    clickOnSignInButton();
});

Then("Error messages should display", ()=>{
    validateEnterUsernameErrorMessage();
    validateEnterPasswordErrorMessage();
    cy.screenshot();
});

When("I entered invalid password", (datatable)=>{
    datatable.hashes().forEach((element)=>{
        enterUserNamePassword(element.invalid_password);
    });
});

Then("Error enter username message should display", ()=>{
    validateEnterUsernameErrorMessage();
    cy.screenshot();
});

When("I entered invalid username", (datatable)=>{
    datatable.hashes().forEach((element)=>{
        enterUserNameUsername(element.invalid_username);
    });
});

Then("Error enter password message should display", ()=>{
    validateEnterPasswordErrorMessage();
    cy.screenshot();
});

When("I entered invalid crediential", (datatable)=>{
    datatable.hashes().forEach((element)=>{
        enterUserNameUsername(element.invalid_username);
        enterUserNamePassword(element.invalid_password);
    });
});

Then("Error username message should display", ()=>{
    validateUsernameErrorMessage();
    cy.screenshot();
});