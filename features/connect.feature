Feature: Connect
  Scenario: 
    Given get "/#/accueil"
    Then I should see "Accueil" as the page title
    Then "#my-editorial-space" is visible
    Then I should see ".row .info-element-wrap" at least "3" times