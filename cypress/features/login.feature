Feature: I want to login into the site with invalid data

  Background:
    Given I navigate to the Website

    @UI/UX
    Scenario: Verify that all elements visible and exist on the Website
      When User on the pecode Website
      Then All page items should be visible and exist

    @regression
    Scenario: Login with empty data
      When I entered empty crediential
      And User click on sign in button
      Then Error messages should display

    Scenario: Login with empty username
      When I entered invalid password
        |invalid_password|
        |12345678        |
      And User click on sign in button
      Then Error enter username message should display

    Scenario: Login with empty password
      When I entered invalid username
        |invalid_username|
        |max123          |
      And User click on sign in button
      Then Error enter password message should display

    Scenario: Login with invalid data
      When I entered invalid crediential
        |invalid_username|invalid_password|
        |max123          |12345678        |
      And User click on sign in button
      Then Error username message should display