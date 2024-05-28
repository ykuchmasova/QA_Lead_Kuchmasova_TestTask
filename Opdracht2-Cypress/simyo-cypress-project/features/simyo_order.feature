Feature: Complete Simyo Subscription Order

Scenario: Order a Simyo subscription
    Given I am on the Simyo website
    When I navigate to the Sim-only subscription ordering page
    And I dismiss the cookies popup
    And I select an option
    And I select another option
    And I select one more option
    And I select a final option
    And I click the 'Verder' button
    And I select a device option
    And I select a phone model
    And I wait for the message "Goed nieuws! Jouw telefoon is geschikt voor eSIM!"
    And I click the 'Verder' button
    And I select a payment method
    And I enter my first name as "CypressTest"
    And I enter my last name as "Testing"
    And I enter my date of birth as "01-01-2001"
    And I enter the postcode as "3452EL"
    And I enter the house number as "10"
    And I wait for the address to appear
    And I enter my email address with a random number
    And I click the 'Verder' button
    And I select a bank for payment
    And I agree to the terms and conditions
    And I confirm the payment
    Then I should see the confirmation page
