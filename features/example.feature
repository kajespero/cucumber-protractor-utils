Feature: Example
  Scenario: Acceuil 
    Given get "/#/accueil"
    Then I should see "Accueil | Ma Gazette" as the page title
    Then "#my-editorial-space" is visible
    Then I should see ".row .info-element-wrap" at least "3" times
    Then I should see ".news-image" at most "3" times
    When I click on ".info-link[2]" link

  Scenario: Article
    Then I exepected to be on "/#/post/14"
  	Then I should see "Articles | Accusantium aperiam atque deleniti Ma Gazette" as the page title
    Then I should see ".info-title.ng-binding[1]" contains "Accusantium aperiam atque deleniti"