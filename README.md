# Testing Pecode Login Page

### In this project was used Cypress and cypress-cucumber-preprocessor, link for Website page: [pecode](https://www.pecodesoftware.com/qa-portal/registerlogin/registerlogin.php)

```js 
const cucumber = require("cypress-cucumber-preprocessor").default
module.exports = (on, config) => {
    on("file:preprocessor", cucumber());
}
```

## Tests Scenario:

1. This scenario verify that [Pecode Image](https://pecode-software.web.app/static/media/icon-logo.f8576d05.svg), inscription "QA Portal Login", "Username" and "Password" fields input, "Login" button are visible, exist on a page and matches their standard colors:

```feature
@UI/UX
    Scenario: Verify that all elements visible and exist on the Website
      When User on the pecode Website
      Then All page items should be visible and exist
```
2. In this scenario user login with empty "Username" and "Password" fields:
```js
    @regression
    Scenario: Login with empty data
      When I entered empty crediential
      And User click on sign in button
      Then Error messages should display
```
3. In this scenario user login with empty "Username" field:
```js
    Scenario: Login with empty username
        When I entered invalid password
            |invalid_password|
            |12345678        |
        And User click on sign in button
        Then Error enter username message should display
```
4. In this scenario user login with empty "Password" field:
```js
    Scenario: Login with empty password
      When I entered invalid username
        |invalid_username|
        |max123          |
      And User click on sign in button
      Then Error enter password message should display
```
5. In this scenario user login with invalid data "Username" and "Password" fields:
```js
    Scenario: Login with invalid data
      When I entered invalid crediential
        |invalid_username|invalid_password|
        |max123          |12345678        |
      And User click on sign in button
      Then Error username message should display
```
### After passing these scripts all tests were successful, all screenshots and videos are exist inside project by paths:
* cypress/screenshots
* cypress/videos

### The color data was taken from the environment file and took from there
```js
{
  "pecodeImage": "https://pecode-software.web.app/static/media/icon-logo.f8576d05.svg",
  "grey": "rgb(51, 51, 51)",
  "white": "rgb(255, 255, 255)",
  "red": "rgb(169, 68, 66)",
  "green": "rgb(22, 115, 60)"
}
```

### P.S. I hope you will like it)))
