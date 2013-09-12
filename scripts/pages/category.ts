$("./body") {
  add_class("mw_category")
  remove(".//div[contains(@class, 'NewsletterSubscription')]")

  $(".//div[@id='Wrapper']") {
      $$("#SideCategoryShopByPrice, #SideShopByBrand, #SideCategoryList") {
        # Toggler container
        attribute("data-ur-set", "toggler")
        # Toggler button
        $("./h2") {
          attribute("data-ur-toggler-component", "button")
          add_class("mw_bar1")
          insert("div", class: "mw_indicator")
        }
        # Toggler content
        $("./div") {
          attribute("data-ur-toggler-component", "content")
          $(".//a") {
            insert("div", class:"mw_link_arrow")
          }
        }
      }
  }
}