$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/com/automatedtest/Add_perfume_to_cart.feature");
formatter.feature({
  "name": "Testing",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Add Perfume to Cart Flaconi markets",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Add_perfume_to_cart"
    }
  ]
});
formatter.step({
  "name": "The user navigates to Flaconi landing page on market \"\u003cMarket\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "name": "The user closes the cookie message overlay",
  "keyword": "When "
});
formatter.step({
  "name": "The user searches for product \"\u003cPerfume\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "name": "The user selects product \"\u003cPerfume\u003e\" from product grid",
  "keyword": "When "
});
formatter.step({
  "name": "The user selects first size of the list on product detail page",
  "keyword": "When "
});
formatter.step({
  "name": "The cart overlay is shown to the user",
  "keyword": "Then "
});
formatter.step({
  "name": "The user clicks on view bag in cart overlay",
  "keyword": "When "
});
formatter.step({
  "name": "The cart page is shown to the user",
  "keyword": "Then "
});
formatter.step({
  "name": "Product \"\u003cPerfume\u003e\" is displayed on cart page",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "Market",
        "Perfume"
      ]
    },
    {
      "cells": [
        "de",
        "Dolce \u0026 Gabbana Light Blue"
      ]
    },
    {
      "cells": [
        "at",
        "Giorgio Armani Acqua di Giò Homme"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Add Perfume to Cart Flaconi markets",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Add_perfume_to_cart"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "The user navigates to Flaconi landing page on market \"de\"",
  "keyword": "Given "
});
formatter.match({
  "location": "LandingPageSteps.theUserNavigatesToFlaconiLandingPageOnMarket(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user closes the cookie message overlay",
  "keyword": "When "
});
formatter.match({
  "location": "LandingPageSteps.theUserClosesTheCookieMessageOverlay()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user searches for product \"Dolce \u0026 Gabbana Light Blue\"",
  "keyword": "Then "
});
formatter.match({
  "location": "LandingPageSteps.theUserSearchesForProduct(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user selects product \"Dolce \u0026 Gabbana Light Blue\" from product grid",
  "keyword": "When "
});
formatter.match({
  "location": "LandingPageSteps.theUserSelectsProductFromProductGrid(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user selects first size of the list on product detail page",
  "keyword": "When "
});
formatter.match({
  "location": "LandingPageSteps.theUserSelectsFirstSizeOfTheListOnProductDetailPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The cart overlay is shown to the user",
  "keyword": "Then "
});
formatter.match({
  "location": "CartPageSteps.theCartOverlayIsShownToTheUser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user clicks on view bag in cart overlay",
  "keyword": "When "
});
formatter.match({
  "location": "CartPageSteps.theUserClicksOnViewBagInCartOverlay()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The cart page is shown to the user",
  "keyword": "Then "
});
formatter.match({
  "location": "CartPageSteps.theCartPageIsShownToTheUser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Product \"Dolce \u0026 Gabbana Light Blue\" is displayed on cart page",
  "keyword": "Then "
});
formatter.match({
  "location": "CartPageSteps.productIsDisplayedOnCartPage(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Add Perfume to Cart Flaconi markets",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Add_perfume_to_cart"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "The user navigates to Flaconi landing page on market \"at\"",
  "keyword": "Given "
});
formatter.match({
  "location": "LandingPageSteps.theUserNavigatesToFlaconiLandingPageOnMarket(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user closes the cookie message overlay",
  "keyword": "When "
});
formatter.match({
  "location": "LandingPageSteps.theUserClosesTheCookieMessageOverlay()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user searches for product \"Giorgio Armani Acqua di Giò Homme\"",
  "keyword": "Then "
});
formatter.match({
  "location": "LandingPageSteps.theUserSearchesForProduct(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user selects product \"Giorgio Armani Acqua di Giò Homme\" from product grid",
  "keyword": "When "
});
formatter.match({
  "location": "LandingPageSteps.theUserSelectsProductFromProductGrid(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user selects first size of the list on product detail page",
  "keyword": "When "
});
formatter.match({
  "location": "LandingPageSteps.theUserSelectsFirstSizeOfTheListOnProductDetailPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The cart overlay is shown to the user",
  "keyword": "Then "
});
formatter.match({
  "location": "CartPageSteps.theCartOverlayIsShownToTheUser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user clicks on view bag in cart overlay",
  "keyword": "When "
});
formatter.match({
  "location": "CartPageSteps.theUserClicksOnViewBagInCartOverlay()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The cart page is shown to the user",
  "keyword": "Then "
});
formatter.match({
  "location": "CartPageSteps.theCartPageIsShownToTheUser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Product \"Giorgio Armani Acqua di Giò Homme\" is displayed on cart page",
  "keyword": "Then "
});
formatter.match({
  "location": "CartPageSteps.productIsDisplayedOnCartPage(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});