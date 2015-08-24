Feature: Example
  
  Scenario: Acceuil 
    Given get "/#/accueil"
    Then I should see "Accueil | Ma Gazette" as the page title
    Then "#my-editorial-space" is visible
    Then I should see ".row .info-element-wrap" at least "3" times
    Then I should see ".news-image" at most "4" times
    When I click on ".info-link[2]" link

  Scenario: Article
    Then I expected to be on "/#/post/14"
  	Then I should see "Articles | Accusantium aperiam atque deleniti Ma Gazette" as the page title
    Then I should see ".info-title.ng-binding[1]" equal to "Accusantium aperiam atque deleniti"

  Scenario: Login or password error
    Given get "/#/acceuil"
    Then "#my-editorial-space" is visible
      And I click on "#my-editorial-space" link
    Then I should see ".container_login-popup" at most "1" times
    Then I fill "#submit-form" with "{'username':'test@test.com', 'password':'test password'}"
      And Submit the form with "#connect-button"
    Then I should see ".alert.alert-danger.alert-dismissable.ng-binding" contains "L'e-mail ou le mot de passe ne sont pas corrects."
