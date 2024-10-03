

const gloriousMenu = // 20240930031200
// https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9351929&lng=77.62448069999999&restaurantId=71471&catalog_qa=undefined&submitAction=ENTER

{
  "statusCode": 0,
  "data": {
    "statusMessage": "done successfully",
    "cards": [
      {
        "card": {
          "card": {
            "@type": "type.googleapis.com/swiggy.gandalf.widgets.v2.TextBoxV2",
            "text": "The Glorious Restaurant",
            "headerStyling": {
              "textColor": "text_Highest_Emphasis",
              "textVariant": "header_H3_Black"
            }
          }
        }
      },
      {
        "card": {
          "card": {
            "@type": "type.googleapis.com/swiggy.gandalf.widgets.v2.RestaurantBlTab",
            "tabs": [
              {
                "id": "Order Online",
                "title": "Order Online"
              },
              {
                "id": "Dineout",
                "title": "Dineout",
                "cta": "https://swiggy.com/menu/71471/dineout"
              }
            ]
          }
        }
      },
      {
        "card": {
          "card": {
            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
            "info": {
              "id": "71471",
              "name": "The Glorious Restaurant",
              "city": "Surat",
              "slugs": {
                "restaurant": "the-glorious-restaurant-adajan-adajan",
                "city": "surat"
              },
              "uniqueId": "e51e6528-4859-48c8-8fed-e84c17dc2d76",
              "cloudinaryImageId": "156ab20103b55aa122fc572180034b9e",
              "locality": "Adajan Gam",
              "areaName": "Prime Arcade",
              "costForTwo": "30000",
              "costForTwoMessage": "₹300 for two",
              "cuisines": [
                "Pastas",
                "Chinese"
              ],
              "avgRating": 4.5,
              "veg": true,
              "feeDetails": {
                
              },
              "parentId": "208953",
              "avgRatingString": "4.5",
              "totalRatingsString": "25K+ ratings",
              "sla": {
                "restaurantId": "71471",
                "lastMileTravel": 1053.2,
                "serviceability": "NON_SERVICEABLE",
                "rainMode": "RAIN_MODE_NONE",
                "longDistance": "LONG_DISTANCE_NOT_LONG_DISTANCE",
                "lastMileTravelString": "1053.1 km",
                "iconType": "ICON_TYPE_EMPTY"
              },
              "availability": {
                "nextOpenTimeMessage": "Opens next at 11 am, today",
                "nextOpenTime": "2024-09-30 11:00:00",
                "visibility": true,
                "restaurantClosedMeta": {
                  
                }
              },
              "aggregatedDiscountInfo": {
                "header": "Flat ₹175 off",
                "shortDescriptionList": [
                  {
                    "meta": "Flat ₹175 off on orders above ₹349",
                    "discountType": "Flat",
                    "operationType": "RESTAURANT"
                  },
                  {
                    "meta": "25% off | Use ORDER4FAMILY",
                    "discountType": "Percentage",
                    "operationType": "RESTAURANT"
                  }
                ],
                "descriptionList": [
                  {
                    "meta": "Flat ₹175 off on orders above ₹349 | Use code MEGASAVER",
                    "discountType": "Flat",
                    "operationType": "RESTAURANT"
                  },
                  {
                    "meta": "25% off | Use code ORDER4FAMILY",
                    "discountType": "Percentage",
                    "operationType": "RESTAURANT"
                  }
                ],
                "visible": true
              },
              "badges": {
                
              },
              "slugString": "the-glorious-restaurant-adajan-adajan",
              "labels": [
                {
                  "title": "Timings",
                  "message": "null"
                },
                {
                  "title": "Address",
                  "message": "Chandrashekhar Azad Marg, Opposite Prime Market, Shantinagar Society, Narotam Nagar, Adajan Gam, Surat"
                },
                {
                  "title": "Cuisines",
                  "message": "Pastas,Chinese"
                }
              ],
              "totalRatings": 25000,
              "aggregatedDiscountInfoV2": {
                "header": "Flat ₹175 off",
                "shortDescriptionList": [
                  {
                    "meta": "Flat ₹175 off on orders above ₹349",
                    "discountType": "Flat",
                    "operationType": "RESTAURANT"
                  },
                  {
                    "meta": "25% off | Use ORDER4FAMILY",
                    "discountType": "Percentage",
                    "operationType": "RESTAURANT"
                  }
                ],
                "descriptionList": [
                  {
                    "meta": "Flat ₹175 off on orders above ₹349 | Use code MEGASAVER",
                    "discountType": "Flat",
                    "operationType": "RESTAURANT"
                  },
                  {
                    "meta": "25% off | Use code ORDER4FAMILY",
                    "discountType": "Percentage",
                    "operationType": "RESTAURANT"
                  }
                ],
                "couponDetailsCta": "View coupon details"
              },
              "type": "F",
              "nudgeBanners": [
                {
                  "minValue": 244,
                  "maxValue": 349,
                  "priority": 1,
                  "couponCode": "MEGASAVER",
                  "discountInfo": {
                    "discountType": "Flat",
                    "value": 175
                  },
                  "lockedMessage": "Add items worth ₹<amount> to save ₹175 | Code MEGASAVER",
                  "unlockedMessage": "MEGASAVER Coupon Unlocked! Use it to save ₹175",
                  "logoCtx": {
                    
                  }
                },
                {
                  "minValue": 559,
                  "maxValue": 799,
                  "priority": 2,
                  "couponCode": "ORDER4FAMILY",
                  "discountInfo": {
                    "discountType": "Percentage",
                    "value": 25
                  },
                  "lockedMessage": "Add items worth ₹<amount> to unlock flat 25% off | Code ORDER4FAMILY",
                  "unlockedMessage": "ORDER4FAMILY Coupon Unlocked! Use it to save flat 25% off",
                  "logoCtx": {
                    
                  }
                }
              ],
              "headerBanner": {
                "url": "swiggy://webview?is_external=false&webview_url=https://www.swiggy.com/restaurant-info/71471"
              },
              "generalPurposeInfoListV2": [
                {
                  "cta": {
                    "info": {
                      "recordings": {
                        
                      }
                    },
                    "linkCta": {
                      
                    }
                  }
                }
              ],
              "ratingSlab": "RATING_SLAB_5",
              "availabilityServiceabilityMessage": "Does not deliver to your location",
              "orderabilityCommunication": {
                "title": {
                  "text": "Wish you were"
                },
                "subTitle": {
                  "text": "CLOSER!"
                },
                "message": {
                  "text": "This location is outside the outlet's delivery area",
                  "textColour": "negative"
                },
                "customIcon": {
                  "bgGradientColorStart": "#F64C41",
                  "bgGradientColorEnd": "#E53554"
                }
              },
              "hasBestsellerItems": true,
              "cartOrderabilityNudgeBanner": {
                "parameters": {
                  
                },
                "presentation": {
                  
                }
              },
              "latLong": "21.2024676,72.79450779",
              "backgroundImageOverlayInfo": {
                
              },
              "featuredSectionInfo": {
                
              }
            },
            "analytics": {
              
            }
          },
          "relevance": {
            "type": "RELEVANCE_TYPE_CHECK_ORDERABILITY_ON_ITEM_ADD",
            "sectionId": "POP_UP_CROUTON_MENU"
          }
        }
      },
      {
        "card": {
          "card": {
            "@type": "type.googleapis.com/swiggy.gandalf.widgets.v2.GridWidget",
            "layout": {
              "rows": 1,
              "columns": 4,
              "horizontalScrollEnabled": true,
              "itemSpacing": 12,
              "lineSpacing": 10,
              "widgetPadding": {
                
              },
              "containerStyle": {
                "containerPadding": {
                  "left": 10,
                  "right": 10,
                  "bottom": 16
                }
              },
              "scrollBar": {
                
              }
            },
            "id": "offerCollectionWidget_UX4",
            "gridElements": {
              "infoWithStyle": {
                "@type": "type.googleapis.com/swiggy.presentation.food.v2.OfferInfoWithStyle",
                "offers": [
                  {
                    "info": {
                      "header": "Extra ₹15 off",
                      "offerTagColor": "#E46D47",
                      "logoBottom": "rng/md/ads/production/d07196b25b85d1fd9951e10c255ab737",
                      "offerIds": [
                        "eb076fe4-f2d6-45d9-a9dd-17974cf98ff2"
                      ],
                      "expiryTime": "1970-01-01T00:00:00Z",
                      "description": "APPLICABLE OVER & ABOVE COUPONS",
                      "offerType": "offers",
                      "restId": "71471",
                      "offerLogo": "rng/md/ads/production/d07196b25b85d1fd9951e10c255ab737",
                      "descriptionTextColor": "#7302060C"
                    },
                    "cta": {
                      "type": "OFFER_HALF_CARD"
                    }
                  },
                  {
                    "info": {
                      "header": "FLAT ₹175 OFF",
                      "offerTag": "DEFAULT",
                      "offerTagColor": "#E46D47",
                      "offerIds": [
                        "9dbf405d-ee7e-4a54-a8f8-d7356a345265"
                      ],
                      "expiryTime": "1970-01-01T00:00:00Z",
                      "couponCode": "USE MEGASAVER",
                      "description": "ABOVE ₹349",
                      "offerType": "offers",
                      "restId": "71471",
                      "offerLogo": "offers/generic",
                      "descriptionTextColor": "#7302060C"
                    },
                    "cta": {
                      "type": "OFFER_HALF_CARD"
                    }
                  },
                  {
                    "info": {
                      "header": "FLAT 25% OFF",
                      "offerTag": "DEFAULT",
                      "offerTagColor": "#E46D47",
                      "offerIds": [
                        "2e2a9240-acc3-4a71-8b95-59df2d3f816d"
                      ],
                      "expiryTime": "1970-01-01T00:00:00Z",
                      "couponCode": "USE ORDER4FAMILY",
                      "description": "ABOVE ₹799",
                      "offerType": "offers",
                      "restId": "71471",
                      "offerLogo": "offers/generic",
                      "descriptionTextColor": "#7302060C"
                    },
                    "cta": {
                      "type": "OFFER_HALF_CARD"
                    }
                  },
                  {
                    "info": {
                      "header": "30% OFF UPTO ₹150",
                      "offerTagColor": "#E46D47",
                      "logoBottom": "MARKETING_BANNERS/IMAGES/OFFERS/2024/8/31/7453b7ef-af30-45ff-842e-fd7dec63ff20_Untitled.jpg",
                      "offerIds": [
                        "d22f1a10-ba95-41d4-bc62-48e6ccdae077"
                      ],
                      "expiryTime": "1970-01-01T00:00:00Z",
                      "couponCode": "USE AXIS30",
                      "description": "ABOVE ₹200",
                      "offerType": "offers",
                      "restId": "71471",
                      "offerLogo": "MARKETING_BANNERS/IMAGES/OFFERS/2024/8/31/7453b7ef-af30-45ff-842e-fd7dec63ff20_Untitled.jpg",
                      "descriptionTextColor": "#7302060C"
                    },
                    "cta": {
                      "type": "OFFER_HALF_CARD"
                    }
                  }
                ],
                "habitMilestoneInfo": {
                  "callout": {
                    
                  }
                },
                "loyaltyDiscoverPresentationInfo": {
                  "logoCtx": {
                    
                  }
                }
              }
            }
          }
        }
      },
      {
        "groupedCard": {
          "cardGroupMap": {
            "REGULAR": {
              "cards": [
                {
                  "card": {
                    "card": {
                      "@type": "type.googleapis.com/swiggy.presentation.food.v2.MenuVegFilterAndBadge",
                      "isPureVeg": true,
                      "badges": {
                        
                      },
                      "vegOnlyDetails": {
                        "imageId": "AutoVegOnly_qkjowj",
                        "title": "Showing only vegetarian options.",
                        "description": "Tap on the VEG ONLY button to turn off the setting"
                      },
                      "topRatedFilter": {
                        "attributes": {
                          "displayText": "Ratings 4.0+"
                        }
                      },
                      "kidsCategoryFilter": {
                        "attributes": {
                          "displayText": "Kids Favourites",
                          "tooltip": {
                            "enabled": true,
                            "displayText": "Kids Favourites Filter applied. Remove this filter to see the full Menu."
                          }
                        }
                      },
                      "vegFilter": {
                        "attributes": {
                          "displayText": "VEG"
                        }
                      },
                      "nonvegFilter": {
                        "attributes": {
                          "displayText": "NONVEG"
                        }
                      }
                    },
                    "relevance": {
                      "type": "RELEVANCE_TYPE_ON_MENU_FILTER_TOGGLED",
                      "sectionId": "MENU_FILTER_TOGGLE"
                    }
                  }
                },
                {
                  "card": {
                    "card": {
                      "@type": "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory",
                      "title": "Main Course",
                      "categories": [
                        {
                          "title": "Paneer Ke Sath",
                          "itemCards": [
                            {
                              "card": {
                                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                "info": {
                                  "id": "87139918",
                                  "name": "Paneer Lababdar",
                                  "category": "Main Course",
                                  "description": "Paneer lababdar gravy is made of a spicy cashew tomato paste that is cooked with sauteed onions|| Served Gravy ||",
                                  "isVeg": 1,
                                  "price": 25500,
                                  "variants": {
                                    
                                  },
                                  "variantsV2": {
                                    
                                  },
                                  "addons": [
                                    {
                                      "groupId": "47712242",
                                      "groupName": "Customize",
                                      "choices": [
                                        {
                                          "id": "33716347",
                                          "name": "Regular",
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        },
                                        {
                                          "id": "33716346",
                                          "name": "Jain Preparation",
                                          "price": 1000,
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        }
                                      ],
                                      "maxAddons": 1,
                                      "maxFreeAddons": -1
                                    }
                                  ],
                                  "itemAttribute": {
                                    "vegClassifier": "VEG"
                                  },
                                  "ribbon": {
                                    "text": "Bestseller",
                                    "textColor": "#ffffff",
                                    "topBackgroundColor": "#d53d4c",
                                    "bottomBackgroundColor": "#b02331"
                                  },
                                  "type": "ITEM",
                                  "itemBadge": {
                                    
                                  },
                                  "badgesV2": {
                                    
                                  },
                                  "isBestseller": true,
                                  "ratings": {
                                    "aggregatedRating": {
                                      "rating": "4.6",
                                      "ratingCount": "618 ratings",
                                      "ratingCountV2": "618"
                                    }
                                  }
                                },
                                "analytics": {
                                  
                                },
                                "hideRestaurantDetails": true
                              }
                            },
                            {
                              "card": {
                                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                "info": {
                                  "id": "87139912",
                                  "name": "Paneer Butter Masala",
                                  "category": "Main Course",
                                  "description": "| It is a rich & creamy curry made with paneer, spices, onions, tomatoes, cashews and butter.|| Served Gravy |",
                                  "isVeg": 1,
                                  "price": 24500,
                                  "variants": {
                                    
                                  },
                                  "variantsV2": {
                                    
                                  },
                                  "addons": [
                                    {
                                      "groupId": "47712236",
                                      "groupName": "Customize",
                                      "choices": [
                                        {
                                          "id": "33716347",
                                          "name": "Regular",
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        },
                                        {
                                          "id": "33716346",
                                          "name": "Jain Preparation",
                                          "price": 1000,
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        }
                                      ],
                                      "maxAddons": 1,
                                      "maxFreeAddons": -1
                                    },
                                    {
                                      "groupId": "108508095",
                                      "groupName": "Extra",
                                      "choices": [
                                        {
                                          "id": "98793748",
                                          "name": "Apple Mojito @15% Off!",
                                          "price": 12750,
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        },
                                        {
                                          "id": "98793749",
                                          "name": "Cold Coffee With Ice Cream @15% Off!",
                                          "price": 12750,
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        }
                                      ],
                                      "maxAddons": 2,
                                      "maxFreeAddons": -1
                                    }
                                  ],
                                  "itemAttribute": {
                                    "vegClassifier": "VEG"
                                  },
                                  "ribbon": {
                                    "text": "Bestseller",
                                    "textColor": "#ffffff",
                                    "topBackgroundColor": "#d53d4c",
                                    "bottomBackgroundColor": "#b02331"
                                  },
                                  "type": "ITEM",
                                  "itemBadge": {
                                    
                                  },
                                  "badgesV2": {
                                    
                                  },
                                  "isBestseller": true,
                                  "ratings": {
                                    "aggregatedRating": {
                                      "rating": "4.2",
                                      "ratingCount": "961 ratings",
                                      "ratingCountV2": "961"
                                    }
                                  }
                                },
                                "analytics": {
                                  
                                },
                                "hideRestaurantDetails": true
                              }
                            },
                            {
                              "card": {
                                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                "info": {
                                  "id": "87139926",
                                  "name": "Paneer Toofani",
                                  "category": "Main Course",
                                  "description": "|Gravy|| Pieces of paneer prepared in a smooth and spicy tomato and onion based gravy|",
                                  "isVeg": 1,
                                  "price": 25500,
                                  "variants": {
                                    
                                  },
                                  "variantsV2": {
                                    
                                  },
                                  "addons": [
                                    {
                                      "groupId": "47712251",
                                      "groupName": "Customize",
                                      "choices": [
                                        {
                                          "id": "33716347",
                                          "name": "Regular",
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        },
                                        {
                                          "id": "33716346",
                                          "name": "Jain Preparation",
                                          "price": 1000,
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        }
                                      ],
                                      "maxAddons": 1,
                                      "maxFreeAddons": -1
                                    }
                                  ],
                                  "itemAttribute": {
                                    "vegClassifier": "VEG"
                                  },
                                  "ribbon": {
                                    
                                  },
                                  "type": "ITEM",
                                  "itemBadge": {
                                    
                                  },
                                  "badgesV2": {
                                    
                                  },
                                  "ratings": {
                                    "aggregatedRating": {
                                      "rating": "4.6",
                                      "ratingCount": "250 ratings",
                                      "ratingCountV2": "250"
                                    }
                                  }
                                },
                                "analytics": {
                                  
                                },
                                "hideRestaurantDetails": true
                              }
                            },
                            {
                              "card": {
                                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                "info": {
                                  "id": "87139927",
                                  "name": "Special Paneer Glorious",
                                  "category": "Main Course",
                                  "description": "| House special main course dish made with assorted veggies and paneer tossed in a creamy|| Served Gravy |",
                                  "isVeg": 1,
                                  "price": 26500,
                                  "variants": {
                                    
                                  },
                                  "variantsV2": {
                                    
                                  },
                                  "addons": [
                                    {
                                      "groupId": "47712252",
                                      "groupName": "Customize",
                                      "choices": [
                                        {
                                          "id": "33716347",
                                          "name": "Regular",
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        },
                                        {
                                          "id": "33716346",
                                          "name": "Jain Preparation",
                                          "price": 1000,
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        }
                                      ],
                                      "maxAddons": 1,
                                      "maxFreeAddons": -1
                                    }
                                  ],
                                  "itemAttribute": {
                                    "vegClassifier": "VEG"
                                  },
                                  "ribbon": {
                                    "text": "Bestseller",
                                    "textColor": "#ffffff",
                                    "topBackgroundColor": "#d53d4c",
                                    "bottomBackgroundColor": "#b02331"
                                  },
                                  "type": "ITEM",
                                  "itemBadge": {
                                    
                                  },
                                  "badgesV2": {
                                    
                                  },
                                  "isBestseller": true,
                                  "ratings": {
                                    "aggregatedRating": {
                                      "rating": "4.5",
                                      "ratingCount": "366 ratings",
                                      "ratingCountV2": "366"
                                    }
                                  }
                                },
                                "analytics": {
                                  
                                },
                                "hideRestaurantDetails": true
                              }
                            },
                            {
                              "card": {
                                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                "info": {
                                  "id": "87139925",
                                  "name": "Paneer Tikka Masala",
                                  "category": "Main Course",
                                  "description": "|Gravy || Paneer tikka masala is a delicious, creamy & flavorful Indian dish made by grilling paneer & then simmering it in a masala gravy|",
                                  "isVeg": 1,
                                  "price": 25500,
                                  "variants": {
                                    
                                  },
                                  "variantsV2": {
                                    
                                  },
                                  "addons": [
                                    {
                                      "groupId": "47712250",
                                      "groupName": "Customize",
                                      "choices": [
                                        {
                                          "id": "33716347",
                                          "name": "Regular",
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        },
                                        {
                                          "id": "33716346",
                                          "name": "Jain Preparation",
                                          "price": 1000,
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        }
                                      ],
                                      "maxAddons": 1,
                                      "maxFreeAddons": -1
                                    }
                                  ],
                                  "itemAttribute": {
                                    "vegClassifier": "VEG"
                                  },
                                  "ribbon": {
                                    
                                  },
                                  "type": "ITEM",
                                  "itemBadge": {
                                    
                                  },
                                  "badgesV2": {
                                    
                                  },
                                  "ratings": {
                                    "aggregatedRating": {
                                      "rating": "4.4",
                                      "ratingCount": "785 ratings",
                                      "ratingCountV2": "785"
                                    }
                                  }
                                },
                                "analytics": {
                                  
                                },
                                "hideRestaurantDetails": true
                              }
                            },
                            {
                              "card": {
                                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                "info": {
                                  "id": "20015044",
                                  "name": "Paneer Angara",
                                  "category": "Main Course",
                                  "isVeg": 1,
                                  "price": 25500,
                                  "variants": {
                                    
                                  },
                                  "variantsV2": {
                                    
                                  },
                                  "itemAttribute": {
                                    "vegClassifier": "VEG"
                                  },
                                  "ribbon": {
                                    
                                  },
                                  "type": "ITEM",
                                  "itemBadge": {
                                    
                                  },
                                  "badgesV2": {
                                    
                                  },
                                  "ratings": {
                                    "aggregatedRating": {
                                      "rating": "4.6",
                                      "ratingCount": "239 ratings",
                                      "ratingCountV2": "239"
                                    }
                                  }
                                },
                                "analytics": {
                                  
                                },
                                "hideRestaurantDetails": true
                              }
                            },
                            {
                              "card": {
                                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                "info": {
                                  "id": "87139922",
                                  "name": "Paneer Maharaja",
                                  "category": "Main Course",
                                  "description": "A Shahi Style Paneer Preparation Made In Rich Creamy Gravy, Roasted Masala And Nuts For The Royal Feel.",
                                  "isVeg": 1,
                                  "price": 26500,
                                  "variants": {
                                    
                                  },
                                  "variantsV2": {
                                    
                                  },
                                  "addons": [
                                    {
                                      "groupId": "47712246",
                                      "groupName": "Customize",
                                      "choices": [
                                        {
                                          "id": "33716347",
                                          "name": "Regular",
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        },
                                        {
                                          "id": "33716346",
                                          "name": "Jain Preparation",
                                          "price": 1000,
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        }
                                      ],
                                      "maxAddons": 1,
                                      "maxFreeAddons": -1
                                    },
                                    {
                                      "groupId": "108508098",
                                      "groupName": "Extra",
                                      "choices": [
                                        {
                                          "id": "98793748",
                                          "name": "Apple Mojito @15% Off!",
                                          "price": 12750,
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        },
                                        {
                                          "id": "98793749",
                                          "name": "Cold Coffee With Ice Cream @15% Off!",
                                          "price": 12750,
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        }
                                      ],
                                      "maxAddons": 2,
                                      "maxFreeAddons": -1
                                    }
                                  ],
                                  "itemAttribute": {
                                    "vegClassifier": "VEG"
                                  },
                                  "ribbon": {
                                    
                                  },
                                  "type": "ITEM",
                                  "itemBadge": {
                                    
                                  },
                                  "badgesV2": {
                                    
                                  },
                                  "ratings": {
                                    "aggregatedRating": {
                                      "rating": "4.4",
                                      "ratingCount": "178 ratings",
                                      "ratingCountV2": "178"
                                    }
                                  }
                                },
                                "analytics": {
                                  
                                },
                                "hideRestaurantDetails": true
                              }
                            },
                            {
                              "card": {
                                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                "info": {
                                  "id": "20015046",
                                  "name": "Paneer Handi",
                                  "category": "Main Course",
                                  "isVeg": 1,
                                  "price": 24500,
                                  "variants": {
                                    
                                  },
                                  "variantsV2": {
                                    
                                  },
                                  "itemAttribute": {
                                    "vegClassifier": "VEG"
                                  },
                                  "ribbon": {
                                    
                                  },
                                  "type": "ITEM",
                                  "itemBadge": {
                                    
                                  },
                                  "badgesV2": {
                                    
                                  },
                                  "ratings": {
                                    "aggregatedRating": {
                                      "rating": "4.6",
                                      "ratingCount": "223 ratings",
                                      "ratingCountV2": "223"
                                    }
                                  }
                                },
                                "analytics": {
                                  
                                },
                                "hideRestaurantDetails": true
                              }
                            },
                            {
                              "card": {
                                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                "info": {
                                  "id": "20015126",
                                  "name": "Paneer Bhurji",
                                  "category": "Main Course",
                                  "isVeg": 1,
                                  "price": 24500,
                                  "variants": {
                                    
                                  },
                                  "variantsV2": {
                                    
                                  },
                                  "itemAttribute": {
                                    "vegClassifier": "VEG"
                                  },
                                  "ribbon": {
                                    
                                  },
                                  "type": "ITEM",
                                  "itemBadge": {
                                    
                                  },
                                  "badgesV2": {
                                    
                                  },
                                  "ratings": {
                                    "aggregatedRating": {
                                      "rating": "4.4",
                                      "ratingCount": "152 ratings",
                                      "ratingCountV2": "152"
                                    }
                                  }
                                },
                                "analytics": {
                                  
                                },
                                "hideRestaurantDetails": true
                              }
                            },
                            {
                              "card": {
                                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                "info": {
                                  "id": "103533497",
                                  "name": "Shahi Paneer",
                                  "category": "Main Course",
                                  "isVeg": 1,
                                  "price": 26500,
                                  "variants": {
                                    
                                  },
                                  "variantsV2": {
                                    
                                  },
                                  "itemAttribute": {
                                    "vegClassifier": "VEG"
                                  },
                                  "ribbon": {
                                    
                                  },
                                  "type": "ITEM",
                                  "itemBadge": {
                                    
                                  },
                                  "badgesV2": {
                                    
                                  },
                                  "ratings": {
                                    "aggregatedRating": {
                                      "rating": "4.1",
                                      "ratingCount": "6 ratings",
                                      "ratingCountV2": "6"
                                    }
                                  }
                                },
                                "analytics": {
                                  
                                },
                                "hideRestaurantDetails": true
                              }
                            },
                            {
                              "card": {
                                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                "info": {
                                  "id": "87139916",
                                  "name": "Paneer Kali Mirch Masala",
                                  "category": "Main Course",
                                  "description": "A Dominant Flavor Of Black Pepper Infused In Rich Gravy Cooked Along With Chunks Of Paneer, Along With Cream And Spices.",
                                  "isVeg": 1,
                                  "price": 27000,
                                  "variants": {
                                    
                                  },
                                  "variantsV2": {
                                    
                                  },
                                  "addons": [
                                    {
                                      "groupId": "47712239",
                                      "groupName": "Customize",
                                      "choices": [
                                        {
                                          "id": "33716347",
                                          "name": "Regular",
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        },
                                        {
                                          "id": "33716346",
                                          "name": "Jain Preparation",
                                          "price": 1000,
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        }
                                      ],
                                      "maxAddons": 1,
                                      "maxFreeAddons": -1
                                    },
                                    {
                                      "groupId": "108508096",
                                      "groupName": "Extra",
                                      "choices": [
                                        {
                                          "id": "98793748",
                                          "name": "Apple Mojito @15% Off!",
                                          "price": 12750,
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        },
                                        {
                                          "id": "98793749",
                                          "name": "Cold Coffee With Ice Cream @15% Off!",
                                          "price": 12750,
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        }
                                      ],
                                      "maxAddons": 2,
                                      "maxFreeAddons": -1
                                    }
                                  ],
                                  "itemAttribute": {
                                    "vegClassifier": "VEG"
                                  },
                                  "ribbon": {
                                    
                                  },
                                  "type": "ITEM",
                                  "itemBadge": {
                                    
                                  },
                                  "badgesV2": {
                                    
                                  },
                                  "ratings": {
                                    "aggregatedRating": {
                                      "rating": "4.8",
                                      "ratingCount": "17 ratings",
                                      "ratingCountV2": "17"
                                    }
                                  }
                                },
                                "analytics": {
                                  
                                },
                                "hideRestaurantDetails": true
                              }
                            },
                            {
                              "card": {
                                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                "info": {
                                  "id": "87139920",
                                  "name": "Paneer Laziz",
                                  "category": "Main Course",
                                  "description": "Spicy Paneer Preparation Made With Gravy And A Perfect Blend Of Spices, Roasted And Blended Well To Give And Amazing Taste.",
                                  "isVeg": 1,
                                  "price": 25500,
                                  "variants": {
                                    
                                  },
                                  "variantsV2": {
                                    
                                  },
                                  "addons": [
                                    {
                                      "groupId": "47712244",
                                      "groupName": "Customize",
                                      "choices": [
                                        {
                                          "id": "33716347",
                                          "name": "Regular",
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        },
                                        {
                                          "id": "33716346",
                                          "name": "Jain Preparation",
                                          "price": 1000,
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        }
                                      ],
                                      "maxAddons": 1,
                                      "maxFreeAddons": -1
                                    }
                                  ],
                                  "itemAttribute": {
                                    "vegClassifier": "VEG"
                                  },
                                  "ribbon": {
                                    
                                  },
                                  "type": "ITEM",
                                  "itemBadge": {
                                    
                                  },
                                  "badgesV2": {
                                    
                                  },
                                  "ratings": {
                                    "aggregatedRating": {
                                      "rating": "4.6",
                                      "ratingCount": "170 ratings",
                                      "ratingCountV2": "170"
                                    }
                                  }
                                },
                                "analytics": {
                                  
                                },
                                "hideRestaurantDetails": true
                              }
                            },
                            {
                              "card": {
                                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                "info": {
                                  "id": "103533454",
                                  "name": "Paneer Kurchain",
                                  "category": "Main Course",
                                  "isVeg": 1,
                                  "price": 26500,
                                  "variants": {
                                    
                                  },
                                  "variantsV2": {
                                    
                                  },
                                  "itemAttribute": {
                                    "vegClassifier": "VEG"
                                  },
                                  "ribbon": {
                                    
                                  },
                                  "type": "ITEM",
                                  "itemBadge": {
                                    
                                  },
                                  "badgesV2": {
                                    
                                  },
                                  "ratings": {
                                    "aggregatedRating": {
                                      "rating": "4.6",
                                      "ratingCount": "5 ratings",
                                      "ratingCountV2": "5"
                                    }
                                  }
                                },
                                "analytics": {
                                  
                                },
                                "hideRestaurantDetails": true
                              }
                            },
                            {
                              "card": {
                                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                "info": {
                                  "id": "87139906",
                                  "name": "Cheesy Garlic Paneer Masala",
                                  "category": "Main Course",
                                  "description": "| A classical north Indian curry recipe made with paneer cubes in a garlic flavoured curry sauce with cheese over it.|| Served Gravy |",
                                  "isVeg": 1,
                                  "price": 26500,
                                  "variants": {
                                    
                                  },
                                  "variantsV2": {
                                    
                                  },
                                  "addons": [
                                    {
                                      "groupId": "47712230",
                                      "groupName": "Customize",
                                      "choices": [
                                        {
                                          "id": "33716347",
                                          "name": "Regular",
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        },
                                        {
                                          "id": "33716346",
                                          "name": "Jain Preparation",
                                          "price": 1000,
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        }
                                      ],
                                      "maxAddons": 1,
                                      "maxFreeAddons": -1
                                    },
                                    {
                                      "groupId": "108508092",
                                      "groupName": "Extra",
                                      "choices": [
                                        {
                                          "id": "98793748",
                                          "name": "Apple Mojito @15% Off!",
                                          "price": 12750,
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        },
                                        {
                                          "id": "98793749",
                                          "name": "Cold Coffee With Ice Cream @15% Off!",
                                          "price": 12750,
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        }
                                      ],
                                      "maxAddons": 2,
                                      "maxFreeAddons": -1
                                    }
                                  ],
                                  "itemAttribute": {
                                    "vegClassifier": "VEG"
                                  },
                                  "ribbon": {
                                    
                                  },
                                  "type": "ITEM",
                                  "itemBadge": {
                                    
                                  },
                                  "badgesV2": {
                                    
                                  },
                                  "ratings": {
                                    "aggregatedRating": {
                                      "rating": "4.4",
                                      "ratingCount": "184 ratings",
                                      "ratingCountV2": "184"
                                    }
                                  }
                                },
                                "analytics": {
                                  
                                },
                                "hideRestaurantDetails": true
                              }
                            },
                            {
                              "card": {
                                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                "info": {
                                  "id": "87139919",
                                  "name": "Paneer Lazagar",
                                  "category": "Main Course",
                                  "description": "Rich Tomato Gravy Seasoned With Roasted Aromatic Masala, Mixed With Cottage Cheese And Veggies.",
                                  "isVeg": 1,
                                  "price": 26500,
                                  "variants": {
                                    
                                  },
                                  "variantsV2": {
                                    
                                  },
                                  "addons": [
                                    {
                                      "groupId": "47712243",
                                      "groupName": "Customize",
                                      "choices": [
                                        {
                                          "id": "33716347",
                                          "name": "Regular",
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        },
                                        {
                                          "id": "33716346",
                                          "name": "Jain Preparation",
                                          "price": 1000,
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        }
                                      ],
                                      "maxAddons": 1,
                                      "maxFreeAddons": -1
                                    }
                                  ],
                                  "itemAttribute": {
                                    "vegClassifier": "VEG"
                                  },
                                  "ribbon": {
                                    
                                  },
                                  "type": "ITEM",
                                  "itemBadge": {
                                    
                                  },
                                  "badgesV2": {
                                    
                                  },
                                  "ratings": {
                                    "aggregatedRating": {
                                      "rating": "4.5",
                                      "ratingCount": "66 ratings",
                                      "ratingCountV2": "66"
                                    }
                                  }
                                },
                                "analytics": {
                                  
                                },
                                "hideRestaurantDetails": true
                              }
                            },
                            {
                              "card": {
                                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                "info": {
                                  "id": "87139917",
                                  "name": "Paneer Khada Masala",
                                  "category": "Main Course",
                                  "description": "A Mild Spice Dish Cooked Along With Gravy And Cottage Cheese. Goes Well With Garlic / Butter Naan.",
                                  "isVeg": 1,
                                  "price": 26500,
                                  "variants": {
                                    
                                  },
                                  "variantsV2": {
                                    
                                  },
                                  "addons": [
                                    {
                                      "groupId": "47712241",
                                      "groupName": "Customize",
                                      "choices": [
                                        {
                                          "id": "33716347",
                                          "name": "Regular",
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        },
                                        {
                                          "id": "33716346",
                                          "name": "Jain Preparation",
                                          "price": 1000,
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        }
                                      ],
                                      "maxAddons": 1,
                                      "maxFreeAddons": -1
                                    },
                                    {
                                      "groupId": "108508097",
                                      "groupName": "Extra",
                                      "choices": [
                                        {
                                          "id": "98793748",
                                          "name": "Apple Mojito @15% Off!",
                                          "price": 12750,
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        },
                                        {
                                          "id": "98793749",
                                          "name": "Cold Coffee With Ice Cream @15% Off!",
                                          "price": 12750,
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        }
                                      ],
                                      "maxAddons": 2,
                                      "maxFreeAddons": -1
                                    }
                                  ],
                                  "itemAttribute": {
                                    "vegClassifier": "VEG"
                                  },
                                  "ribbon": {
                                    
                                  },
                                  "type": "ITEM",
                                  "itemBadge": {
                                    
                                  },
                                  "badgesV2": {
                                    
                                  },
                                  "ratings": {
                                    "aggregatedRating": {
                                      "rating": "4.8",
                                      "ratingCount": "15 ratings",
                                      "ratingCountV2": "15"
                                    }
                                  }
                                },
                                "analytics": {
                                  
                                },
                                "hideRestaurantDetails": true
                              }
                            },
                            {
                              "card": {
                                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                "info": {
                                  "id": "103533201",
                                  "name": "Paneer Mumtaj",
                                  "category": "Main Course",
                                  "isVeg": 1,
                                  "price": 26500,
                                  "variants": {
                                    
                                  },
                                  "variantsV2": {
                                    
                                  },
                                  "itemAttribute": {
                                    "vegClassifier": "VEG"
                                  },
                                  "ribbon": {
                                    
                                  },
                                  "type": "ITEM",
                                  "itemBadge": {
                                    
                                  },
                                  "badgesV2": {
                                    
                                  },
                                  "ratings": {
                                    "aggregatedRating": {
                                      "rating": "4.1",
                                      "ratingCount": "4 ratings",
                                      "ratingCountV2": "4"
                                    }
                                  }
                                },
                                "analytics": {
                                  
                                },
                                "hideRestaurantDetails": true
                              }
                            },
                            {
                              "card": {
                                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                "info": {
                                  "id": "87139915",
                                  "name": "Paneer Hyderabadi",
                                  "category": "Main Course",
                                  "description": "A Rich Nawabi Preparation Of Cottage Cheese In A Typical Style Hyderabadi Gravy Seasoned With Hyderabadi Masala And Lots Of Cream.",
                                  "isVeg": 1,
                                  "price": 26500,
                                  "variants": {
                                    
                                  },
                                  "variantsV2": {
                                    
                                  },
                                  "addons": [
                                    {
                                      "groupId": "47712238",
                                      "groupName": "Customize",
                                      "choices": [
                                        {
                                          "id": "33716347",
                                          "name": "Regular",
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        },
                                        {
                                          "id": "33716346",
                                          "name": "Jain Preparation",
                                          "price": 1000,
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        }
                                      ],
                                      "maxAddons": 1,
                                      "maxFreeAddons": -1
                                    }
                                  ],
                                  "itemAttribute": {
                                    "vegClassifier": "VEG"
                                  },
                                  "ribbon": {
                                    
                                  },
                                  "type": "ITEM",
                                  "itemBadge": {
                                    
                                  },
                                  "badgesV2": {
                                    
                                  },
                                  "ratings": {
                                    "aggregatedRating": {
                                      "rating": "4.4",
                                      "ratingCount": "47 ratings",
                                      "ratingCountV2": "47"
                                    }
                                  }
                                },
                                "analytics": {
                                  
                                },
                                "hideRestaurantDetails": true
                              }
                            },
                            {
                              "card": {
                                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                "info": {
                                  "id": "103533251",
                                  "name": "Paneer Mushroom Masala",
                                  "category": "Main Course",
                                  "isVeg": 1,
                                  "price": 25500,
                                  "variants": {
                                    
                                  },
                                  "variantsV2": {
                                    
                                  },
                                  "itemAttribute": {
                                    "vegClassifier": "VEG"
                                  },
                                  "ribbon": {
                                    
                                  },
                                  "type": "ITEM",
                                  "itemBadge": {
                                    
                                  },
                                  "badgesV2": {
                                    
                                  },
                                  "ratings": {
                                    "aggregatedRating": {
                                      "rating": "4.7",
                                      "ratingCount": "26 ratings",
                                      "ratingCountV2": "26"
                                    }
                                  }
                                },
                                "analytics": {
                                  
                                },
                                "hideRestaurantDetails": true
                              }
                            },
                            {
                              "card": {
                                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                "info": {
                                  "id": "87139913",
                                  "name": "Paneer Garlic Tawa",
                                  "category": "Main Course",
                                  "description": "A Dominant Garlic Flavor In A Creamy Gravy Seasoned With Indian Spices 6 Herbs And Mixed With Paneer.",
                                  "isVeg": 1,
                                  "price": 26500,
                                  "variants": {
                                    
                                  },
                                  "variantsV2": {
                                    
                                  },
                                  "addons": [
                                    {
                                      "groupId": "47712237",
                                      "groupName": "Customize",
                                      "choices": [
                                        {
                                          "id": "33716347",
                                          "name": "Regular",
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        },
                                        {
                                          "id": "33716346",
                                          "name": "Jain Preparation",
                                          "price": 1000,
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        }
                                      ],
                                      "maxAddons": 1,
                                      "maxFreeAddons": -1
                                    }
                                  ],
                                  "itemAttribute": {
                                    "vegClassifier": "VEG"
                                  },
                                  "ribbon": {
                                    
                                  },
                                  "type": "ITEM",
                                  "itemBadge": {
                                    
                                  },
                                  "badgesV2": {
                                    
                                  },
                                  "ratings": {
                                    "aggregatedRating": {
                                      "rating": "4.4",
                                      "ratingCount": "34 ratings",
                                      "ratingCountV2": "34"
                                    }
                                  }
                                },
                                "analytics": {
                                  
                                },
                                "hideRestaurantDetails": true
                              }
                            },
                            {
                              "card": {
                                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                "info": {
                                  "id": "87139924",
                                  "name": "Paneer Multani",
                                  "category": "Main Course",
                                  "description": "A Sufiyani Style Paneer Preparation From Multan, Made In Rich Gravy, Kasoori Methi And Paneer.",
                                  "isVeg": 1,
                                  "price": 26500,
                                  "variants": {
                                    
                                  },
                                  "variantsV2": {
                                    
                                  },
                                  "addons": [
                                    {
                                      "groupId": "47712249",
                                      "groupName": "Customize",
                                      "choices": [
                                        {
                                          "id": "33716347",
                                          "name": "Regular",
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        },
                                        {
                                          "id": "33716346",
                                          "name": "Jain Preparation",
                                          "price": 1000,
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        }
                                      ],
                                      "maxAddons": 1,
                                      "maxFreeAddons": -1
                                    }
                                  ],
                                  "itemAttribute": {
                                    "vegClassifier": "VEG"
                                  },
                                  "ribbon": {
                                    
                                  },
                                  "type": "ITEM",
                                  "itemBadge": {
                                    
                                  },
                                  "badgesV2": {
                                    
                                  },
                                  "ratings": {
                                    "aggregatedRating": {
                                      "rating": "4.4",
                                      "ratingCount": "21 ratings",
                                      "ratingCountV2": "21"
                                    }
                                  }
                                },
                                "analytics": {
                                  
                                },
                                "hideRestaurantDetails": true
                              }
                            },
                            {
                              "card": {
                                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                "info": {
                                  "id": "87139923",
                                  "name": "Paneer Methi Malai",
                                  "category": "Main Course",
                                  "description": "A Paneer Preparation Made From Methi, Gravy And Lots Of Cream And Butter.",
                                  "isVeg": 1,
                                  "price": 26500,
                                  "variants": {
                                    
                                  },
                                  "variantsV2": {
                                    
                                  },
                                  "addons": [
                                    {
                                      "groupId": "47712247",
                                      "groupName": "Customize",
                                      "choices": [
                                        {
                                          "id": "33716347",
                                          "name": "Regular",
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        },
                                        {
                                          "id": "33716346",
                                          "name": "Jain Preparation",
                                          "price": 1000,
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        }
                                      ],
                                      "maxAddons": 1,
                                      "maxFreeAddons": -1
                                    }
                                  ],
                                  "itemAttribute": {
                                    "vegClassifier": "VEG"
                                  },
                                  "ribbon": {
                                    
                                  },
                                  "type": "ITEM",
                                  "itemBadge": {
                                    
                                  },
                                  "badgesV2": {
                                    
                                  },
                                  "ratings": {
                                    "aggregatedRating": {
                                      "rating": "4.6",
                                      "ratingCount": "16 ratings",
                                      "ratingCountV2": "16"
                                    }
                                  }
                                },
                                "analytics": {
                                  
                                },
                                "hideRestaurantDetails": true
                              }
                            },
                            {
                              "card": {
                                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                "info": {
                                  "id": "20015048",
                                  "name": "Paneer Do Pyaza",
                                  "category": "Main Course",
                                  "isVeg": 1,
                                  "price": 25500,
                                  "variants": {
                                    
                                  },
                                  "variantsV2": {
                                    
                                  },
                                  "itemAttribute": {
                                    "vegClassifier": "VEG"
                                  },
                                  "ribbon": {
                                    
                                  },
                                  "type": "ITEM",
                                  "itemBadge": {
                                    
                                  },
                                  "badgesV2": {
                                    
                                  },
                                  "ratings": {
                                    "aggregatedRating": {
                                      "rating": "3.7",
                                      "ratingCount": "16 ratings",
                                      "ratingCountV2": "16"
                                    }
                                  }
                                },
                                "analytics": {
                                  
                                },
                                "hideRestaurantDetails": true
                              }
                            },
                            {
                              "card": {
                                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                "info": {
                                  "id": "103533306",
                                  "name": "Paneer Lasaniya",
                                  "category": "Main Course",
                                  "isVeg": 1,
                                  "price": 25500,
                                  "variants": {
                                    
                                  },
                                  "variantsV2": {
                                    
                                  },
                                  "itemAttribute": {
                                    "vegClassifier": "VEG"
                                  },
                                  "ribbon": {
                                    
                                  },
                                  "type": "ITEM",
                                  "itemBadge": {
                                    
                                  },
                                  "badgesV2": {
                                    
                                  },
                                  "ratings": {
                                    "aggregatedRating": {
                                      "rating": "4.4",
                                      "ratingCount": "26 ratings",
                                      "ratingCountV2": "26"
                                    }
                                  }
                                },
                                "analytics": {
                                  
                                },
                                "hideRestaurantDetails": true
                              }
                            },
                            {
                              "card": {
                                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                "info": {
                                  "id": "20015047",
                                  "name": "Paneer Kadai",
                                  "category": "Main Course",
                                  "isVeg": 1,
                                  "price": 24500,
                                  "variants": {
                                    
                                  },
                                  "variantsV2": {
                                    
                                  },
                                  "itemAttribute": {
                                    "vegClassifier": "VEG"
                                  },
                                  "ribbon": {
                                    
                                  },
                                  "type": "ITEM",
                                  "itemBadge": {
                                    
                                  },
                                  "badgesV2": {
                                    
                                  },
                                  "ratings": {
                                    "aggregatedRating": {
                                      "rating": "4.3",
                                      "ratingCount": "68 ratings",
                                      "ratingCountV2": "68"
                                    }
                                  }
                                },
                                "analytics": {
                                  
                                },
                                "hideRestaurantDetails": true
                              }
                            },
                            {
                              "card": {
                                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                "info": {
                                  "id": "87139908",
                                  "name": "Kashmiri Paneer Masala",
                                  "category": "Main Course",
                                  "description": "| Serves 1-2 | Medium Spicy | Kashmiri Style Paneer Cooked In Yogurt, Tomato And Special Masala Along With Some Whole Spices | Semi-gravy | Served with Salad |",
                                  "isVeg": 1,
                                  "price": 26500,
                                  "variants": {
                                    
                                  },
                                  "variantsV2": {
                                    
                                  },
                                  "addons": [
                                    {
                                      "groupId": "47712232",
                                      "groupName": "Customize",
                                      "choices": [
                                        {
                                          "id": "33716347",
                                          "name": "Regular",
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        },
                                        {
                                          "id": "33716346",
                                          "name": "Jain Preparation",
                                          "price": 1000,
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        }
                                      ],
                                      "maxAddons": 1,
                                      "maxFreeAddons": -1
                                    },
                                    {
                                      "groupId": "108508094",
                                      "groupName": "Extra",
                                      "choices": [
                                        {
                                          "id": "98793748",
                                          "name": "Apple Mojito @15% Off!",
                                          "price": 12750,
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        },
                                        {
                                          "id": "98793749",
                                          "name": "Cold Coffee With Ice Cream @15% Off!",
                                          "price": 12750,
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        }
                                      ],
                                      "maxAddons": 2,
                                      "maxFreeAddons": -1
                                    }
                                  ],
                                  "itemAttribute": {
                                    "vegClassifier": "VEG"
                                  },
                                  "ribbon": {
                                    
                                  },
                                  "type": "ITEM",
                                  "itemBadge": {
                                    
                                  },
                                  "badgesV2": {
                                    
                                  },
                                  "ratings": {
                                    "aggregatedRating": {
                                      "rating": "3.7",
                                      "ratingCount": "16 ratings",
                                      "ratingCountV2": "16"
                                    }
                                  }
                                },
                                "analytics": {
                                  
                                },
                                "hideRestaurantDetails": true
                              }
                            },
                            {
                              "card": {
                                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                "info": {
                                  "id": "103533253",
                                  "name": "Paneer Afghani",
                                  "category": "Main Course",
                                  "isVeg": 1,
                                  "price": 24500,
                                  "variants": {
                                    
                                  },
                                  "variantsV2": {
                                    
                                  },
                                  "itemAttribute": {
                                    "vegClassifier": "VEG"
                                  },
                                  "ribbon": {
                                    
                                  },
                                  "type": "ITEM",
                                  "itemBadge": {
                                    
                                  },
                                  "badgesV2": {
                                    
                                  },
                                  "ratings": {
                                    "aggregatedRating": {
                                      "rating": "4.2",
                                      "ratingCount": "18 ratings",
                                      "ratingCountV2": "18"
                                    }
                                  }
                                },
                                "analytics": {
                                  
                                },
                                "hideRestaurantDetails": true
                              }
                            },
                            {
                              "card": {
                                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                "info": {
                                  "id": "87139910",
                                  "name": "Palak Paneer",
                                  "category": "Main Course",
                                  "description": "| Palak paneer is a popular Indian dish of Indian paneer cubes in a mild, spiced smooth spinach sauce.|| Served Gravy |",
                                  "isVeg": 1,
                                  "price": 23500,
                                  "variants": {
                                    
                                  },
                                  "variantsV2": {
                                    
                                  },
                                  "addons": [
                                    {
                                      "groupId": "47712234",
                                      "groupName": "Customize",
                                      "choices": [
                                        {
                                          "id": "33716347",
                                          "name": "Regular",
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        },
                                        {
                                          "id": "33716346",
                                          "name": "Jain Preparation",
                                          "price": 1000,
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        }
                                      ],
                                      "maxAddons": 1,
                                      "maxFreeAddons": -1
                                    }
                                  ],
                                  "itemAttribute": {
                                    "vegClassifier": "VEG"
                                  },
                                  "ribbon": {
                                    
                                  },
                                  "type": "ITEM",
                                  "itemBadge": {
                                    
                                  },
                                  "badgesV2": {
                                    
                                  },
                                  "ratings": {
                                    "aggregatedRating": {
                                      "rating": "4.3",
                                      "ratingCount": "125 ratings",
                                      "ratingCountV2": "125"
                                    }
                                  }
                                },
                                "analytics": {
                                  
                                },
                                "hideRestaurantDetails": true
                              }
                            },
                            {
                              "card": {
                                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                "info": {
                                  "id": "103533268",
                                  "name": "Paneer Silsila",
                                  "category": "Main Course",
                                  "isVeg": 1,
                                  "price": 24500,
                                  "variants": {
                                    
                                  },
                                  "variantsV2": {
                                    
                                  },
                                  "itemAttribute": {
                                    "vegClassifier": "VEG"
                                  },
                                  "ribbon": {
                                    
                                  },
                                  "type": "ITEM",
                                  "itemBadge": {
                                    
                                  },
                                  "badgesV2": {
                                    
                                  },
                                  "ratings": {
                                    "aggregatedRating": {
                                      "rating": "3.9",
                                      "ratingCount": "8 ratings",
                                      "ratingCountV2": "8"
                                    }
                                  }
                                },
                                "analytics": {
                                  
                                },
                                "hideRestaurantDetails": true
                              }
                            },
                            {
                              "card": {
                                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                "info": {
                                  "id": "87139907",
                                  "name": "Chetinad Paneer",
                                  "category": "Main Course",
                                  "description": "A Spicy And Flavorful Paneer Preparation Made With Unique South Indian Blend And Curry.",
                                  "isVeg": 1,
                                  "price": 25000,
                                  "variants": {
                                    
                                  },
                                  "variantsV2": {
                                    
                                  },
                                  "addons": [
                                    {
                                      "groupId": "47712231",
                                      "groupName": "Customize",
                                      "choices": [
                                        {
                                          "id": "33716347",
                                          "name": "Regular",
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        },
                                        {
                                          "id": "33716346",
                                          "name": "Jain Preparation",
                                          "price": 1000,
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        }
                                      ],
                                      "maxAddons": 1,
                                      "maxFreeAddons": -1
                                    },
                                    {
                                      "groupId": "108508093",
                                      "groupName": "Extra",
                                      "choices": [
                                        {
                                          "id": "98793748",
                                          "name": "Apple Mojito @15% Off!",
                                          "price": 12750,
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        },
                                        {
                                          "id": "98793749",
                                          "name": "Cold Coffee With Ice Cream @15% Off!",
                                          "price": 12750,
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        }
                                      ],
                                      "maxAddons": 2,
                                      "maxFreeAddons": -1
                                    }
                                  ],
                                  "itemAttribute": {
                                    "vegClassifier": "VEG"
                                  },
                                  "ribbon": {
                                    
                                  },
                                  "type": "ITEM",
                                  "itemBadge": {
                                    
                                  },
                                  "badgesV2": {
                                    
                                  },
                                  "ratings": {
                                    "aggregatedRating": {
                                      "rating": "4.3",
                                      "ratingCount": "16 ratings",
                                      "ratingCountV2": "16"
                                    }
                                  }
                                },
                                "analytics": {
                                  
                                },
                                "hideRestaurantDetails": true
                              }
                            }
                          ]
                        },
                        {
                          "title": "Tarkario Ka Khazana",
                          "itemCards": [
                            {
                              "card": {
                                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                "info": {
                                  "id": "87139872",
                                  "name": "Chana Masala",
                                  "category": "Main Course",
                                  "description": "| Serves 1-2 | Medium Spicy | A Traditional Dish, Based On Onion Gravy With Blend Of Spices Mixed With Boiled Chickpeas And Tomato. | Semi-gravy | Served with Salad |",
                                  "isVeg": 1,
                                  "price": 18000,
                                  "variants": {
                                    
                                  },
                                  "variantsV2": {
                                    
                                  },
                                  "addons": [
                                    {
                                      "groupId": "47712169",
                                      "groupName": "Customize",
                                      "choices": [
                                        {
                                          "id": "33716347",
                                          "name": "Regular",
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        },
                                        {
                                          "id": "33716346",
                                          "name": "Jain Preparation",
                                          "price": 1000,
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        }
                                      ],
                                      "maxAddons": 1,
                                      "maxFreeAddons": -1
                                    }
                                  ],
                                  "itemAttribute": {
                                    "vegClassifier": "VEG"
                                  },
                                  "ribbon": {
                                    
                                  },
                                  "type": "ITEM",
                                  "itemBadge": {
                                    
                                  },
                                  "badgesV2": {
                                    
                                  },
                                  "ratings": {
                                    "aggregatedRating": {
                                      "rating": "4.5",
                                      "ratingCount": "276 ratings",
                                      "ratingCountV2": "276"
                                    }
                                  }
                                },
                                "analytics": {
                                  
                                },
                                "hideRestaurantDetails": true
                              }
                            },
                            {
                              "card": {
                                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                "info": {
                                  "id": "87139929",
                                  "name": "Cheese Butter Masala",
                                  "category": "Main Course",
                                  "description": "| It is a rich & creamy curry made with paneer and cheese , spices, onions, tomatoes, cashews with cheese and butter.|| Served Gravy |",
                                  "isVeg": 1,
                                  "price": 31000,
                                  "variants": {
                                    
                                  },
                                  "variantsV2": {
                                    
                                  },
                                  "addons": [
                                    {
                                      "groupId": "47712254",
                                      "groupName": "Customize",
                                      "choices": [
                                        {
                                          "id": "33716347",
                                          "name": "Regular",
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        },
                                        {
                                          "id": "33716346",
                                          "name": "Jain Preparation",
                                          "price": 1000,
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        }
                                      ],
                                      "maxAddons": 1,
                                      "maxFreeAddons": -1
                                    },
                                    {
                                      "groupId": "108508091",
                                      "groupName": "Extra",
                                      "choices": [
                                        {
                                          "id": "98793748",
                                          "name": "Apple Mojito @15% Off!",
                                          "price": 12750,
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        },
                                        {
                                          "id": "98793749",
                                          "name": "Cold Coffee With Ice Cream @15% Off!",
                                          "price": 12750,
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        }
                                      ],
                                      "maxAddons": 2,
                                      "maxFreeAddons": -1
                                    }
                                  ],
                                  "itemAttribute": {
                                    "vegClassifier": "VEG"
                                  },
                                  "ribbon": {
                                    
                                  },
                                  "type": "ITEM",
                                  "itemBadge": {
                                    
                                  },
                                  "badgesV2": {
                                    
                                  },
                                  "ratings": {
                                    "aggregatedRating": {
                                      "rating": "4.2",
                                      "ratingCount": "134 ratings",
                                      "ratingCountV2": "134"
                                    }
                                  }
                                },
                                "analytics": {
                                  
                                },
                                "hideRestaurantDetails": true
                              }
                            },
                            {
                              "card": {
                                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                "info": {
                                  "id": "87139882",
                                  "name": "Special Veg Glorious",
                                  "category": "Main Course",
                                  "description": "This Is Our Special Sabji.",
                                  "isVeg": 1,
                                  "price": 23000,
                                  "variants": {
                                    
                                  },
                                  "variantsV2": {
                                    
                                  },
                                  "addons": [
                                    {
                                      "groupId": "47712209",
                                      "groupName": "Customize",
                                      "choices": [
                                        {
                                          "id": "33716347",
                                          "name": "Regular",
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        },
                                        {
                                          "id": "33716346",
                                          "name": "Jain Preparation",
                                          "price": 1000,
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        }
                                      ],
                                      "maxAddons": 1,
                                      "maxFreeAddons": -1
                                    }
                                  ],
                                  "itemAttribute": {
                                    "vegClassifier": "VEG"
                                  },
                                  "ribbon": {
                                    
                                  },
                                  "type": "ITEM",
                                  "itemBadge": {
                                    
                                  },
                                  "badgesV2": {
                                    
                                  },
                                  "ratings": {
                                    "aggregatedRating": {
                                      "rating": "4.6",
                                      "ratingCount": "154 ratings",
                                      "ratingCountV2": "154"
                                    }
                                  }
                                },
                                "analytics": {
                                  
                                },
                                "hideRestaurantDetails": true
                              }
                            },
                            {
                              "card": {
                                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                "info": {
                                  "id": "87139891",
                                  "name": "Veg Makhanwala",
                                  "category": "Main Course",
                                  "description": "A Rich Creamy Tomato Gravy Seasoned With Roasted Indian Spices And Mixed With Vegetables.",
                                  "isVeg": 1,
                                  "price": 23000,
                                  "variants": {
                                    
                                  },
                                  "variantsV2": {
                                    
                                  },
                                  "addons": [
                                    {
                                      "groupId": "47712217",
                                      "groupName": "Customize",
                                      "choices": [
                                        {
                                          "id": "33716347",
                                          "name": "Regular",
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        },
                                        {
                                          "id": "33716346",
                                          "name": "Jain Preparation",
                                          "price": 1000,
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        }
                                      ],
                                      "maxAddons": 1,
                                      "maxFreeAddons": -1
                                    }
                                  ],
                                  "itemAttribute": {
                                    "vegClassifier": "VEG"
                                  },
                                  "ribbon": {
                                    
                                  },
                                  "type": "ITEM",
                                  "itemBadge": {
                                    
                                  },
                                  "badgesV2": {
                                    
                                  },
                                  "ratings": {
                                    "aggregatedRating": {
                                      "rating": "4.4",
                                      "ratingCount": "55 ratings",
                                      "ratingCountV2": "55"
                                    }
                                  }
                                },
                                "analytics": {
                                  
                                },
                                "hideRestaurantDetails": true
                              }
                            },
                            {
                              "card": {
                                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                "info": {
                                  "id": "87139889",
                                  "name": "Veg Kolhapuri",
                                  "category": "Main Course",
                                  "description": "| Veg kolhapuri is a spicy, aromatic curry made with variety of vegetables and spices||Served Gravy |",
                                  "isVeg": 1,
                                  "price": 23000,
                                  "variants": {
                                    
                                  },
                                  "variantsV2": {
                                    
                                  },
                                  "addons": [
                                    {
                                      "groupId": "47712215",
                                      "groupName": "Customize",
                                      "choices": [
                                        {
                                          "id": "33716347",
                                          "name": "Regular",
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        },
                                        {
                                          "id": "33716346",
                                          "name": "Jain Preparation",
                                          "price": 1000,
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        }
                                      ],
                                      "maxAddons": 1,
                                      "maxFreeAddons": -1
                                    }
                                  ],
                                  "itemAttribute": {
                                    "vegClassifier": "VEG"
                                  },
                                  "ribbon": {
                                    
                                  },
                                  "type": "ITEM",
                                  "itemBadge": {
                                    
                                  },
                                  "badgesV2": {
                                    
                                  },
                                  "ratings": {
                                    "aggregatedRating": {
                                      "rating": "4.5",
                                      "ratingCount": "96 ratings",
                                      "ratingCountV2": "96"
                                    }
                                  }
                                },
                                "analytics": {
                                  
                                },
                                "hideRestaurantDetails": true
                              }
                            },
                            {
                              "card": {
                                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                "info": {
                                  "id": "103533401",
                                  "name": "Veg. Handi",
                                  "category": "Main Course",
                                  "isVeg": 1,
                                  "price": 23500,
                                  "variants": {
                                    
                                  },
                                  "variantsV2": {
                                    
                                  },
                                  "itemAttribute": {
                                    "vegClassifier": "VEG"
                                  },
                                  "ribbon": {
                                    
                                  },
                                  "type": "ITEM",
                                  "itemBadge": {
                                    
                                  },
                                  "badgesV2": {
                                    
                                  },
                                  "ratings": {
                                    "aggregatedRating": {
                                      "rating": "4.3",
                                      "ratingCount": "31 ratings",
                                      "ratingCountV2": "31"
                                    }
                                  }
                                },
                                "analytics": {
                                  
                                },
                                "hideRestaurantDetails": true
                              }
                            },
                            {
                              "card": {
                                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                "info": {
                                  "id": "87139893",
                                  "name": "Veg Toofani",
                                  "category": "Main Course",
                                  "description": "| Served Gravy |",
                                  "isVeg": 1,
                                  "price": 23000,
                                  "variants": {
                                    
                                  },
                                  "variantsV2": {
                                    
                                  },
                                  "addons": [
                                    {
                                      "groupId": "47712219",
                                      "groupName": "Customize",
                                      "choices": [
                                        {
                                          "id": "33716347",
                                          "name": "Regular",
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        },
                                        {
                                          "id": "33716346",
                                          "name": "Jain Preparation",
                                          "price": 1000,
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        }
                                      ],
                                      "maxAddons": 1,
                                      "maxFreeAddons": -1
                                    }
                                  ],
                                  "itemAttribute": {
                                    "vegClassifier": "VEG"
                                  },
                                  "ribbon": {
                                    
                                  },
                                  "type": "ITEM",
                                  "itemBadge": {
                                    
                                  },
                                  "badgesV2": {
                                    
                                  },
                                  "ratings": {
                                    "aggregatedRating": {
                                      "rating": "4.3",
                                      "ratingCount": "46 ratings",
                                      "ratingCountV2": "46"
                                    }
                                  }
                                },
                                "analytics": {
                                  
                                },
                                "hideRestaurantDetails": true
                              }
                            },
                            {
                              "card": {
                                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                "info": {
                                  "id": "87139888",
                                  "name": "Veg Kadai",
                                  "category": "Main Course",
                                  "description": "Mix Vegetables Tossed In Aromatic Gravy And Seasoned With Kadai Masala And Other Spices.",
                                  "isVeg": 1,
                                  "price": 23500,
                                  "variants": {
                                    
                                  },
                                  "variantsV2": {
                                    
                                  },
                                  "addons": [
                                    {
                                      "groupId": "47712213",
                                      "groupName": "Customize",
                                      "choices": [
                                        {
                                          "id": "33716347",
                                          "name": "Regular",
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        },
                                        {
                                          "id": "33716346",
                                          "name": "Jain Preparation",
                                          "price": 1000,
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        }
                                      ],
                                      "maxAddons": 1,
                                      "maxFreeAddons": -1
                                    }
                                  ],
                                  "itemAttribute": {
                                    "vegClassifier": "VEG"
                                  },
                                  "ribbon": {
                                    
                                  },
                                  "type": "ITEM",
                                  "itemBadge": {
                                    
                                  },
                                  "badgesV2": {
                                    
                                  },
                                  "ratings": {
                                    "aggregatedRating": {
                                      "rating": "4.1",
                                      "ratingCount": "52 ratings",
                                      "ratingCountV2": "52"
                                    }
                                  }
                                },
                                "analytics": {
                                  
                                },
                                "hideRestaurantDetails": true
                              }
                            },
                            {
                              "card": {
                                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                "info": {
                                  "id": "87139886",
                                  "name": "Veg Garlic Masala",
                                  "category": "Main Course",
                                  "description": "[Spicy] A Dominant Garlic Flavor In A Creamy Red Gravy Seasoned With Indian Spices And Herbs And Mixed With Vegetables.",
                                  "isVeg": 1,
                                  "price": 23000,
                                  "variants": {
                                    
                                  },
                                  "variantsV2": {
                                    
                                  },
                                  "addons": [
                                    {
                                      "groupId": "47712212",
                                      "groupName": "Customize",
                                      "choices": [
                                        {
                                          "id": "33716347",
                                          "name": "Regular",
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        },
                                        {
                                          "id": "33716346",
                                          "name": "Jain Preparation",
                                          "price": 1000,
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        }
                                      ],
                                      "maxAddons": 1,
                                      "maxFreeAddons": -1
                                    }
                                  ],
                                  "itemAttribute": {
                                    "vegClassifier": "VEG"
                                  },
                                  "ribbon": {
                                    
                                  },
                                  "type": "ITEM",
                                  "itemBadge": {
                                    
                                  },
                                  "badgesV2": {
                                    
                                  },
                                  "ratings": {
                                    "aggregatedRating": {
                                      "rating": "4.3",
                                      "ratingCount": "33 ratings",
                                      "ratingCountV2": "33"
                                    }
                                  }
                                },
                                "analytics": {
                                  
                                },
                                "hideRestaurantDetails": true
                              }
                            },
                            {
                              "card": {
                                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                "info": {
                                  "id": "87139895",
                                  "name": "Veg Hyderabadi",
                                  "category": "Main Course",
                                  "description": "[Spicy] A Spicy Rich Gravy Mixed With Vegetables And Cream.",
                                  "isVeg": 1,
                                  "price": 23000,
                                  "variants": {
                                    
                                  },
                                  "variantsV2": {
                                    
                                  },
                                  "addons": [
                                    {
                                      "groupId": "47712220",
                                      "groupName": "Customize",
                                      "choices": [
                                        {
                                          "id": "33716347",
                                          "name": "Regular",
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        },
                                        {
                                          "id": "33716346",
                                          "name": "Jain Preparation",
                                          "price": 1000,
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        }
                                      ],
                                      "maxAddons": 1,
                                      "maxFreeAddons": -1
                                    }
                                  ],
                                  "itemAttribute": {
                                    "vegClassifier": "VEG"
                                  },
                                  "ribbon": {
                                    
                                  },
                                  "type": "ITEM",
                                  "itemBadge": {
                                    
                                  },
                                  "badgesV2": {
                                    
                                  },
                                  "ratings": {
                                    "aggregatedRating": {
                                      "rating": "4.6",
                                      "ratingCount": "42 ratings",
                                      "ratingCountV2": "42"
                                    }
                                  }
                                },
                                "analytics": {
                                  
                                },
                                "hideRestaurantDetails": true
                              }
                            },
                            {
                              "card": {
                                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                "info": {
                                  "id": "20015090",
                                  "name": "Mushroom Masala",
                                  "category": "Main Course",
                                  "isVeg": 1,
                                  "price": 21500,
                                  "variants": {
                                    
                                  },
                                  "variantsV2": {
                                    
                                  },
                                  "itemAttribute": {
                                    "vegClassifier": "VEG"
                                  },
                                  "ribbon": {
                                    
                                  },
                                  "type": "ITEM",
                                  "itemBadge": {
                                    
                                  },
                                  "badgesV2": {
                                    
                                  },
                                  "ratings": {
                                    "aggregatedRating": {
                                      "rating": "4.4",
                                      "ratingCount": "68 ratings",
                                      "ratingCountV2": "68"
                                    }
                                  }
                                },
                                "analytics": {
                                  
                                },
                                "hideRestaurantDetails": true
                              }
                            },
                            {
                              "card": {
                                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                "info": {
                                  "id": "87139885",
                                  "name": "Veg Chetinad Masala",
                                  "category": "Main Course",
                                  "description": "A South Indian Style Curry Preparation Made From Coconut, Fried Onion And Roasted Blend Of Masala To Give A South Indian Taste.",
                                  "isVeg": 1,
                                  "price": 23500,
                                  "variants": {
                                    
                                  },
                                  "variantsV2": {
                                    
                                  },
                                  "addons": [
                                    {
                                      "groupId": "47712211",
                                      "groupName": "Customize",
                                      "choices": [
                                        {
                                          "id": "33716347",
                                          "name": "Regular",
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        },
                                        {
                                          "id": "33716346",
                                          "name": "Jain Preparation",
                                          "price": 1000,
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        }
                                      ],
                                      "maxAddons": 1,
                                      "maxFreeAddons": -1
                                    }
                                  ],
                                  "itemAttribute": {
                                    "vegClassifier": "VEG"
                                  },
                                  "ribbon": {
                                    
                                  },
                                  "type": "ITEM",
                                  "itemBadge": {
                                    
                                  },
                                  "badgesV2": {
                                    
                                  },
                                  "ratings": {
                                    "aggregatedRating": {
                                      "rating": "3.7",
                                      "ratingCount": "15 ratings",
                                      "ratingCountV2": "15"
                                    }
                                  }
                                },
                                "analytics": {
                                  
                                },
                                "hideRestaurantDetails": true
                              }
                            },
                            {
                              "card": {
                                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                "info": {
                                  "id": "87139878",
                                  "name": "Mushroom [Mutter] Masala",
                                  "category": "Main Course",
                                  "description": "Button Mushroom Cooked In Mild Spicy Tomato Onion Gravy Seasoned With Roasted Spice Blend. Add On With Green Peas.",
                                  "isVeg": 1,
                                  "price": 21000,
                                  "variants": {
                                    
                                  },
                                  "variantsV2": {
                                    
                                  },
                                  "addons": [
                                    {
                                      "groupId": "47712203",
                                      "groupName": "Customize",
                                      "choices": [
                                        {
                                          "id": "33716347",
                                          "name": "Regular",
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        },
                                        {
                                          "id": "33716346",
                                          "name": "Jain Preparation",
                                          "price": 1000,
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        }
                                      ],
                                      "maxAddons": 1,
                                      "maxFreeAddons": -1
                                    }
                                  ],
                                  "itemAttribute": {
                                    "vegClassifier": "VEG"
                                  },
                                  "ribbon": {
                                    
                                  },
                                  "type": "ITEM",
                                  "itemBadge": {
                                    
                                  },
                                  "badgesV2": {
                                    
                                  },
                                  "ratings": {
                                    "aggregatedRating": {
                                      "rating": "4.3",
                                      "ratingCount": "20 ratings",
                                      "ratingCountV2": "20"
                                    }
                                  }
                                },
                                "analytics": {
                                  
                                },
                                "hideRestaurantDetails": true
                              }
                            }
                          ]
                        },
                        {
                          "title": "Dal Ki Handi",
                          "itemCards": [
                            {
                              "card": {
                                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                "info": {
                                  "id": "87139899",
                                  "name": "Dal Fry",
                                  "category": "Main Course",
                                  "description": "|Gravy|| A comforting and delicious preparation made with mixed daal cooked and tempered with onions, chillies|",
                                  "isVeg": 1,
                                  "price": 14000,
                                  "variants": {
                                    
                                  },
                                  "variantsV2": {
                                    
                                  },
                                  "addons": [
                                    {
                                      "groupId": "47712224",
                                      "groupName": "Customize",
                                      "choices": [
                                        {
                                          "id": "33716347",
                                          "name": "Regular",
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        },
                                        {
                                          "id": "33716346",
                                          "name": "Jain Preparation",
                                          "price": 1000,
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        }
                                      ],
                                      "maxAddons": 1,
                                      "maxFreeAddons": -1
                                    }
                                  ],
                                  "itemAttribute": {
                                    "vegClassifier": "VEG"
                                  },
                                  "ribbon": {
                                    "text": "Bestseller",
                                    "textColor": "#ffffff",
                                    "topBackgroundColor": "#d53d4c",
                                    "bottomBackgroundColor": "#b02331"
                                  },
                                  "type": "ITEM",
                                  "itemBadge": {
                                    
                                  },
                                  "badgesV2": {
                                    
                                  },
                                  "isBestseller": true,
                                  "ratings": {
                                    "aggregatedRating": {
                                      "rating": "4.6",
                                      "ratingCount": "494 ratings",
                                      "ratingCountV2": "494"
                                    }
                                  }
                                },
                                "analytics": {
                                  
                                },
                                "hideRestaurantDetails": true
                              }
                            },
                            {
                              "card": {
                                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                "info": {
                                  "id": "87139904",
                                  "name": "Dal Tadka",
                                  "category": "Main Course",
                                  "description": "| Serves 2 ||A comforting and delicious preparation made with mixed daal cooked and tempered with onions, chillies and more in tadka",
                                  "isVeg": 1,
                                  "price": 16500,
                                  "variants": {
                                    
                                  },
                                  "variantsV2": {
                                    
                                  },
                                  "addons": [
                                    {
                                      "groupId": "47712228",
                                      "groupName": "Customize",
                                      "choices": [
                                        {
                                          "id": "33716347",
                                          "name": "Regular",
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        },
                                        {
                                          "id": "33716346",
                                          "name": "Jain Preparation",
                                          "price": 1000,
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        }
                                      ],
                                      "maxAddons": 1,
                                      "maxFreeAddons": -1
                                    }
                                  ],
                                  "itemAttribute": {
                                    "vegClassifier": "VEG"
                                  },
                                  "ribbon": {
                                    
                                  },
                                  "type": "ITEM",
                                  "itemBadge": {
                                    
                                  },
                                  "badgesV2": {
                                    
                                  },
                                  "ratings": {
                                    "aggregatedRating": {
                                      "rating": "4.5",
                                      "ratingCount": "509 ratings",
                                      "ratingCountV2": "509"
                                    }
                                  }
                                },
                                "analytics": {
                                  
                                },
                                "hideRestaurantDetails": true
                              }
                            }
                          ]
                        },
                        {
                          "title": "Kofta-e-khas",
                          "itemCards": [
                            {
                              "card": {
                                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                "info": {
                                  "id": "20015072",
                                  "name": "Paneer Kofta",
                                  "category": "Main Course",
                                  "isVeg": 1,
                                  "price": 20500,
                                  "variants": {
                                    
                                  },
                                  "variantsV2": {
                                    
                                  },
                                  "itemAttribute": {
                                    "vegClassifier": "VEG"
                                  },
                                  "ribbon": {
                                    
                                  },
                                  "type": "ITEM",
                                  "itemBadge": {
                                    
                                  },
                                  "badgesV2": {
                                    
                                  },
                                  "ratings": {
                                    "aggregatedRating": {
                                      "rating": "4.4",
                                      "ratingCount": "80 ratings",
                                      "ratingCountV2": "80"
                                    }
                                  }
                                },
                                "analytics": {
                                  
                                },
                                "hideRestaurantDetails": true
                              }
                            },
                            {
                              "card": {
                                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                "info": {
                                  "id": "87139939",
                                  "name": "Cheese Kofta",
                                  "category": "Main Course",
                                  "isVeg": 1,
                                  "price": 23500,
                                  "variants": {
                                    
                                  },
                                  "variantsV2": {
                                    
                                  },
                                  "addons": [
                                    {
                                      "groupId": "47712269",
                                      "groupName": "Customize",
                                      "choices": [
                                        {
                                          "id": "33716347",
                                          "name": "Regular",
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        },
                                        {
                                          "id": "33716346",
                                          "name": "Jain Preparation",
                                          "price": 1000,
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        }
                                      ],
                                      "maxAddons": 1,
                                      "maxFreeAddons": -1
                                    }
                                  ],
                                  "itemAttribute": {
                                    "vegClassifier": "VEG"
                                  },
                                  "ribbon": {
                                    
                                  },
                                  "type": "ITEM",
                                  "itemBadge": {
                                    
                                  },
                                  "badgesV2": {
                                    
                                  },
                                  "ratings": {
                                    "aggregatedRating": {
                                      "rating": "4.0",
                                      "ratingCount": "22 ratings",
                                      "ratingCountV2": "22"
                                    }
                                  }
                                },
                                "analytics": {
                                  
                                },
                                "hideRestaurantDetails": true
                              }
                            }
                          ]
                        },
                        {
                          "title": "Cheese And  Kaju Main Course",
                          "itemCards": [
                            {
                              "card": {
                                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                "info": {
                                  "id": "87139931",
                                  "name": "Cheesy Lucknowi Curry",
                                  "category": "Main Course",
                                  "description": "Yogurt Curry Poured On Cheese Dumplings Mixed With Roasted Spices And Cream To Give A Perfect Nawabi Taste.",
                                  "isVeg": 1,
                                  "price": 32000,
                                  "variants": {
                                    
                                  },
                                  "variantsV2": {
                                    
                                  },
                                  "addons": [
                                    {
                                      "groupId": "47712259",
                                      "groupName": "Customize",
                                      "choices": [
                                        {
                                          "id": "33716347",
                                          "name": "Regular",
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        },
                                        {
                                          "id": "33716346",
                                          "name": "Jain Preparation",
                                          "price": 1000,
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        }
                                      ],
                                      "maxAddons": 1,
                                      "maxFreeAddons": -1
                                    }
                                  ],
                                  "itemAttribute": {
                                    "vegClassifier": "VEG"
                                  },
                                  "ribbon": {
                                    
                                  },
                                  "type": "ITEM",
                                  "itemBadge": {
                                    
                                  },
                                  "badgesV2": {
                                    
                                  },
                                  "ratings": {
                                    "aggregatedRating": {
                                      "rating": "4.8",
                                      "ratingCount": "26 ratings",
                                      "ratingCountV2": "26"
                                    }
                                  }
                                },
                                "analytics": {
                                  
                                },
                                "hideRestaurantDetails": true
                              }
                            }
                          ]
                        }
                      ]
                    }
                  }
                },
                {
                  "card": {
                    "card": {
                      "@type": "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                      "title": "Starters",
                      "itemCards": [
                        {
                          "card": {
                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            "info": {
                              "id": "87139973",
                              "name": "Paneer Chilly Dry",
                              "category": "Starters",
                              "description": "|Paneer chunks sauteed well with spices, chillies, onion, capsicum and soy sauce. Serves 2|",
                              "isVeg": 1,
                              "price": 24500,
                              "variants": {
                                
                              },
                              "variantsV2": {
                                
                              },
                              "addons": [
                                {
                                  "groupId": "47712307",
                                  "groupName": "Customize",
                                  "choices": [
                                    {
                                      "id": "33716347",
                                      "name": "Regular",
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "33716346",
                                      "name": "Jain Preparation",
                                      "price": 1000,
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    }
                                  ],
                                  "maxAddons": 1,
                                  "maxFreeAddons": -1
                                },
                                {
                                  "groupId": "108508100",
                                  "groupName": "Extra",
                                  "choices": [
                                    {
                                      "id": "98793748",
                                      "name": "Apple Mojito @15% Off!",
                                      "price": 12750,
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "98793749",
                                      "name": "Cold Coffee With Ice Cream @15% Off!",
                                      "price": 12750,
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    }
                                  ],
                                  "maxAddons": 2,
                                  "maxFreeAddons": -1
                                }
                              ],
                              "itemAttribute": {
                                "vegClassifier": "VEG"
                              },
                              "ribbon": {
                                "text": "Bestseller",
                                "textColor": "#ffffff",
                                "topBackgroundColor": "#d53d4c",
                                "bottomBackgroundColor": "#b02331"
                              },
                              "type": "ITEM",
                              "itemBadge": {
                                
                              },
                              "badgesV2": {
                                
                              },
                              "isBestseller": true,
                              "ratings": {
                                "aggregatedRating": {
                                  "rating": "4.6",
                                  "ratingCount": "858 ratings",
                                  "ratingCountV2": "858"
                                }
                              }
                            },
                            "analytics": {
                              
                            },
                            "hideRestaurantDetails": true
                          }
                        },
                        {
                          "card": {
                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            "info": {
                              "id": "87139977",
                              "name": "Paneer Tikka Dry",
                              "category": "Starters",
                              "description": "Cubes Of Paneer Marinated In Aromatic Spices And Grilled In Tandoori To Give A Smoky Flavorful.",
                              "isVeg": 1,
                              "price": 28500,
                              "variants": {
                                
                              },
                              "variantsV2": {
                                
                              },
                              "addons": [
                                {
                                  "groupId": "47712310",
                                  "groupName": "Customize",
                                  "choices": [
                                    {
                                      "id": "33716347",
                                      "name": "Regular",
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "33716346",
                                      "name": "Jain Preparation",
                                      "price": 1000,
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    }
                                  ],
                                  "maxAddons": 1,
                                  "maxFreeAddons": -1
                                }
                              ],
                              "itemAttribute": {
                                "vegClassifier": "VEG"
                              },
                              "ribbon": {
                                "text": "Bestseller",
                                "textColor": "#ffffff",
                                "topBackgroundColor": "#d53d4c",
                                "bottomBackgroundColor": "#b02331"
                              },
                              "type": "ITEM",
                              "itemBadge": {
                                
                              },
                              "badgesV2": {
                                
                              },
                              "isBestseller": true,
                              "ratings": {
                                "aggregatedRating": {
                                  "rating": "4.5",
                                  "ratingCount": "297 ratings",
                                  "ratingCountV2": "297"
                                }
                              }
                            },
                            "analytics": {
                              
                            },
                            "hideRestaurantDetails": true
                          }
                        },
                        {
                          "card": {
                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            "info": {
                              "id": "87139987",
                              "name": "Veg Lollypop",
                              "category": "Starters",
                              "description": "Crispy Fried Lollipops Made Of Vegetable, Spices And Chinese Sauces.Served Along With Hot Garlic Sauce.",
                              "isVeg": 1,
                              "price": 21900,
                              "variants": {
                                
                              },
                              "variantsV2": {
                                
                              },
                              "addons": [
                                {
                                  "groupId": "47712321",
                                  "groupName": "Customize",
                                  "choices": [
                                    {
                                      "id": "33716347",
                                      "name": "Regular",
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "33716346",
                                      "name": "Jain Preparation",
                                      "price": 1000,
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    }
                                  ],
                                  "maxAddons": 1,
                                  "maxFreeAddons": -1
                                }
                              ],
                              "itemAttribute": {
                                "vegClassifier": "VEG"
                              },
                              "ribbon": {
                                "text": "Bestseller",
                                "textColor": "#ffffff",
                                "topBackgroundColor": "#d53d4c",
                                "bottomBackgroundColor": "#b02331"
                              },
                              "type": "ITEM",
                              "itemBadge": {
                                
                              },
                              "badgesV2": {
                                
                              },
                              "isBestseller": true,
                              "ratings": {
                                "aggregatedRating": {
                                  "rating": "4.6",
                                  "ratingCount": "136 ratings",
                                  "ratingCountV2": "136"
                                }
                              }
                            },
                            "analytics": {
                              
                            },
                            "hideRestaurantDetails": true
                          }
                        },
                        {
                          "card": {
                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            "info": {
                              "id": "87139975",
                              "name": "Paneer Pudina Tikka",
                              "category": "Starters",
                              "description": "Cubes Of Paneer Coated And Maintained In A Unique Minty Spice Mixed And Roasted In Tandoor For Minty Smokey Flvour",
                              "isVeg": 1,
                              "price": 28500,
                              "variants": {
                                
                              },
                              "variantsV2": {
                                
                              },
                              "addons": [
                                {
                                  "groupId": "47712308",
                                  "groupName": "Customize",
                                  "choices": [
                                    {
                                      "id": "33716347",
                                      "name": "Regular",
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "33716346",
                                      "name": "Jain Preparation",
                                      "price": 1000,
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    }
                                  ],
                                  "maxAddons": 1,
                                  "maxFreeAddons": -1
                                }
                              ],
                              "itemAttribute": {
                                "vegClassifier": "VEG"
                              },
                              "ribbon": {
                                
                              },
                              "type": "ITEM",
                              "itemBadge": {
                                
                              },
                              "badgesV2": {
                                
                              },
                              "ratings": {
                                "aggregatedRating": {
                                  "rating": "4.7",
                                  "ratingCount": "29 ratings",
                                  "ratingCountV2": "29"
                                }
                              }
                            },
                            "analytics": {
                              
                            },
                            "hideRestaurantDetails": true
                          }
                        },
                        {
                          "card": {
                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            "info": {
                              "id": "87139965",
                              "name": "Paneer Makhmali Tikka",
                              "category": "Starters",
                              "description": "Tikkas Made From Cottage Cheese Cubes Marinated In Lightly Spiced Creamy White Mixture And Roasted To Perfection. | Dry | Served with Salad |",
                              "isVeg": 1,
                              "price": 28500,
                              "variants": {
                                
                              },
                              "variantsV2": {
                                
                              },
                              "addons": [
                                {
                                  "groupId": "47712297",
                                  "groupName": "Customize",
                                  "choices": [
                                    {
                                      "id": "33716347",
                                      "name": "Regular",
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "33716346",
                                      "name": "Jain Preparation",
                                      "price": 1000,
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    }
                                  ],
                                  "maxAddons": 1,
                                  "maxFreeAddons": -1
                                }
                              ],
                              "itemAttribute": {
                                "vegClassifier": "VEG"
                              },
                              "ribbon": {
                                
                              },
                              "type": "ITEM",
                              "itemBadge": {
                                
                              },
                              "badgesV2": {
                                
                              },
                              "ratings": {
                                "aggregatedRating": {
                                  "rating": "4.1",
                                  "ratingCount": "22 ratings",
                                  "ratingCountV2": "22"
                                }
                              }
                            },
                            "analytics": {
                              
                            },
                            "hideRestaurantDetails": true
                          }
                        },
                        {
                          "card": {
                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            "info": {
                              "id": "87139963",
                              "name": "Garlic Paneer Tikka",
                              "category": "Starters",
                              "description": "Paneer Cubes Marinated In Garlic Flavour And Roasted In Tandoor For A Smokey Taste.",
                              "isVeg": 1,
                              "price": 28500,
                              "variants": {
                                
                              },
                              "variantsV2": {
                                
                              },
                              "addons": [
                                {
                                  "groupId": "47712295",
                                  "groupName": "Customize",
                                  "choices": [
                                    {
                                      "id": "33716347",
                                      "name": "Regular",
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "33716346",
                                      "name": "Jain Preparation",
                                      "price": 1000,
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    }
                                  ],
                                  "maxAddons": 1,
                                  "maxFreeAddons": -1
                                }
                              ],
                              "itemAttribute": {
                                "vegClassifier": "VEG"
                              },
                              "ribbon": {
                                
                              },
                              "type": "ITEM",
                              "itemBadge": {
                                
                              },
                              "badgesV2": {
                                
                              },
                              "ratings": {
                                "aggregatedRating": {
                                  "rating": "4.6",
                                  "ratingCount": "27 ratings",
                                  "ratingCountV2": "27"
                                }
                              }
                            },
                            "analytics": {
                              
                            },
                            "hideRestaurantDetails": true
                          }
                        },
                        {
                          "card": {
                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            "info": {
                              "id": "103533441",
                              "name": "Paneer Achari Tikka",
                              "category": "Starters",
                              "isVeg": 1,
                              "price": 28500,
                              "variants": {
                                
                              },
                              "variantsV2": {
                                
                              },
                              "itemAttribute": {
                                "vegClassifier": "VEG"
                              },
                              "ribbon": {
                                
                              },
                              "type": "ITEM",
                              "itemBadge": {
                                
                              },
                              "badgesV2": {
                                
                              },
                              "ratings": {
                                "aggregatedRating": {
                                  
                                }
                              }
                            },
                            "analytics": {
                              
                            },
                            "hideRestaurantDetails": true
                          }
                        },
                        {
                          "card": {
                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            "info": {
                              "id": "103533407",
                              "name": "Veg. Crispy",
                              "category": "Starters",
                              "isVeg": 1,
                              "price": 23000,
                              "variants": {
                                
                              },
                              "variantsV2": {
                                
                              },
                              "itemAttribute": {
                                "vegClassifier": "VEG"
                              },
                              "ribbon": {
                                
                              },
                              "type": "ITEM",
                              "itemBadge": {
                                
                              },
                              "badgesV2": {
                                
                              },
                              "ratings": {
                                "aggregatedRating": {
                                  "rating": "4.3",
                                  "ratingCount": "11 ratings",
                                  "ratingCountV2": "11"
                                }
                              }
                            },
                            "analytics": {
                              
                            },
                            "hideRestaurantDetails": true
                          }
                        },
                        {
                          "card": {
                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            "info": {
                              "id": "87139971",
                              "name": "Paneer 65",
                              "category": "Starters",
                              "description": "A Chunky Soup Made From Rajma And Pasta Along With Veggies And Garnished With Cheese And Fresh Greens.",
                              "isVeg": 1,
                              "price": 24500,
                              "variants": {
                                
                              },
                              "variantsV2": {
                                
                              },
                              "addons": [
                                {
                                  "groupId": "47712306",
                                  "groupName": "Customize",
                                  "choices": [
                                    {
                                      "id": "33716347",
                                      "name": "Regular",
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "33716346",
                                      "name": "Jain Preparation",
                                      "price": 1000,
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    }
                                  ],
                                  "maxAddons": 1,
                                  "maxFreeAddons": -1
                                }
                              ],
                              "itemAttribute": {
                                "vegClassifier": "VEG"
                              },
                              "ribbon": {
                                
                              },
                              "type": "ITEM",
                              "itemBadge": {
                                
                              },
                              "badgesV2": {
                                
                              },
                              "ratings": {
                                "aggregatedRating": {
                                  "rating": "4.3",
                                  "ratingCount": "83 ratings",
                                  "ratingCountV2": "83"
                                }
                              }
                            },
                            "analytics": {
                              
                            },
                            "hideRestaurantDetails": true
                          }
                        },
                        {
                          "card": {
                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            "info": {
                              "id": "103533413",
                              "name": "Paneer Schezwan Dry",
                              "category": "Starters",
                              "isVeg": 1,
                              "price": 25500,
                              "variants": {
                                
                              },
                              "variantsV2": {
                                
                              },
                              "itemAttribute": {
                                "vegClassifier": "VEG"
                              },
                              "ribbon": {
                                
                              },
                              "type": "ITEM",
                              "itemBadge": {
                                
                              },
                              "badgesV2": {
                                
                              },
                              "ratings": {
                                "aggregatedRating": {
                                  "rating": "4.0",
                                  "ratingCount": "27 ratings",
                                  "ratingCountV2": "27"
                                }
                              }
                            },
                            "analytics": {
                              
                            },
                            "hideRestaurantDetails": true
                          }
                        },
                        {
                          "card": {
                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            "info": {
                              "id": "87139989",
                              "name": "Veg Manchurian Dry",
                              "category": "Starters",
                              "description": "|Veg Manchurian dry is a crispy starter snack of fried veg balls tossed in the spicy, sweet, tangy Manchurian sauce|",
                              "isVeg": 1,
                              "price": 19500,
                              "variants": {
                                
                              },
                              "variantsV2": {
                                
                              },
                              "addons": [
                                {
                                  "groupId": "47712323",
                                  "groupName": "Customize",
                                  "choices": [
                                    {
                                      "id": "33716347",
                                      "name": "Regular",
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "33716346",
                                      "name": "Jain Preparation",
                                      "price": 1000,
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    }
                                  ],
                                  "maxAddons": 1,
                                  "maxFreeAddons": -1
                                },
                                {
                                  "groupId": "108508103",
                                  "groupName": "Extra",
                                  "choices": [
                                    {
                                      "id": "98793748",
                                      "name": "Apple Mojito @15% Off!",
                                      "price": 12750,
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "98793749",
                                      "name": "Cold Coffee With Ice Cream @15% Off!",
                                      "price": 12750,
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    }
                                  ],
                                  "maxAddons": 2,
                                  "maxFreeAddons": -1
                                }
                              ],
                              "itemAttribute": {
                                "vegClassifier": "VEG"
                              },
                              "ribbon": {
                                
                              },
                              "type": "ITEM",
                              "itemBadge": {
                                
                              },
                              "badgesV2": {
                                
                              },
                              "ratings": {
                                "aggregatedRating": {
                                  "rating": "4.4",
                                  "ratingCount": "355 ratings",
                                  "ratingCountV2": "355"
                                }
                              }
                            },
                            "analytics": {
                              
                            },
                            "hideRestaurantDetails": true
                          }
                        },
                        {
                          "card": {
                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            "info": {
                              "id": "87139964",
                              "name": "Veg Hara Bhara Kabab",
                              "category": "Starters",
                              "description": "| Medium spicy ||Hara bhara kabab are pan-fried spiced patties made with a mix of spinach, green peas and potatoes.",
                              "isVeg": 1,
                              "price": 19500,
                              "variants": {
                                
                              },
                              "variantsV2": {
                                
                              },
                              "addons": [
                                {
                                  "groupId": "47712296",
                                  "groupName": "Customize",
                                  "choices": [
                                    {
                                      "id": "33716347",
                                      "name": "Regular",
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "33716346",
                                      "name": "Jain Preparation",
                                      "price": 1000,
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    }
                                  ],
                                  "maxAddons": 1,
                                  "maxFreeAddons": -1
                                }
                              ],
                              "itemAttribute": {
                                "vegClassifier": "VEG"
                              },
                              "ribbon": {
                                
                              },
                              "type": "ITEM",
                              "itemBadge": {
                                
                              },
                              "badgesV2": {
                                
                              },
                              "ratings": {
                                "aggregatedRating": {
                                  "rating": "4.4",
                                  "ratingCount": "104 ratings",
                                  "ratingCountV2": "104"
                                }
                              }
                            },
                            "analytics": {
                              
                            },
                            "hideRestaurantDetails": true
                          }
                        },
                        {
                          "card": {
                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            "info": {
                              "id": "87139985",
                              "name": "Veg 65",
                              "category": "Starters",
                              "description": "|Succulent veg chunks dipped in a seasoned batter and fried to golden perfection served with a dip|",
                              "isVeg": 1,
                              "price": 18500,
                              "variants": {
                                
                              },
                              "variantsV2": {
                                
                              },
                              "addons": [
                                {
                                  "groupId": "47712319",
                                  "groupName": "Customize",
                                  "choices": [
                                    {
                                      "id": "33716347",
                                      "name": "Regular",
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "33716346",
                                      "name": "Jain Preparation",
                                      "price": 1000,
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    }
                                  ],
                                  "maxAddons": 1,
                                  "maxFreeAddons": -1
                                }
                              ],
                              "itemAttribute": {
                                "vegClassifier": "VEG"
                              },
                              "ribbon": {
                                
                              },
                              "type": "ITEM",
                              "itemBadge": {
                                
                              },
                              "badgesV2": {
                                
                              },
                              "ratings": {
                                "aggregatedRating": {
                                  "rating": "4.3",
                                  "ratingCount": "111 ratings",
                                  "ratingCountV2": "111"
                                }
                              }
                            },
                            "analytics": {
                              
                            },
                            "hideRestaurantDetails": true
                          }
                        },
                        {
                          "card": {
                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            "info": {
                              "id": "87139981",
                              "name": "Spring Roll",
                              "category": "Starters",
                              "description": "| Serves 1 | Medium Spicy | A Deep Fried Roll, Stuffed With Vegetables, Noodles And Sauces, Served With Spicy Schezwan Sauce | Served with Salad |",
                              "isVeg": 1,
                              "price": 19500,
                              "variants": {
                                
                              },
                              "variantsV2": {
                                
                              },
                              "addons": [
                                {
                                  "groupId": "47712312",
                                  "groupName": "Customize",
                                  "choices": [
                                    {
                                      "id": "33716347",
                                      "name": "Regular",
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "33716346",
                                      "name": "Jain Preparation",
                                      "price": 1000,
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    }
                                  ],
                                  "maxAddons": 1,
                                  "maxFreeAddons": -1
                                },
                                {
                                  "groupId": "108508101",
                                  "groupName": "Extra",
                                  "choices": [
                                    {
                                      "id": "98793748",
                                      "name": "Apple Mojito @15% Off!",
                                      "price": 12750,
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "98793749",
                                      "name": "Cold Coffee With Ice Cream @15% Off!",
                                      "price": 12750,
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    }
                                  ],
                                  "maxAddons": 2,
                                  "maxFreeAddons": -1
                                }
                              ],
                              "itemAttribute": {
                                "vegClassifier": "VEG"
                              },
                              "ribbon": {
                                
                              },
                              "type": "ITEM",
                              "itemBadge": {
                                
                              },
                              "badgesV2": {
                                
                              },
                              "ratings": {
                                "aggregatedRating": {
                                  "rating": "3.9",
                                  "ratingCount": "80 ratings",
                                  "ratingCountV2": "80"
                                }
                              }
                            },
                            "analytics": {
                              
                            },
                            "hideRestaurantDetails": true
                          }
                        },
                        {
                          "card": {
                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            "info": {
                              "id": "87139962",
                              "name": "Finger Chips",
                              "category": "Starters",
                              "description": "Potato Figures Deep Fried Seasoned With Chaat Masala And Served With Tomato Ketchup",
                              "isVeg": 1,
                              "price": 11500,
                              "variants": {
                                
                              },
                              "variantsV2": {
                                
                              },
                              "itemAttribute": {
                                "vegClassifier": "VEG"
                              },
                              "ribbon": {
                                
                              },
                              "type": "ITEM",
                              "itemBadge": {
                                
                              },
                              "badgesV2": {
                                
                              },
                              "ratings": {
                                "aggregatedRating": {
                                  "rating": "4.5",
                                  "ratingCount": "29 ratings",
                                  "ratingCountV2": "29"
                                }
                              }
                            },
                            "analytics": {
                              
                            },
                            "hideRestaurantDetails": true
                          }
                        }
                      ]
                    }
                  }
                },
                {
                  "card": {
                    "card": {
                      "@type": "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory",
                      "title": "Fried Rice And Noodles",
                      "categories": [
                        {
                          "title": "Rice And Noodles",
                          "itemCards": [
                            {
                              "card": {
                                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                "info": {
                                  "id": "87140133",
                                  "name": "Mushroom Fried Rice",
                                  "category": "Fried Rice And Noodles",
                                  "description": "Rice Tossed Along With Sautted Mushroom Along With Sauces And Spices.",
                                  "isVeg": 1,
                                  "price": 19500,
                                  "variants": {
                                    
                                  },
                                  "variantsV2": {
                                    
                                  },
                                  "addons": [
                                    {
                                      "groupId": "47712411",
                                      "groupName": "Customize",
                                      "choices": [
                                        {
                                          "id": "33716347",
                                          "name": "Regular",
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        },
                                        {
                                          "id": "33716346",
                                          "name": "Jain Preparation",
                                          "price": 1000,
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        }
                                      ],
                                      "maxAddons": 1,
                                      "maxFreeAddons": -1
                                    },
                                    {
                                      "groupId": "108508107",
                                      "groupName": "Extra",
                                      "choices": [
                                        {
                                          "id": "98793748",
                                          "name": "Apple Mojito @15% Off!",
                                          "price": 12750,
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        },
                                        {
                                          "id": "98793749",
                                          "name": "Cold Coffee With Ice Cream @15% Off!",
                                          "price": 12750,
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        }
                                      ],
                                      "maxAddons": 2,
                                      "maxFreeAddons": -1
                                    }
                                  ],
                                  "itemAttribute": {
                                    "vegClassifier": "VEG"
                                  },
                                  "ribbon": {
                                    
                                  },
                                  "type": "ITEM",
                                  "itemBadge": {
                                    
                                  },
                                  "badgesV2": {
                                    
                                  },
                                  "ratings": {
                                    "aggregatedRating": {
                                      "rating": "4.2",
                                      "ratingCount": "89 ratings",
                                      "ratingCountV2": "89"
                                    }
                                  }
                                },
                                "analytics": {
                                  
                                },
                                "hideRestaurantDetails": true
                              }
                            },
                            {
                              "card": {
                                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                "info": {
                                  "id": "87140140",
                                  "name": "Schezwan Fried Rice",
                                  "category": "Fried Rice And Noodles",
                                  "description": "[Spicy] Boiled Rice Tossed In Spicy Schezwan Sauce And Tossed Along With Veggies And Spices",
                                  "isVeg": 1,
                                  "price": 19500,
                                  "variants": {
                                    
                                  },
                                  "variantsV2": {
                                    
                                  },
                                  "addons": [
                                    {
                                      "groupId": "47712412",
                                      "groupName": "Customize",
                                      "choices": [
                                        {
                                          "id": "33716347",
                                          "name": "Regular",
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        },
                                        {
                                          "id": "33716346",
                                          "name": "Jain Preparation",
                                          "price": 1000,
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        }
                                      ],
                                      "maxAddons": 1,
                                      "maxFreeAddons": -1
                                    }
                                  ],
                                  "itemAttribute": {
                                    "vegClassifier": "VEG"
                                  },
                                  "ribbon": {
                                    
                                  },
                                  "type": "ITEM",
                                  "itemBadge": {
                                    
                                  },
                                  "badgesV2": {
                                    
                                  },
                                  "ratings": {
                                    "aggregatedRating": {
                                      "rating": "4.5",
                                      "ratingCount": "47 ratings",
                                      "ratingCountV2": "47"
                                    }
                                  }
                                },
                                "analytics": {
                                  
                                },
                                "hideRestaurantDetails": true
                              }
                            },
                            {
                              "card": {
                                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                "info": {
                                  "id": "103533664",
                                  "name": "Singapuri Fried Rice",
                                  "category": "Fried Rice And Noodles",
                                  "isVeg": 1,
                                  "price": 19500,
                                  "variants": {
                                    
                                  },
                                  "variantsV2": {
                                    
                                  },
                                  "itemAttribute": {
                                    "vegClassifier": "VEG"
                                  },
                                  "ribbon": {
                                    
                                  },
                                  "type": "ITEM",
                                  "itemBadge": {
                                    
                                  },
                                  "badgesV2": {
                                    
                                  },
                                  "ratings": {
                                    "aggregatedRating": {
                                      "rating": "4.6",
                                      "ratingCount": "29 ratings",
                                      "ratingCountV2": "29"
                                    }
                                  }
                                },
                                "analytics": {
                                  
                                },
                                "hideRestaurantDetails": true
                              }
                            },
                            {
                              "card": {
                                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                "info": {
                                  "id": "87140100",
                                  "name": "Chilly Garlic Noodles",
                                  "category": "Fried Rice And Noodles",
                                  "description": "Spicy Noodles Tossed In Hot Garlic Infused Oil, Minced Garlic And Chilles Along With Indo Chinese Sauces",
                                  "isVeg": 1,
                                  "price": 19500,
                                  "variants": {
                                    
                                  },
                                  "variantsV2": {
                                    
                                  },
                                  "addons": [
                                    {
                                      "groupId": "47712407",
                                      "groupName": "Customize",
                                      "choices": [
                                        {
                                          "id": "33716347",
                                          "name": "Regular",
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        },
                                        {
                                          "id": "33716346",
                                          "name": "Jain Preparation",
                                          "price": 1000,
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        }
                                      ],
                                      "maxAddons": 1,
                                      "maxFreeAddons": -1
                                    },
                                    {
                                      "groupId": "108508106",
                                      "groupName": "Extra",
                                      "choices": [
                                        {
                                          "id": "98793748",
                                          "name": "Apple Mojito @15% Off!",
                                          "price": 12750,
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        },
                                        {
                                          "id": "98793749",
                                          "name": "Cold Coffee With Ice Cream @15% Off!",
                                          "price": 12750,
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        }
                                      ],
                                      "maxAddons": 2,
                                      "maxFreeAddons": -1
                                    }
                                  ],
                                  "itemAttribute": {
                                    "vegClassifier": "VEG"
                                  },
                                  "ribbon": {
                                    
                                  },
                                  "type": "ITEM",
                                  "itemBadge": {
                                    
                                  },
                                  "badgesV2": {
                                    
                                  },
                                  "ratings": {
                                    "aggregatedRating": {
                                      "rating": "4.3",
                                      "ratingCount": "36 ratings",
                                      "ratingCountV2": "36"
                                    }
                                  }
                                },
                                "analytics": {
                                  
                                },
                                "hideRestaurantDetails": true
                              }
                            },
                            {
                              "card": {
                                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                "info": {
                                  "id": "87140145",
                                  "name": "Veg Hakka Noodles",
                                  "category": "Fried Rice And Noodles",
                                  "description": "Simple Sauteed Veggie And Boiled Noodles Tossed In Indo Chinese Sauces",
                                  "isVeg": 1,
                                  "price": 19500,
                                  "variants": {
                                    
                                  },
                                  "variantsV2": {
                                    
                                  },
                                  "addons": [
                                    {
                                      "groupId": "47712415",
                                      "groupName": "Customize",
                                      "choices": [
                                        {
                                          "id": "33716347",
                                          "name": "Regular",
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        },
                                        {
                                          "id": "33716346",
                                          "name": "Jain Preparation",
                                          "price": 1000,
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        }
                                      ],
                                      "maxAddons": 1,
                                      "maxFreeAddons": -1
                                    },
                                    {
                                      "groupId": "108508108",
                                      "groupName": "Extra",
                                      "choices": [
                                        {
                                          "id": "98793748",
                                          "name": "Apple Mojito @15% Off!",
                                          "price": 12750,
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        },
                                        {
                                          "id": "98793749",
                                          "name": "Cold Coffee With Ice Cream @15% Off!",
                                          "price": 12750,
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        }
                                      ],
                                      "maxAddons": 2,
                                      "maxFreeAddons": -1
                                    }
                                  ],
                                  "itemAttribute": {
                                    "vegClassifier": "VEG"
                                  },
                                  "ribbon": {
                                    
                                  },
                                  "type": "ITEM",
                                  "itemBadge": {
                                    
                                  },
                                  "badgesV2": {
                                    
                                  },
                                  "ratings": {
                                    "aggregatedRating": {
                                      "rating": "4.4",
                                      "ratingCount": "79 ratings",
                                      "ratingCountV2": "79"
                                    }
                                  }
                                },
                                "analytics": {
                                  
                                },
                                "hideRestaurantDetails": true
                              }
                            },
                            {
                              "card": {
                                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                "info": {
                                  "id": "87140144",
                                  "name": "Veg Fried Rice",
                                  "category": "Fried Rice And Noodles",
                                  "description": "|Fresh veggies tossed in a pan with steamed rice and flavorful spices - perfect to satisfy your hunger pangs|",
                                  "isVeg": 1,
                                  "price": 18500,
                                  "variants": {
                                    
                                  },
                                  "variantsV2": {
                                    
                                  },
                                  "addons": [
                                    {
                                      "groupId": "47712414",
                                      "groupName": "Customize",
                                      "choices": [
                                        {
                                          "id": "33716347",
                                          "name": "Regular",
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        },
                                        {
                                          "id": "33716346",
                                          "name": "Jain Preparation",
                                          "price": 1000,
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        }
                                      ],
                                      "maxAddons": 1,
                                      "maxFreeAddons": -1
                                    }
                                  ],
                                  "itemAttribute": {
                                    "vegClassifier": "VEG"
                                  },
                                  "ribbon": {
                                    
                                  },
                                  "type": "ITEM",
                                  "itemBadge": {
                                    
                                  },
                                  "badgesV2": {
                                    
                                  },
                                  "ratings": {
                                    "aggregatedRating": {
                                      "rating": "4.3",
                                      "ratingCount": "220 ratings",
                                      "ratingCountV2": "220"
                                    }
                                  }
                                },
                                "analytics": {
                                  
                                },
                                "hideRestaurantDetails": true
                              }
                            },
                            {
                              "card": {
                                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                "info": {
                                  "id": "87140142",
                                  "name": "Schezwan Noodles",
                                  "category": "Fried Rice And Noodles",
                                  "description": "[Spicy] A Spicy Chilly Tangy Sauce Made From Schezwan Chilly And Noddles Tossed Along With Veggies",
                                  "isVeg": 1,
                                  "price": 19500,
                                  "variants": {
                                    
                                  },
                                  "variantsV2": {
                                    
                                  },
                                  "addons": [
                                    {
                                      "groupId": "47712413",
                                      "groupName": "Customize",
                                      "choices": [
                                        {
                                          "id": "33716347",
                                          "name": "Regular",
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        },
                                        {
                                          "id": "33716346",
                                          "name": "Jain Preparation",
                                          "price": 1000,
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        }
                                      ],
                                      "maxAddons": 1,
                                      "maxFreeAddons": -1
                                    }
                                  ],
                                  "itemAttribute": {
                                    "vegClassifier": "VEG"
                                  },
                                  "ribbon": {
                                    
                                  },
                                  "type": "ITEM",
                                  "itemBadge": {
                                    
                                  },
                                  "badgesV2": {
                                    
                                  },
                                  "ratings": {
                                    "aggregatedRating": {
                                      "rating": "4.3",
                                      "ratingCount": "19 ratings",
                                      "ratingCountV2": "19"
                                    }
                                  }
                                },
                                "analytics": {
                                  
                                },
                                "hideRestaurantDetails": true
                              }
                            },
                            {
                              "card": {
                                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                "info": {
                                  "id": "87140110",
                                  "name": "Chinese Bhel",
                                  "category": "Fried Rice And Noodles",
                                  "description": "|Fried crunchy noodles with asian veggies and tossed in chinese sauces|",
                                  "isVeg": 1,
                                  "price": 19500,
                                  "variants": {
                                    
                                  },
                                  "variantsV2": {
                                    
                                  },
                                  "addons": [
                                    {
                                      "groupId": "47712409",
                                      "groupName": "Customize",
                                      "choices": [
                                        {
                                          "id": "33716347",
                                          "name": "Regular",
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        },
                                        {
                                          "id": "33716346",
                                          "name": "Jain Preparation",
                                          "price": 1000,
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        }
                                      ],
                                      "maxAddons": 1,
                                      "maxFreeAddons": -1
                                    }
                                  ],
                                  "itemAttribute": {
                                    "vegClassifier": "VEG"
                                  },
                                  "ribbon": {
                                    
                                  },
                                  "type": "ITEM",
                                  "itemBadge": {
                                    
                                  },
                                  "badgesV2": {
                                    
                                  },
                                  "ratings": {
                                    "aggregatedRating": {
                                      "rating": "4.4",
                                      "ratingCount": "127 ratings",
                                      "ratingCountV2": "127"
                                    }
                                  }
                                },
                                "analytics": {
                                  
                                },
                                "hideRestaurantDetails": true
                              }
                            },
                            {
                              "card": {
                                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                "info": {
                                  "id": "103533673",
                                  "name": "Singapuri Noodles",
                                  "category": "Fried Rice And Noodles",
                                  "isVeg": 1,
                                  "price": 19500,
                                  "variants": {
                                    
                                  },
                                  "variantsV2": {
                                    
                                  },
                                  "itemAttribute": {
                                    "vegClassifier": "VEG"
                                  },
                                  "ribbon": {
                                    
                                  },
                                  "type": "ITEM",
                                  "itemBadge": {
                                    
                                  },
                                  "badgesV2": {
                                    
                                  },
                                  "ratings": {
                                    "aggregatedRating": {
                                      "rating": "3.8",
                                      "ratingCount": "5 ratings",
                                      "ratingCountV2": "5"
                                    }
                                  }
                                },
                                "analytics": {
                                  
                                },
                                "hideRestaurantDetails": true
                              }
                            }
                          ]
                        }
                      ]
                    }
                  }
                },
                {
                  "card": {
                    "card": {
                      "@type": "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                      "title": "Rice And Biryani",
                      "itemCards": [
                        {
                          "card": {
                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            "info": {
                              "id": "87140032",
                              "name": "Paneer Pulao",
                              "category": "Rice And Biryani",
                              "isVeg": 1,
                              "price": 19500,
                              "variants": {
                                
                              },
                              "variantsV2": {
                                
                              },
                              "addons": [
                                {
                                  "groupId": "47712397",
                                  "groupName": "Customize",
                                  "choices": [
                                    {
                                      "id": "33716347",
                                      "name": "Regular",
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "33716346",
                                      "name": "Jain Preparation",
                                      "price": 1000,
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    }
                                  ],
                                  "maxAddons": 1,
                                  "maxFreeAddons": -1
                                }
                              ],
                              "itemAttribute": {
                                "vegClassifier": "VEG"
                              },
                              "ribbon": {
                                "text": "Bestseller",
                                "textColor": "#ffffff",
                                "topBackgroundColor": "#d53d4c",
                                "bottomBackgroundColor": "#b02331"
                              },
                              "type": "ITEM",
                              "itemBadge": {
                                
                              },
                              "badgesV2": {
                                
                              },
                              "isBestseller": true,
                              "ratings": {
                                "aggregatedRating": {
                                  "rating": "4.4",
                                  "ratingCount": "287 ratings",
                                  "ratingCountV2": "287"
                                }
                              }
                            },
                            "analytics": {
                              
                            },
                            "hideRestaurantDetails": true
                          }
                        },
                        {
                          "card": {
                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            "info": {
                              "id": "87140030",
                              "name": "Jeera Rice",
                              "category": "Rice And Biryani",
                              "description": "|Aromatic rice cooked in a tempering of cumin and whole spices|",
                              "isVeg": 1,
                              "price": 14000,
                              "variants": {
                                
                              },
                              "variantsV2": {
                                
                              },
                              "addons": [
                                {
                                  "groupId": "47712395",
                                  "groupName": "Customize",
                                  "choices": [
                                    {
                                      "id": "33716347",
                                      "name": "Regular",
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "33716346",
                                      "name": "Jain Preparation",
                                      "price": 1000,
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    }
                                  ],
                                  "maxAddons": 1,
                                  "maxFreeAddons": -1
                                }
                              ],
                              "itemAttribute": {
                                "vegClassifier": "VEG"
                              },
                              "ribbon": {
                                "text": "Bestseller",
                                "textColor": "#ffffff",
                                "topBackgroundColor": "#d53d4c",
                                "bottomBackgroundColor": "#b02331"
                              },
                              "type": "ITEM",
                              "itemBadge": {
                                
                              },
                              "badgesV2": {
                                
                              },
                              "isBestseller": true,
                              "ratings": {
                                "aggregatedRating": {
                                  "rating": "4.5",
                                  "ratingCount": "605 ratings",
                                  "ratingCountV2": "605"
                                }
                              }
                            },
                            "analytics": {
                              
                            },
                            "hideRestaurantDetails": true
                          }
                        },
                        {
                          "card": {
                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            "info": {
                              "id": "103533350",
                              "name": "Veg. Biryani",
                              "category": "Rice And Biryani",
                              "isVeg": 1,
                              "price": 21500,
                              "variants": {
                                
                              },
                              "variantsV2": {
                                
                              },
                              "itemAttribute": {
                                "vegClassifier": "VEG"
                              },
                              "ribbon": {
                                
                              },
                              "type": "ITEM",
                              "itemBadge": {
                                
                              },
                              "badgesV2": {
                                
                              },
                              "ratings": {
                                "aggregatedRating": {
                                  "rating": "4.4",
                                  "ratingCount": "85 ratings",
                                  "ratingCountV2": "85"
                                }
                              }
                            },
                            "analytics": {
                              
                            },
                            "hideRestaurantDetails": true
                          }
                        },
                        {
                          "card": {
                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            "info": {
                              "id": "87140038",
                              "name": "Veg Hydrabadi Biryani",
                              "category": "Rice And Biryani",
                              "description": "| Nutritious biriyani, layered with select spices and packed with vegetables|",
                              "isVeg": 1,
                              "price": 21500,
                              "variants": {
                                
                              },
                              "variantsV2": {
                                
                              },
                              "addons": [
                                {
                                  "groupId": "47712403",
                                  "groupName": "Customize",
                                  "choices": [
                                    {
                                      "id": "33716347",
                                      "name": "Regular",
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "33716346",
                                      "name": "Jain Preparation",
                                      "price": 1000,
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    }
                                  ],
                                  "maxAddons": 1,
                                  "maxFreeAddons": -1
                                },
                                {
                                  "groupId": "108508104",
                                  "groupName": "Extra",
                                  "choices": [
                                    {
                                      "id": "98793748",
                                      "name": "Apple Mojito @15% Off!",
                                      "price": 12750,
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "98793749",
                                      "name": "Cold Coffee With Ice Cream @15% Off!",
                                      "price": 12750,
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    }
                                  ],
                                  "maxAddons": 2,
                                  "maxFreeAddons": -1
                                }
                              ],
                              "itemAttribute": {
                                "vegClassifier": "VEG"
                              },
                              "ribbon": {
                                
                              },
                              "type": "ITEM",
                              "itemBadge": {
                                
                              },
                              "badgesV2": {
                                
                              },
                              "ratings": {
                                "aggregatedRating": {
                                  "rating": "4.1",
                                  "ratingCount": "309 ratings",
                                  "ratingCountV2": "309"
                                }
                              }
                            },
                            "analytics": {
                              
                            },
                            "hideRestaurantDetails": true
                          }
                        },
                        {
                          "card": {
                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            "info": {
                              "id": "87140041",
                              "name": "Veg Pulao",
                              "category": "Rice And Biryani",
                              "isVeg": 1,
                              "price": 15500,
                              "variants": {
                                
                              },
                              "variantsV2": {
                                
                              },
                              "addons": [
                                {
                                  "groupId": "47712405",
                                  "groupName": "Customize",
                                  "choices": [
                                    {
                                      "id": "33716347",
                                      "name": "Regular",
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "33716346",
                                      "name": "Jain Preparation",
                                      "price": 1000,
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    }
                                  ],
                                  "maxAddons": 1,
                                  "maxFreeAddons": -1
                                }
                              ],
                              "itemAttribute": {
                                "vegClassifier": "VEG"
                              },
                              "ribbon": {
                                
                              },
                              "type": "ITEM",
                              "itemBadge": {
                                
                              },
                              "badgesV2": {
                                
                              },
                              "ratings": {
                                "aggregatedRating": {
                                  "rating": "4.6",
                                  "ratingCount": "269 ratings",
                                  "ratingCountV2": "269"
                                }
                              }
                            },
                            "analytics": {
                              
                            },
                            "hideRestaurantDetails": true
                          }
                        },
                        {
                          "card": {
                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            "info": {
                              "id": "87140033",
                              "name": "Peas Pulao",
                              "category": "Rice And Biryani",
                              "isVeg": 1,
                              "price": 15500,
                              "variants": {
                                
                              },
                              "variantsV2": {
                                
                              },
                              "addons": [
                                {
                                  "groupId": "47712398",
                                  "groupName": "Customize",
                                  "choices": [
                                    {
                                      "id": "33716347",
                                      "name": "Regular",
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "33716346",
                                      "name": "Jain Preparation",
                                      "price": 1000,
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    }
                                  ],
                                  "maxAddons": 1,
                                  "maxFreeAddons": -1
                                }
                              ],
                              "itemAttribute": {
                                "vegClassifier": "VEG"
                              },
                              "ribbon": {
                                
                              },
                              "type": "ITEM",
                              "itemBadge": {
                                
                              },
                              "badgesV2": {
                                
                              },
                              "ratings": {
                                "aggregatedRating": {
                                  "rating": "4.0",
                                  "ratingCount": "10 ratings",
                                  "ratingCountV2": "10"
                                }
                              }
                            },
                            "analytics": {
                              
                            },
                            "hideRestaurantDetails": true
                          }
                        }
                      ]
                    }
                  }
                },
                {
                  "card": {
                    "card": {
                      "@type": "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory",
                      "title": "Soups",
                      "categories": [
                        {
                          "title": "Soup",
                          "itemCards": [
                            {
                              "card": {
                                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                "info": {
                                  "id": "87139856",
                                  "name": "Lemon Coriander Soup",
                                  "category": "Soups",
                                  "isVeg": 1,
                                  "price": 17000,
                                  "variants": {
                                    
                                  },
                                  "variantsV2": {
                                    
                                  },
                                  "addons": [
                                    {
                                      "groupId": "47712117",
                                      "groupName": "Customize",
                                      "choices": [
                                        {
                                          "id": "33716347",
                                          "name": "Regular",
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        },
                                        {
                                          "id": "33716346",
                                          "name": "Jain Preparation",
                                          "price": 1000,
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        }
                                      ],
                                      "maxAddons": 1,
                                      "maxFreeAddons": -1
                                    }
                                  ],
                                  "itemAttribute": {
                                    "vegClassifier": "VEG"
                                  },
                                  "ribbon": {
                                    
                                  },
                                  "type": "ITEM",
                                  "itemBadge": {
                                    
                                  },
                                  "badgesV2": {
                                    
                                  },
                                  "ratings": {
                                    "aggregatedRating": {
                                      "rating": "4.7",
                                      "ratingCount": "28 ratings",
                                      "ratingCountV2": "28"
                                    }
                                  }
                                },
                                "analytics": {
                                  
                                },
                                "hideRestaurantDetails": true
                              }
                            },
                            {
                              "card": {
                                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                "info": {
                                  "id": "87139859",
                                  "name": "Mushroom Soup",
                                  "category": "Soups",
                                  "description": "A Mushroom Broth Seasoned With Herbs And Some Sauce",
                                  "isVeg": 1,
                                  "price": 16000,
                                  "variants": {
                                    
                                  },
                                  "variantsV2": {
                                    
                                  },
                                  "addons": [
                                    {
                                      "groupId": "47712122",
                                      "groupName": "Customize",
                                      "choices": [
                                        {
                                          "id": "33716347",
                                          "name": "Regular",
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        },
                                        {
                                          "id": "33716346",
                                          "name": "Jain Preparation",
                                          "price": 1000,
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        }
                                      ],
                                      "maxAddons": 1,
                                      "maxFreeAddons": -1
                                    }
                                  ],
                                  "itemAttribute": {
                                    "vegClassifier": "VEG"
                                  },
                                  "ribbon": {
                                    
                                  },
                                  "type": "ITEM",
                                  "itemBadge": {
                                    
                                  },
                                  "badgesV2": {
                                    
                                  },
                                  "ratings": {
                                    "aggregatedRating": {
                                      "rating": "4.1",
                                      "ratingCount": "15 ratings",
                                      "ratingCountV2": "15"
                                    }
                                  }
                                },
                                "analytics": {
                                  
                                },
                                "hideRestaurantDetails": true
                              }
                            },
                            {
                              "card": {
                                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                "info": {
                                  "id": "87139863",
                                  "name": "Veg Manchow Soup",
                                  "category": "Soups",
                                  "description": "| Serves 1 || A delicious hot and spicy, thick soup made from mixed vegetables and topped with fried noodles.",
                                  "isVeg": 1,
                                  "price": 14000,
                                  "variants": {
                                    
                                  },
                                  "variantsV2": {
                                    
                                  },
                                  "addons": [
                                    {
                                      "groupId": "47712130",
                                      "groupName": "Customize",
                                      "choices": [
                                        {
                                          "id": "33716347",
                                          "name": "Regular",
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        },
                                        {
                                          "id": "33716346",
                                          "name": "Jain Preparation",
                                          "price": 1000,
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        }
                                      ],
                                      "maxAddons": 1,
                                      "maxFreeAddons": -1
                                    }
                                  ],
                                  "itemAttribute": {
                                    "vegClassifier": "VEG"
                                  },
                                  "ribbon": {
                                    
                                  },
                                  "type": "ITEM",
                                  "itemBadge": {
                                    
                                  },
                                  "badgesV2": {
                                    
                                  },
                                  "ratings": {
                                    "aggregatedRating": {
                                      "rating": "4.3",
                                      "ratingCount": "60 ratings",
                                      "ratingCountV2": "60"
                                    }
                                  }
                                },
                                "analytics": {
                                  
                                },
                                "hideRestaurantDetails": true
                              }
                            },
                            {
                              "card": {
                                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                "info": {
                                  "id": "87139862",
                                  "name": "Rajma & Pasta Soup",
                                  "category": "Soups",
                                  "description": "A Chunky Soup Made From Rajma And Pasta Along With Veggies And Garnished With Cheese And Fresh Greens",
                                  "isVeg": 1,
                                  "price": 17000,
                                  "variants": {
                                    
                                  },
                                  "variantsV2": {
                                    
                                  },
                                  "addons": [
                                    {
                                      "groupId": "47712127",
                                      "groupName": "Customize",
                                      "choices": [
                                        {
                                          "id": "33716347",
                                          "name": "Regular",
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        },
                                        {
                                          "id": "33716346",
                                          "name": "Jain Preparation",
                                          "price": 1000,
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        }
                                      ],
                                      "maxAddons": 1,
                                      "maxFreeAddons": -1
                                    }
                                  ],
                                  "itemAttribute": {
                                    "vegClassifier": "VEG"
                                  },
                                  "ribbon": {
                                    
                                  },
                                  "type": "ITEM",
                                  "itemBadge": {
                                    
                                  },
                                  "badgesV2": {
                                    
                                  },
                                  "ratings": {
                                    "aggregatedRating": {
                                      "rating": "4.4",
                                      "ratingCount": "4 ratings",
                                      "ratingCountV2": "4"
                                    }
                                  }
                                },
                                "analytics": {
                                  
                                },
                                "hideRestaurantDetails": true
                              }
                            },
                            {
                              "card": {
                                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                "info": {
                                  "id": "20014915",
                                  "name": "French Onion Soup",
                                  "category": "Soups",
                                  "isVeg": 1,
                                  "price": 17000,
                                  "variants": {
                                    
                                  },
                                  "variantsV2": {
                                    
                                  },
                                  "itemAttribute": {
                                    "vegClassifier": "VEG"
                                  },
                                  "ribbon": {
                                    
                                  },
                                  "type": "ITEM",
                                  "itemBadge": {
                                    
                                  },
                                  "badgesV2": {
                                    
                                  },
                                  "ratings": {
                                    "aggregatedRating": {
                                      
                                    }
                                  }
                                },
                                "analytics": {
                                  
                                },
                                "hideRestaurantDetails": true
                              }
                            },
                            {
                              "card": {
                                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                "info": {
                                  "id": "87139857",
                                  "name": "Minestrone Soup",
                                  "category": "Soups",
                                  "description": "Italian Vegetable Soup Made With Tomato Broth And Pasta And Topped With Cheese.",
                                  "isVeg": 1,
                                  "price": 17000,
                                  "variants": {
                                    
                                  },
                                  "variantsV2": {
                                    
                                  },
                                  "addons": [
                                    {
                                      "groupId": "47712119",
                                      "groupName": "Customize",
                                      "choices": [
                                        {
                                          "id": "33716347",
                                          "name": "Regular",
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        },
                                        {
                                          "id": "33716346",
                                          "name": "Jain Preparation",
                                          "price": 1000,
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        }
                                      ],
                                      "maxAddons": 1,
                                      "maxFreeAddons": -1
                                    }
                                  ],
                                  "itemAttribute": {
                                    "vegClassifier": "VEG"
                                  },
                                  "ribbon": {
                                    
                                  },
                                  "type": "ITEM",
                                  "itemBadge": {
                                    
                                  },
                                  "badgesV2": {
                                    
                                  },
                                  "ratings": {
                                    "aggregatedRating": {
                                      "rating": "3.3",
                                      "ratingCount": "8 ratings",
                                      "ratingCountV2": "8"
                                    }
                                  }
                                },
                                "analytics": {
                                  
                                },
                                "hideRestaurantDetails": true
                              }
                            },
                            {
                              "card": {
                                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                "info": {
                                  "id": "87139860",
                                  "name": "Palak Corn Shorba",
                                  "category": "Soups",
                                  "description": "Indian Style Broth Made From Fresh Spinach And Corn Puree And Seasoned With Indian Spices.",
                                  "isVeg": 1,
                                  "price": 17000,
                                  "variants": {
                                    
                                  },
                                  "variantsV2": {
                                    
                                  },
                                  "addons": [
                                    {
                                      "groupId": "47712124",
                                      "groupName": "Customize",
                                      "choices": [
                                        {
                                          "id": "33716347",
                                          "name": "Regular",
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        },
                                        {
                                          "id": "33716346",
                                          "name": "Jain Preparation",
                                          "price": 1000,
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        }
                                      ],
                                      "maxAddons": 1,
                                      "maxFreeAddons": -1
                                    }
                                  ],
                                  "itemAttribute": {
                                    "vegClassifier": "VEG"
                                  },
                                  "ribbon": {
                                    
                                  },
                                  "type": "ITEM",
                                  "itemBadge": {
                                    
                                  },
                                  "badgesV2": {
                                    
                                  },
                                  "ratings": {
                                    "aggregatedRating": {
                                      "rating": "4.6",
                                      "ratingCount": "3 ratings",
                                      "ratingCountV2": "3"
                                    }
                                  }
                                },
                                "analytics": {
                                  
                                },
                                "hideRestaurantDetails": true
                              }
                            },
                            {
                              "card": {
                                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                "info": {
                                  "id": "87139850",
                                  "name": "Aloo Pyaz Da Shorba",
                                  "category": "Soups",
                                  "description": "A Delicious Shorba Made From Indian Spices,Onion And Potato Puree",
                                  "isVeg": 1,
                                  "price": 16000,
                                  "variants": {
                                    
                                  },
                                  "variantsV2": {
                                    
                                  },
                                  "addons": [
                                    {
                                      "groupId": "47712103",
                                      "groupName": "Customize",
                                      "choices": [
                                        {
                                          "id": "33716347",
                                          "name": "Regular",
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        },
                                        {
                                          "id": "33716346",
                                          "name": "Jain Preparation",
                                          "price": 1000,
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        }
                                      ],
                                      "maxAddons": 1,
                                      "maxFreeAddons": -1
                                    }
                                  ],
                                  "itemAttribute": {
                                    "vegClassifier": "VEG"
                                  },
                                  "ribbon": {
                                    
                                  },
                                  "type": "ITEM",
                                  "itemBadge": {
                                    
                                  },
                                  "badgesV2": {
                                    
                                  },
                                  "ratings": {
                                    "aggregatedRating": {
                                      "rating": "4.9",
                                      "ratingCount": "4 ratings",
                                      "ratingCountV2": "4"
                                    }
                                  }
                                },
                                "analytics": {
                                  
                                },
                                "hideRestaurantDetails": true
                              }
                            },
                            {
                              "card": {
                                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                "info": {
                                  "id": "87139854",
                                  "name": "Cream Of Tomato Soup",
                                  "category": "Soups",
                                  "description": "A Rich Tangy And Cream Tomato Soup Served With Golden Fried Croutonv.",
                                  "isVeg": 1,
                                  "price": 14000,
                                  "variants": {
                                    
                                  },
                                  "variantsV2": {
                                    
                                  },
                                  "addons": [
                                    {
                                      "groupId": "47712111",
                                      "groupName": "Customize",
                                      "choices": [
                                        {
                                          "id": "33716347",
                                          "name": "Regular",
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        },
                                        {
                                          "id": "33716346",
                                          "name": "Jain Preparation",
                                          "price": 1000,
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        }
                                      ],
                                      "maxAddons": 1,
                                      "maxFreeAddons": -1
                                    }
                                  ],
                                  "itemAttribute": {
                                    "vegClassifier": "VEG"
                                  },
                                  "ribbon": {
                                    
                                  },
                                  "type": "ITEM",
                                  "itemBadge": {
                                    
                                  },
                                  "badgesV2": {
                                    
                                  },
                                  "ratings": {
                                    "aggregatedRating": {
                                      "rating": "4.4",
                                      "ratingCount": "42 ratings",
                                      "ratingCountV2": "42"
                                    }
                                  }
                                },
                                "analytics": {
                                  
                                },
                                "hideRestaurantDetails": true
                              }
                            },
                            {
                              "card": {
                                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                "info": {
                                  "id": "87139855",
                                  "name": "Hot And Sour Soup",
                                  "category": "Soups",
                                  "description": "Spicy] Chinese Vegetable Broth Soup With Delicious Flavours Of Chinese Sauces.",
                                  "isVeg": 1,
                                  "price": 14000,
                                  "variants": {
                                    
                                  },
                                  "variantsV2": {
                                    
                                  },
                                  "addons": [
                                    {
                                      "groupId": "47712114",
                                      "groupName": "Customize",
                                      "choices": [
                                        {
                                          "id": "33716347",
                                          "name": "Regular",
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        },
                                        {
                                          "id": "33716346",
                                          "name": "Jain Preparation",
                                          "price": 1000,
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        }
                                      ],
                                      "maxAddons": 1,
                                      "maxFreeAddons": -1
                                    }
                                  ],
                                  "itemAttribute": {
                                    "vegClassifier": "VEG"
                                  },
                                  "ribbon": {
                                    
                                  },
                                  "type": "ITEM",
                                  "itemBadge": {
                                    
                                  },
                                  "badgesV2": {
                                    
                                  },
                                  "ratings": {
                                    "aggregatedRating": {
                                      "rating": "3.8",
                                      "ratingCount": "16 ratings",
                                      "ratingCountV2": "16"
                                    }
                                  }
                                },
                                "analytics": {
                                  
                                },
                                "hideRestaurantDetails": true
                              }
                            },
                            {
                              "card": {
                                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                "info": {
                                  "id": "103533581",
                                  "name": "Maxican Chilly Bean",
                                  "category": "Soups",
                                  "isVeg": 1,
                                  "price": 17000,
                                  "variants": {
                                    
                                  },
                                  "variantsV2": {
                                    
                                  },
                                  "itemAttribute": {
                                    "vegClassifier": "VEG"
                                  },
                                  "ribbon": {
                                    
                                  },
                                  "type": "ITEM",
                                  "itemBadge": {
                                    
                                  },
                                  "badgesV2": {
                                    
                                  },
                                  "ratings": {
                                    "aggregatedRating": {
                                      
                                    }
                                  }
                                },
                                "analytics": {
                                  
                                },
                                "hideRestaurantDetails": true
                              }
                            }
                          ]
                        }
                      ]
                    }
                  }
                },
                {
                  "card": {
                    "card": {
                      "@type": "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory",
                      "title": "Breads",
                      "categories": [
                        {
                          "title": "Rotia",
                          "itemCards": [
                            {
                              "card": {
                                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                "info": {
                                  "id": "87139995",
                                  "name": "Butter Naan",
                                  "category": "Breads",
                                  "description": "| 1 Pc || North Indian bread with a generous serving of butter that tastes brilliant when paired with a gravy.",
                                  "isVeg": 1,
                                  "price": 5500,
                                  "variants": {
                                    
                                  },
                                  "variantsV2": {
                                    
                                  },
                                  "addons": [
                                    {
                                      "groupId": "47712333",
                                      "groupName": "Customize",
                                      "choices": [
                                        {
                                          "id": "33716347",
                                          "name": "Regular",
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        },
                                        {
                                          "id": "33716346",
                                          "name": "Jain Preparation",
                                          "price": 1000,
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        }
                                      ],
                                      "maxAddons": 1,
                                      "maxFreeAddons": -1
                                    }
                                  ],
                                  "itemAttribute": {
                                    "vegClassifier": "VEG"
                                  },
                                  "ribbon": {
                                    
                                  },
                                  "type": "ITEM",
                                  "itemBadge": {
                                    
                                  },
                                  "badgesV2": {
                                    
                                  },
                                  "ratings": {
                                    "aggregatedRating": {
                                      "rating": "4.4",
                                      "ratingCount": "705 ratings",
                                      "ratingCountV2": "705"
                                    }
                                  }
                                },
                                "analytics": {
                                  
                                },
                                "hideRestaurantDetails": true
                              }
                            },
                            {
                              "card": {
                                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                "info": {
                                  "id": "87140014",
                                  "name": "Tandoori Butter Roti",
                                  "category": "Breads",
                                  "description": "| 1 Pc ||Soft and fluffy rotis topped with a generous serving of butter.",
                                  "isVeg": 1,
                                  "price": 3300,
                                  "variants": {
                                    
                                  },
                                  "variantsV2": {
                                    
                                  },
                                  "addons": [
                                    {
                                      "groupId": "47712366",
                                      "groupName": "Customize",
                                      "choices": [
                                        {
                                          "id": "33716347",
                                          "name": "Regular",
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        },
                                        {
                                          "id": "33716346",
                                          "name": "Jain Preparation",
                                          "price": 1000,
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        }
                                      ],
                                      "maxAddons": 1,
                                      "maxFreeAddons": -1
                                    }
                                  ],
                                  "itemAttribute": {
                                    "vegClassifier": "VEG"
                                  },
                                  "ribbon": {
                                    
                                  },
                                  "type": "ITEM",
                                  "itemBadge": {
                                    
                                  },
                                  "badgesV2": {
                                    
                                  },
                                  "ratings": {
                                    "aggregatedRating": {
                                      "rating": "4.5",
                                      "ratingCount": "736 ratings",
                                      "ratingCountV2": "736"
                                    }
                                  }
                                },
                                "analytics": {
                                  
                                },
                                "hideRestaurantDetails": true
                              }
                            },
                            {
                              "card": {
                                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                "info": {
                                  "id": "87140016",
                                  "name": "Tandoori Roti",
                                  "category": "Breads",
                                  "description": "| 1 Pc || Soft and fluffy rotis topped with a generous serving of butter.",
                                  "isVeg": 1,
                                  "price": 2800,
                                  "variants": {
                                    
                                  },
                                  "variantsV2": {
                                    
                                  },
                                  "addons": [
                                    {
                                      "groupId": "47712367",
                                      "groupName": "Customize",
                                      "choices": [
                                        {
                                          "id": "33716347",
                                          "name": "Regular",
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        },
                                        {
                                          "id": "33716346",
                                          "name": "Jain Preparation",
                                          "price": 1000,
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        }
                                      ],
                                      "maxAddons": 1,
                                      "maxFreeAddons": -1
                                    }
                                  ],
                                  "itemAttribute": {
                                    "vegClassifier": "VEG"
                                  },
                                  "ribbon": {
                                    
                                  },
                                  "type": "ITEM",
                                  "itemBadge": {
                                    
                                  },
                                  "badgesV2": {
                                    
                                  },
                                  "ratings": {
                                    "aggregatedRating": {
                                      "rating": "4.6",
                                      "ratingCount": "726 ratings",
                                      "ratingCountV2": "726"
                                    }
                                  }
                                },
                                "analytics": {
                                  
                                },
                                "hideRestaurantDetails": true
                              }
                            },
                            {
                              "card": {
                                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                "info": {
                                  "id": "87139991",
                                  "name": "Aloo Paratha",
                                  "category": "Breads",
                                  "description": "| Medium Spicy |",
                                  "isVeg": 1,
                                  "price": 9000,
                                  "variants": {
                                    
                                  },
                                  "variantsV2": {
                                    
                                  },
                                  "addons": [
                                    {
                                      "groupId": "47712327",
                                      "groupName": "Customize",
                                      "choices": [
                                        {
                                          "id": "33716347",
                                          "name": "Regular",
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        },
                                        {
                                          "id": "33716346",
                                          "name": "Jain Preparation",
                                          "price": 1000,
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        }
                                      ],
                                      "maxAddons": 1,
                                      "maxFreeAddons": -1
                                    }
                                  ],
                                  "itemAttribute": {
                                    "vegClassifier": "VEG"
                                  },
                                  "ribbon": {
                                    
                                  },
                                  "type": "ITEM",
                                  "itemBadge": {
                                    
                                  },
                                  "badgesV2": {
                                    
                                  },
                                  "ratings": {
                                    "aggregatedRating": {
                                      "rating": "4.3",
                                      "ratingCount": "192 ratings",
                                      "ratingCountV2": "192"
                                    }
                                  }
                                },
                                "analytics": {
                                  
                                },
                                "hideRestaurantDetails": true
                              }
                            },
                            {
                              "card": {
                                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                "info": {
                                  "id": "87139994",
                                  "name": "Butter Kulcha",
                                  "category": "Breads",
                                  "isVeg": 1,
                                  "price": 5500,
                                  "variants": {
                                    
                                  },
                                  "variantsV2": {
                                    
                                  },
                                  "addons": [
                                    {
                                      "groupId": "47712332",
                                      "groupName": "Customize",
                                      "choices": [
                                        {
                                          "id": "33716347",
                                          "name": "Regular",
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        },
                                        {
                                          "id": "33716346",
                                          "name": "Jain Preparation",
                                          "price": 1000,
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        }
                                      ],
                                      "maxAddons": 1,
                                      "maxFreeAddons": -1
                                    }
                                  ],
                                  "itemAttribute": {
                                    "vegClassifier": "VEG"
                                  },
                                  "ribbon": {
                                    
                                  },
                                  "type": "ITEM",
                                  "itemBadge": {
                                    
                                  },
                                  "badgesV2": {
                                    
                                  },
                                  "ratings": {
                                    "aggregatedRating": {
                                      "rating": "4.6",
                                      "ratingCount": "164 ratings",
                                      "ratingCountV2": "164"
                                    }
                                  }
                                },
                                "analytics": {
                                  
                                },
                                "hideRestaurantDetails": true
                              }
                            },
                            {
                              "card": {
                                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                "info": {
                                  "id": "87140004",
                                  "name": "Gobi Paratha",
                                  "category": "Breads",
                                  "description": "| Medium Spicy |",
                                  "isVeg": 1,
                                  "price": 9000,
                                  "variants": {
                                    
                                  },
                                  "variantsV2": {
                                    
                                  },
                                  "addons": [
                                    {
                                      "groupId": "47712348",
                                      "groupName": "Customize",
                                      "choices": [
                                        {
                                          "id": "33716347",
                                          "name": "Regular",
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        },
                                        {
                                          "id": "33716346",
                                          "name": "Jain Preparation",
                                          "price": 1000,
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        }
                                      ],
                                      "maxAddons": 1,
                                      "maxFreeAddons": -1
                                    }
                                  ],
                                  "itemAttribute": {
                                    "vegClassifier": "VEG"
                                  },
                                  "ribbon": {
                                    
                                  },
                                  "type": "ITEM",
                                  "itemBadge": {
                                    
                                  },
                                  "badgesV2": {
                                    
                                  },
                                  "ratings": {
                                    "aggregatedRating": {
                                      "rating": "4.4",
                                      "ratingCount": "35 ratings",
                                      "ratingCountV2": "35"
                                    }
                                  }
                                },
                                "analytics": {
                                  
                                },
                                "hideRestaurantDetails": true
                              }
                            },
                            {
                              "card": {
                                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                "info": {
                                  "id": "87140017",
                                  "name": "Tawa Roti",
                                  "category": "Breads",
                                  "description": "| 1 Pc |",
                                  "isVeg": 1,
                                  "price": 2300,
                                  "variants": {
                                    
                                  },
                                  "variantsV2": {
                                    
                                  },
                                  "addons": [
                                    {
                                      "groupId": "47712368",
                                      "groupName": "Customize",
                                      "choices": [
                                        {
                                          "id": "33716347",
                                          "name": "Regular",
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        },
                                        {
                                          "id": "33716346",
                                          "name": "Jain Preparation",
                                          "price": 1000,
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        }
                                      ],
                                      "maxAddons": 1,
                                      "maxFreeAddons": -1
                                    }
                                  ],
                                  "itemAttribute": {
                                    "vegClassifier": "VEG"
                                  },
                                  "ribbon": {
                                    
                                  },
                                  "type": "ITEM",
                                  "itemBadge": {
                                    
                                  },
                                  "badgesV2": {
                                    
                                  },
                                  "ratings": {
                                    "aggregatedRating": {
                                      "rating": "4.3",
                                      "ratingCount": "367 ratings",
                                      "ratingCountV2": "367"
                                    }
                                  }
                                },
                                "analytics": {
                                  
                                },
                                "hideRestaurantDetails": true
                              }
                            },
                            {
                              "card": {
                                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                "info": {
                                  "id": "87140012",
                                  "name": "Tandoori Butter Paratha",
                                  "category": "Breads",
                                  "isVeg": 1,
                                  "price": 4300,
                                  "variants": {
                                    
                                  },
                                  "variantsV2": {
                                    
                                  },
                                  "addons": [
                                    {
                                      "groupId": "47712361",
                                      "groupName": "Customize",
                                      "choices": [
                                        {
                                          "id": "33716347",
                                          "name": "Regular",
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        },
                                        {
                                          "id": "33716346",
                                          "name": "Jain Preparation",
                                          "price": 1000,
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        }
                                      ],
                                      "maxAddons": 1,
                                      "maxFreeAddons": -1
                                    }
                                  ],
                                  "itemAttribute": {
                                    "vegClassifier": "VEG"
                                  },
                                  "ribbon": {
                                    
                                  },
                                  "type": "ITEM",
                                  "itemBadge": {
                                    
                                  },
                                  "badgesV2": {
                                    
                                  },
                                  "ratings": {
                                    "aggregatedRating": {
                                      "rating": "4.6",
                                      "ratingCount": "175 ratings",
                                      "ratingCountV2": "175"
                                    }
                                  }
                                },
                                "analytics": {
                                  
                                },
                                "hideRestaurantDetails": true
                              }
                            },
                            {
                              "card": {
                                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                "info": {
                                  "id": "87139996",
                                  "name": "Butter Tawa Roti",
                                  "category": "Breads",
                                  "isVeg": 1,
                                  "price": 2800,
                                  "variants": {
                                    
                                  },
                                  "variantsV2": {
                                    
                                  },
                                  "addons": [
                                    {
                                      "groupId": "47712334",
                                      "groupName": "Customize",
                                      "choices": [
                                        {
                                          "id": "33716347",
                                          "name": "Regular",
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        },
                                        {
                                          "id": "33716346",
                                          "name": "Jain Preparation",
                                          "price": 1000,
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        }
                                      ],
                                      "maxAddons": 1,
                                      "maxFreeAddons": -1
                                    }
                                  ],
                                  "itemAttribute": {
                                    "vegClassifier": "VEG"
                                  },
                                  "ribbon": {
                                    
                                  },
                                  "type": "ITEM",
                                  "itemBadge": {
                                    
                                  },
                                  "badgesV2": {
                                    
                                  },
                                  "ratings": {
                                    "aggregatedRating": {
                                      "rating": "4.5",
                                      "ratingCount": "238 ratings",
                                      "ratingCountV2": "238"
                                    }
                                  }
                                },
                                "analytics": {
                                  
                                },
                                "hideRestaurantDetails": true
                              }
                            }
                          ]
                        }
                      ]
                    }
                  }
                },
                {
                  "card": {
                    "card": {
                      "@type": "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                      "title": "Thali",
                      "itemCards": [
                        {
                          "card": {
                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            "info": {
                              "id": "87139849",
                              "name": "Limited Thali",
                              "category": "Thali",
                              "description": "| Serves 1 || Papad + Salad + Sweet Gulab Jamun + Butter Milk (((100 ml))) + Paneer Sabji (1 Pc) + Veg Sabji (1 Pc) + Dal Fry + Jeera Rice + Butter Roti (3 Pcs)",
                              "isVeg": 1,
                              "price": 24500,
                              "variants": {
                                
                              },
                              "variantsV2": {
                                
                              },
                              "addons": [
                                {
                                  "groupId": "47712102",
                                  "groupName": "Customize",
                                  "choices": [
                                    {
                                      "id": "33716347",
                                      "name": "Regular",
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "33716346",
                                      "name": "Jain Preparation",
                                      "price": 1000,
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    }
                                  ],
                                  "maxAddons": 1,
                                  "maxFreeAddons": -1
                                }
                              ],
                              "itemAttribute": {
                                "vegClassifier": "VEG"
                              },
                              "ribbon": {
                                "text": "Bestseller",
                                "textColor": "#ffffff",
                                "topBackgroundColor": "#d53d4c",
                                "bottomBackgroundColor": "#b02331"
                              },
                              "type": "ITEM",
                              "itemBadge": {
                                
                              },
                              "badgesV2": {
                                
                              },
                              "isBestseller": true,
                              "ratings": {
                                "aggregatedRating": {
                                  "rating": "4.3",
                                  "ratingCount": "1688 ratings",
                                  "ratingCountV2": "1688"
                                }
                              }
                            },
                            "analytics": {
                              
                            },
                            "hideRestaurantDetails": true
                          }
                        }
                      ]
                    }
                  }
                },
                {
                  "card": {
                    "card": {
                      "@type": "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                      "title": "Pizza",
                      "itemCards": [
                        {
                          "card": {
                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            "info": {
                              "id": "87140149",
                              "name": "Tandoori Paneer Pizzza",
                              "category": "Pizza",
                              "description": "Roasted Paneer Tikka Masala, Capsicum, Onion And Cheese Pizza.",
                              "isVeg": 1,
                              "price": 28500,
                              "variants": {
                                
                              },
                              "variantsV2": {
                                
                              },
                              "addons": [
                                {
                                  "groupId": "47712419",
                                  "groupName": "Customize",
                                  "choices": [
                                    {
                                      "id": "33716347",
                                      "name": "Regular",
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "33716346",
                                      "name": "Jain Preparation",
                                      "price": 1000,
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    }
                                  ],
                                  "maxAddons": 1,
                                  "maxFreeAddons": -1
                                }
                              ],
                              "itemAttribute": {
                                "vegClassifier": "VEG"
                              },
                              "ribbon": {
                                
                              },
                              "type": "ITEM",
                              "itemBadge": {
                                
                              },
                              "badgesV2": {
                                
                              },
                              "ratings": {
                                "aggregatedRating": {
                                  "rating": "3.8",
                                  "ratingCount": "10 ratings",
                                  "ratingCountV2": "10"
                                }
                              }
                            },
                            "analytics": {
                              
                            },
                            "hideRestaurantDetails": true
                          }
                        },
                        {
                          "card": {
                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            "info": {
                              "id": "87140146",
                              "name": "Desi Pizza",
                              "category": "Pizza",
                              "description": "Home Style Pizza Made With Onion Tomato And Cheese.",
                              "isVeg": 1,
                              "price": 22000,
                              "variants": {
                                
                              },
                              "variantsV2": {
                                
                              },
                              "addons": [
                                {
                                  "groupId": "47712416",
                                  "groupName": "Customize",
                                  "choices": [
                                    {
                                      "id": "33716347",
                                      "name": "Regular",
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "33716346",
                                      "name": "Jain Preparation",
                                      "price": 1000,
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    }
                                  ],
                                  "maxAddons": 1,
                                  "maxFreeAddons": -1
                                }
                              ],
                              "itemAttribute": {
                                "vegClassifier": "VEG"
                              },
                              "ribbon": {
                                
                              },
                              "type": "ITEM",
                              "itemBadge": {
                                
                              },
                              "badgesV2": {
                                
                              },
                              "ratings": {
                                "aggregatedRating": {
                                  "rating": "2.4",
                                  "ratingCount": "5 ratings",
                                  "ratingCountV2": "5"
                                }
                              }
                            },
                            "analytics": {
                              
                            },
                            "hideRestaurantDetails": true
                          }
                        },
                        {
                          "card": {
                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            "info": {
                              "id": "87140151",
                              "name": "The OTC Pizza",
                              "category": "Pizza",
                              "description": "Onion, Tomato, Capsicum And Cheese Pizza",
                              "isVeg": 1,
                              "price": 22000,
                              "variants": {
                                
                              },
                              "variantsV2": {
                                
                              },
                              "addons": [
                                {
                                  "groupId": "47712421",
                                  "groupName": "Customize",
                                  "choices": [
                                    {
                                      "id": "33716347",
                                      "name": "Regular",
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "33716346",
                                      "name": "Jain Preparation",
                                      "price": 1000,
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    }
                                  ],
                                  "maxAddons": 1,
                                  "maxFreeAddons": -1
                                }
                              ],
                              "itemAttribute": {
                                "vegClassifier": "VEG"
                              },
                              "ribbon": {
                                
                              },
                              "type": "ITEM",
                              "itemBadge": {
                                
                              },
                              "badgesV2": {
                                
                              },
                              "ratings": {
                                "aggregatedRating": {
                                  "rating": "2.5",
                                  "ratingCount": "4 ratings",
                                  "ratingCountV2": "4"
                                }
                              }
                            },
                            "analytics": {
                              
                            },
                            "hideRestaurantDetails": true
                          }
                        },
                        {
                          "card": {
                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            "info": {
                              "id": "87140147",
                              "name": "Margarita Pizza",
                              "category": "Pizza",
                              "isVeg": 1,
                              "price": 21000,
                              "variants": {
                                
                              },
                              "variantsV2": {
                                
                              },
                              "addons": [
                                {
                                  "groupId": "47712417",
                                  "groupName": "Customize",
                                  "choices": [
                                    {
                                      "id": "33716347",
                                      "name": "Regular",
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "33716346",
                                      "name": "Jain Preparation",
                                      "price": 1000,
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    }
                                  ],
                                  "maxAddons": 1,
                                  "maxFreeAddons": -1
                                }
                              ],
                              "itemAttribute": {
                                "vegClassifier": "VEG"
                              },
                              "ribbon": {
                                
                              },
                              "type": "ITEM",
                              "itemBadge": {
                                
                              },
                              "badgesV2": {
                                
                              },
                              "ratings": {
                                "aggregatedRating": {
                                  "rating": "2.5",
                                  "ratingCount": "10 ratings",
                                  "ratingCountV2": "10"
                                }
                              }
                            },
                            "analytics": {
                              
                            },
                            "hideRestaurantDetails": true
                          }
                        },
                        {
                          "card": {
                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            "info": {
                              "id": "87140148",
                              "name": "Mushroom And Olive Pizza",
                              "category": "Pizza",
                              "description": "Sauteed Mushroom And Olive Pizza Topped With Cheese.",
                              "isVeg": 1,
                              "price": 28500,
                              "variants": {
                                
                              },
                              "variantsV2": {
                                
                              },
                              "addons": [
                                {
                                  "groupId": "47712418",
                                  "groupName": "Customize",
                                  "choices": [
                                    {
                                      "id": "33716347",
                                      "name": "Regular",
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "33716346",
                                      "name": "Jain Preparation",
                                      "price": 1000,
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    }
                                  ],
                                  "maxAddons": 1,
                                  "maxFreeAddons": -1
                                }
                              ],
                              "itemAttribute": {
                                "vegClassifier": "VEG"
                              },
                              "ribbon": {
                                
                              },
                              "type": "ITEM",
                              "itemBadge": {
                                
                              },
                              "badgesV2": {
                                
                              },
                              "ratings": {
                                "aggregatedRating": {
                                  "rating": "2.2",
                                  "ratingCount": "4 ratings",
                                  "ratingCountV2": "4"
                                }
                              }
                            },
                            "analytics": {
                              
                            },
                            "hideRestaurantDetails": true
                          }
                        }
                      ]
                    }
                  }
                },
                {
                  "card": {
                    "card": {
                      "@type": "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory",
                      "title": "Continental Dishes",
                      "categories": [
                        {
                          "title": "The Continental",
                          "itemCards": [
                            {
                              "card": {
                                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                "info": {
                                  "id": "87140168",
                                  "name": "Mix Sauce Penne Pasta",
                                  "category": "Continental Dishes",
                                  "description": "Pasta Tossed In Spicy Tangy Creamy Cheesy Sauce Along With Veggies And Herbs. It",
                                  "isVeg": 1,
                                  "price": 31000,
                                  "variants": {
                                    
                                  },
                                  "variantsV2": {
                                    
                                  },
                                  "addons": [
                                    {
                                      "groupId": "47712442",
                                      "groupName": "Customize",
                                      "choices": [
                                        {
                                          "id": "33716347",
                                          "name": "Regular",
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        },
                                        {
                                          "id": "33716346",
                                          "name": "Jain Preparation",
                                          "price": 1000,
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        }
                                      ],
                                      "maxAddons": 1,
                                      "maxFreeAddons": -1
                                    },
                                    {
                                      "groupId": "108508110",
                                      "groupName": "Extra",
                                      "choices": [
                                        {
                                          "id": "98793748",
                                          "name": "Apple Mojito @15% Off!",
                                          "price": 12750,
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        },
                                        {
                                          "id": "98793749",
                                          "name": "Cold Coffee With Ice Cream @15% Off!",
                                          "price": 12750,
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        }
                                      ],
                                      "maxAddons": 2,
                                      "maxFreeAddons": -1
                                    }
                                  ],
                                  "itemAttribute": {
                                    "vegClassifier": "VEG"
                                  },
                                  "ribbon": {
                                    
                                  },
                                  "type": "ITEM",
                                  "itemBadge": {
                                    
                                  },
                                  "badgesV2": {
                                    
                                  },
                                  "ratings": {
                                    "aggregatedRating": {
                                      "rating": "3.9",
                                      "ratingCount": "18 ratings",
                                      "ratingCountV2": "18"
                                    }
                                  }
                                },
                                "analytics": {
                                  
                                },
                                "hideRestaurantDetails": true
                              }
                            },
                            {
                              "card": {
                                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                "info": {
                                  "id": "87140174",
                                  "name": "White Sauce Penne Pasta",
                                  "category": "Continental Dishes",
                                  "description": "Pasta Tossed In Smooth White Silky Aromatic Sauce Along With Veggies And With Lots Of Cheese",
                                  "isVeg": 1,
                                  "price": 31000,
                                  "variants": {
                                    
                                  },
                                  "variantsV2": {
                                    
                                  },
                                  "addons": [
                                    {
                                      "groupId": "47712446",
                                      "groupName": "Customize",
                                      "choices": [
                                        {
                                          "id": "33716347",
                                          "name": "Regular",
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        },
                                        {
                                          "id": "33716346",
                                          "name": "Jain Preparation",
                                          "price": 1000,
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        }
                                      ],
                                      "maxAddons": 1,
                                      "maxFreeAddons": -1
                                    },
                                    {
                                      "groupId": "108508111",
                                      "groupName": "Extra",
                                      "choices": [
                                        {
                                          "id": "98793748",
                                          "name": "Apple Mojito @15% Off!",
                                          "price": 12750,
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        },
                                        {
                                          "id": "98793749",
                                          "name": "Cold Coffee With Ice Cream @15% Off!",
                                          "price": 12750,
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        }
                                      ],
                                      "maxAddons": 2,
                                      "maxFreeAddons": -1
                                    }
                                  ],
                                  "itemAttribute": {
                                    "vegClassifier": "VEG"
                                  },
                                  "ribbon": {
                                    
                                  },
                                  "type": "ITEM",
                                  "itemBadge": {
                                    
                                  },
                                  "badgesV2": {
                                    
                                  },
                                  "ratings": {
                                    "aggregatedRating": {
                                      "rating": "3.2",
                                      "ratingCount": "4 ratings",
                                      "ratingCountV2": "4"
                                    }
                                  }
                                },
                                "analytics": {
                                  
                                },
                                "hideRestaurantDetails": true
                              }
                            },
                            {
                              "card": {
                                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                "info": {
                                  "id": "87140160",
                                  "name": "Arabiata Pasta",
                                  "category": "Continental Dishes",
                                  "description": "Penne Pasta Cooked In Veggies, Tossed In Red Tomato Sauce Along With Herbs And Spices And Garnish With Lots Of Cheeses.",
                                  "isVeg": 1,
                                  "price": 30000,
                                  "variants": {
                                    
                                  },
                                  "variantsV2": {
                                    
                                  },
                                  "addons": [
                                    {
                                      "groupId": "47712434",
                                      "groupName": "Customize",
                                      "choices": [
                                        {
                                          "id": "33716347",
                                          "name": "Regular",
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        },
                                        {
                                          "id": "33716346",
                                          "name": "Jain Preparation",
                                          "price": 1000,
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        }
                                      ],
                                      "maxAddons": 1,
                                      "maxFreeAddons": -1
                                    },
                                    {
                                      "groupId": "108508109",
                                      "groupName": "Extra",
                                      "choices": [
                                        {
                                          "id": "98793748",
                                          "name": "Apple Mojito @15% Off!",
                                          "price": 12750,
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        },
                                        {
                                          "id": "98793749",
                                          "name": "Cold Coffee With Ice Cream @15% Off!",
                                          "price": 12750,
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        }
                                      ],
                                      "maxAddons": 2,
                                      "maxFreeAddons": -1
                                    }
                                  ],
                                  "itemAttribute": {
                                    "vegClassifier": "VEG"
                                  },
                                  "ribbon": {
                                    
                                  },
                                  "type": "ITEM",
                                  "itemBadge": {
                                    
                                  },
                                  "badgesV2": {
                                    
                                  },
                                  "ratings": {
                                    "aggregatedRating": {
                                      "rating": "4.4",
                                      "ratingCount": "8 ratings",
                                      "ratingCountV2": "8"
                                    }
                                  }
                                },
                                "analytics": {
                                  
                                },
                                "hideRestaurantDetails": true
                              }
                            }
                          ]
                        }
                      ]
                    }
                  }
                },
                {
                  "card": {
                    "card": {
                      "@type": "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                      "title": "Salads",
                      "itemCards": [
                        {
                          "card": {
                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            "info": {
                              "id": "87140257",
                              "name": "Mix Fruit Raita",
                              "category": "Salads",
                              "isVeg": 1,
                              "price": 10500,
                              "variants": {
                                
                              },
                              "variantsV2": {
                                
                              },
                              "addons": [
                                {
                                  "groupId": "47712479",
                                  "groupName": "Customize",
                                  "choices": [
                                    {
                                      "id": "33716932",
                                      "name": "Jain Preparation",
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    }
                                  ],
                                  "maxAddons": 1,
                                  "maxFreeAddons": -1
                                }
                              ],
                              "itemAttribute": {
                                "vegClassifier": "VEG"
                              },
                              "ribbon": {
                                
                              },
                              "type": "ITEM",
                              "itemBadge": {
                                
                              },
                              "badgesV2": {
                                
                              },
                              "ratings": {
                                "aggregatedRating": {
                                  "rating": "4.3",
                                  "ratingCount": "20 ratings",
                                  "ratingCountV2": "20"
                                }
                              }
                            },
                            "analytics": {
                              
                            },
                            "hideRestaurantDetails": true
                          }
                        },
                        {
                          "card": {
                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            "info": {
                              "id": "87140262",
                              "name": "Veg Raita",
                              "category": "Salads",
                              "isVeg": 1,
                              "price": 7500,
                              "variants": {
                                
                              },
                              "variantsV2": {
                                
                              },
                              "addons": [
                                {
                                  "groupId": "47712486",
                                  "groupName": "Customize",
                                  "choices": [
                                    {
                                      "id": "33716932",
                                      "name": "Jain Preparation",
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    }
                                  ],
                                  "maxAddons": 1,
                                  "maxFreeAddons": -1
                                }
                              ],
                              "itemAttribute": {
                                "vegClassifier": "VEG"
                              },
                              "ribbon": {
                                
                              },
                              "type": "ITEM",
                              "itemBadge": {
                                
                              },
                              "badgesV2": {
                                
                              },
                              "ratings": {
                                "aggregatedRating": {
                                  "rating": "4.8",
                                  "ratingCount": "119 ratings",
                                  "ratingCountV2": "119"
                                }
                              }
                            },
                            "analytics": {
                              
                            },
                            "hideRestaurantDetails": true
                          }
                        },
                        {
                          "card": {
                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            "info": {
                              "id": "87140259",
                              "name": "Pineapple Raita",
                              "category": "Salads",
                              "isVeg": 1,
                              "price": 8500,
                              "variants": {
                                
                              },
                              "variantsV2": {
                                
                              },
                              "addons": [
                                {
                                  "groupId": "47712484",
                                  "groupName": "Customize",
                                  "choices": [
                                    {
                                      "id": "33716932",
                                      "name": "Jain Preparation",
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    }
                                  ],
                                  "maxAddons": 1,
                                  "maxFreeAddons": -1
                                }
                              ],
                              "itemAttribute": {
                                "vegClassifier": "VEG"
                              },
                              "ribbon": {
                                
                              },
                              "type": "ITEM",
                              "itemBadge": {
                                
                              },
                              "badgesV2": {
                                
                              },
                              "ratings": {
                                "aggregatedRating": {
                                  "rating": "3.7",
                                  "ratingCount": "21 ratings",
                                  "ratingCountV2": "21"
                                }
                              }
                            },
                            "analytics": {
                              
                            },
                            "hideRestaurantDetails": true
                          }
                        },
                        {
                          "card": {
                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            "info": {
                              "id": "87140249",
                              "name": "Boondi Raita",
                              "category": "Salads",
                              "isVeg": 1,
                              "price": 7500,
                              "variants": {
                                
                              },
                              "variantsV2": {
                                
                              },
                              "addons": [
                                {
                                  "groupId": "47712475",
                                  "groupName": "Customize",
                                  "choices": [
                                    {
                                      "id": "33716932",
                                      "name": "Jain Preparation",
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    }
                                  ],
                                  "maxAddons": 1,
                                  "maxFreeAddons": -1
                                }
                              ],
                              "itemAttribute": {
                                "vegClassifier": "VEG"
                              },
                              "ribbon": {
                                
                              },
                              "type": "ITEM",
                              "itemBadge": {
                                
                              },
                              "badgesV2": {
                                
                              },
                              "ratings": {
                                "aggregatedRating": {
                                  "rating": "4.8",
                                  "ratingCount": "79 ratings",
                                  "ratingCountV2": "79"
                                }
                              }
                            },
                            "analytics": {
                              
                            },
                            "hideRestaurantDetails": true
                          }
                        },
                        {
                          "card": {
                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            "info": {
                              "id": "87139865",
                              "name": "Indian Masala Salad",
                              "category": "Salads",
                              "isVeg": 1,
                              "price": 8500,
                              "variants": {
                                
                              },
                              "variantsV2": {
                                
                              },
                              "addons": [
                                {
                                  "groupId": "47712141",
                                  "groupName": "Customize",
                                  "choices": [
                                    {
                                      "id": "33716347",
                                      "name": "Regular",
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "33716346",
                                      "name": "Jain Preparation",
                                      "price": 1000,
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    }
                                  ],
                                  "maxAddons": 1,
                                  "maxFreeAddons": -1
                                }
                              ],
                              "itemAttribute": {
                                "vegClassifier": "VEG"
                              },
                              "ribbon": {
                                
                              },
                              "type": "ITEM",
                              "itemBadge": {
                                
                              },
                              "badgesV2": {
                                
                              },
                              "ratings": {
                                "aggregatedRating": {
                                  "rating": "4.5",
                                  "ratingCount": "15 ratings",
                                  "ratingCountV2": "15"
                                }
                              }
                            },
                            "analytics": {
                              
                            },
                            "hideRestaurantDetails": true
                          }
                        },
                        {
                          "card": {
                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            "info": {
                              "id": "87140254",
                              "name": "Green Salad",
                              "category": "Salads",
                              "isVeg": 1,
                              "price": 6500,
                              "variants": {
                                
                              },
                              "variantsV2": {
                                
                              },
                              "addons": [
                                {
                                  "groupId": "47712478",
                                  "groupName": "Customize",
                                  "choices": [
                                    {
                                      "id": "33716932",
                                      "name": "Jain Preparation",
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    }
                                  ],
                                  "maxAddons": 1,
                                  "maxFreeAddons": -1
                                }
                              ],
                              "itemAttribute": {
                                "vegClassifier": "VEG"
                              },
                              "ribbon": {
                                
                              },
                              "type": "ITEM",
                              "itemBadge": {
                                
                              },
                              "badgesV2": {
                                
                              },
                              "ratings": {
                                "aggregatedRating": {
                                  "rating": "4.8",
                                  "ratingCount": "22 ratings",
                                  "ratingCountV2": "22"
                                }
                              }
                            },
                            "analytics": {
                              
                            },
                            "hideRestaurantDetails": true
                          }
                        }
                      ]
                    }
                  }
                },
                {
                  "card": {
                    "card": {
                      "@type": "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                      "title": "International Dishes",
                      "itemCards": [
                        {
                          "card": {
                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            "info": {
                              "id": "87140187",
                              "name": "Paneer Chilly With Garlic Rice",
                              "category": "International Dishes",
                              "description": "[Spicy] Coated Paneer Deep Fried And Tossed In Sweet And Spicy Tangy Indo Chinese Sauces Served With Fried Garlic Rice",
                              "isVeg": 1,
                              "price": 28000,
                              "variants": {
                                
                              },
                              "variantsV2": {
                                
                              },
                              "addons": [
                                {
                                  "groupId": "47712463",
                                  "groupName": "Customize",
                                  "choices": [
                                    {
                                      "id": "33716347",
                                      "name": "Regular",
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "33716346",
                                      "name": "Jain Preparation",
                                      "price": 1000,
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    }
                                  ],
                                  "maxAddons": 1,
                                  "maxFreeAddons": -1
                                },
                                {
                                  "groupId": "108508112",
                                  "groupName": "Extra",
                                  "choices": [
                                    {
                                      "id": "98793748",
                                      "name": "Apple Mojito @15% Off!",
                                      "price": 12750,
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "98793749",
                                      "name": "Cold Coffee With Ice Cream @15% Off!",
                                      "price": 12750,
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    }
                                  ],
                                  "maxAddons": 2,
                                  "maxFreeAddons": -1
                                }
                              ],
                              "itemAttribute": {
                                "vegClassifier": "VEG"
                              },
                              "ribbon": {
                                
                              },
                              "type": "ITEM",
                              "itemBadge": {
                                
                              },
                              "badgesV2": {
                                
                              },
                              "ratings": {
                                "aggregatedRating": {
                                  "rating": "4.4",
                                  "ratingCount": "34 ratings",
                                  "ratingCountV2": "34"
                                }
                              }
                            },
                            "analytics": {
                              
                            },
                            "hideRestaurantDetails": true
                          }
                        },
                        {
                          "card": {
                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            "info": {
                              "id": "87140193",
                              "name": "Veg Manchurian Gravy With Fried Rice",
                              "category": "International Dishes",
                              "description": "| Serves 1-2 | Medium Spicy | Fried Dumplings Made From Vegetables Tossed In Tangy Indo Chinese Style Gravy, Served Along With Chinese Style Fried Rice | Served with Salad |",
                              "isVeg": 1,
                              "price": 26000,
                              "variants": {
                                
                              },
                              "variantsV2": {
                                
                              },
                              "addons": [
                                {
                                  "groupId": "47712469",
                                  "groupName": "Customize",
                                  "choices": [
                                    {
                                      "id": "33716347",
                                      "name": "Regular",
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "33716346",
                                      "name": "Jain Preparation",
                                      "price": 1000,
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    }
                                  ],
                                  "maxAddons": 1,
                                  "maxFreeAddons": -1
                                },
                                {
                                  "groupId": "108508113",
                                  "groupName": "Extra",
                                  "choices": [
                                    {
                                      "id": "98793748",
                                      "name": "Apple Mojito @15% Off!",
                                      "price": 12750,
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "98793749",
                                      "name": "Cold Coffee With Ice Cream @15% Off!",
                                      "price": 12750,
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    }
                                  ],
                                  "maxAddons": 2,
                                  "maxFreeAddons": -1
                                }
                              ],
                              "itemAttribute": {
                                "vegClassifier": "VEG"
                              },
                              "ribbon": {
                                
                              },
                              "type": "ITEM",
                              "itemBadge": {
                                
                              },
                              "badgesV2": {
                                
                              },
                              "ratings": {
                                "aggregatedRating": {
                                  "rating": "4.3",
                                  "ratingCount": "53 ratings",
                                  "ratingCountV2": "53"
                                }
                              }
                            },
                            "analytics": {
                              
                            },
                            "hideRestaurantDetails": true
                          }
                        }
                      ]
                    }
                  }
                },
                {
                  "card": {
                    "card": {
                      "@type": "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory",
                      "title": "Desserts And Beverages",
                      "categories": [
                        {
                          "title": "Beverages",
                          "itemCards": [
                            {
                              "card": {
                                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                "info": {
                                  "id": "87140219",
                                  "name": "Butter Milk",
                                  "category": "Desserts And Beverages",
                                  "isVeg": 1,
                                  "price": 4000,
                                  "variants": {
                                    
                                  },
                                  "variantsV2": {
                                    
                                  },
                                  "itemAttribute": {
                                    "vegClassifier": "VEG"
                                  },
                                  "ribbon": {
                                    
                                  },
                                  "type": "ITEM",
                                  "itemBadge": {
                                    
                                  },
                                  "badgesV2": {
                                    
                                  },
                                  "ratings": {
                                    "aggregatedRating": {
                                      "rating": "4.3",
                                      "ratingCount": "148 ratings",
                                      "ratingCountV2": "148"
                                    }
                                  }
                                },
                                "analytics": {
                                  
                                },
                                "hideRestaurantDetails": true
                              }
                            }
                          ]
                        },
                        {
                          "title": "Desserts",
                          "itemCards": [
                            {
                              "card": {
                                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                "info": {
                                  "id": "87140199",
                                  "name": "Gulab Jamun",
                                  "category": "Desserts And Beverages",
                                  "description": "(2 Pcs)",
                                  "isVeg": 1,
                                  "price": 7500,
                                  "variants": {
                                    
                                  },
                                  "variantsV2": {
                                    
                                  },
                                  "itemAttribute": {
                                    "vegClassifier": "VEG"
                                  },
                                  "ribbon": {
                                    
                                  },
                                  "type": "ITEM",
                                  "itemBadge": {
                                    
                                  },
                                  "badgesV2": {
                                    
                                  },
                                  "ratings": {
                                    "aggregatedRating": {
                                      "rating": "4.3",
                                      "ratingCount": "55 ratings",
                                      "ratingCountV2": "55"
                                    }
                                  }
                                },
                                "analytics": {
                                  
                                },
                                "hideRestaurantDetails": true
                              }
                            }
                          ]
                        }
                      ]
                    }
                  }
                },
                {
                  "card": {
                    "card": {
                      "@type": "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                      "title": "Special New Items",
                      "itemCards": [
                        {
                          "card": {
                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            "info": {
                              "id": "103533236",
                              "name": "Mint Chutney",
                              "category": "Special New Items",
                              "isVeg": 1,
                              "price": 2000,
                              "variants": {
                                
                              },
                              "variantsV2": {
                                
                              },
                              "itemAttribute": {
                                "vegClassifier": "VEG"
                              },
                              "ribbon": {
                                
                              },
                              "type": "ITEM",
                              "itemBadge": {
                                
                              },
                              "badgesV2": {
                                
                              },
                              "ratings": {
                                "aggregatedRating": {
                                  "rating": "4.4",
                                  "ratingCount": "64 ratings",
                                  "ratingCountV2": "64"
                                }
                              }
                            },
                            "analytics": {
                              
                            },
                            "hideRestaurantDetails": true
                          }
                        }
                      ]
                    }
                  }
                },
                {
                  "card": {
                    "card": {
                      "@type": "type.googleapis.com/swiggy.presentation.food.v2.RestaurantLicenseInfo",
                      "type": "FSSAI",
                      "imageId": "fssai_final_edss9i",
                      "text": [
                        "License No. 10712021001195"
                      ]
                    }
                  }
                },
                {
                  "card": {
                    "card": {
                      "@type": "type.googleapis.com/swiggy.presentation.food.v2.RestaurantAddress",
                      "name": "The Glorious Restaurant",
                      "area": "Prime Arcade",
                      "completeAddress": "Chandrashekhar Azad Marg, Opposite Prime Market, Shantinagar Society, Narotam Nagar, Adajan Gam, Surat"
                    }
                  }
                }
              ]
            }
          }
        }
      }
    ],
    "firstOffsetRequest": true,
    "isQCLink": false
  },
  "tid": "9524ffd7-e8af-4370-8e98-6aa4374f7538",
  "sid": "ge6a780f-f64b-4629-aef0-90ae3850503f",
  "deviceId": "cde21f8f-df40-57cf-b358-293e28d27dd5",
  "csrfToken": "6r9S1UOGvqkZ-RXQK79xVopkzSmFm-QURTBXD5SA"
}