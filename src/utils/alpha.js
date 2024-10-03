


const alphaMenu = // 20240930032213
// https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9351929&lng=77.62448069999999&restaurantId=65694&catalog_qa=undefined&submitAction=ENTER

{
  "statusCode": 0,
  "data": {
    "statusMessage": "done successfully",
    "cards": [
      {
        "card": {
          "card": {
            "@type": "type.googleapis.com/swiggy.gandalf.widgets.v2.TextBoxV2",
            "text": "Alpha Restaurant",
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
                "cta": "https://swiggy.com/menu/65694/dineout"
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
              "id": "65694",
              "name": "Alpha Restaurant",
              "city": "Surat",
              "slugs": {
                "restaurant": "alpha-restaurant-bhatar-road-near-olympia-mall-athwa",
                "city": "surat"
              },
              "uniqueId": "e51e6528-4859-48c8-8fed-e84c17dc2d76",
              "cloudinaryImageId": "zdzduvnbeo8i3jr8xjnz",
              "locality": "Athwa",
              "areaName": "Athwa",
              "costForTwo": "40000",
              "costForTwoMessage": "₹400 for two",
              "cuisines": [
                "Thalis",
                "North Indian"
              ],
              "avgRating": 4.6,
              "veg": true,
              "feeDetails": {
                
              },
              "parentId": "30581",
              "avgRatingString": "4.6",
              "totalRatingsString": "7.1K+ ratings",
              "sla": {
                "restaurantId": "65694",
                "lastMileTravel": 1049.1,
                "serviceability": "NON_SERVICEABLE",
                "rainMode": "RAIN_MODE_NONE",
                "longDistance": "LONG_DISTANCE_NOT_LONG_DISTANCE",
                "lastMileTravelString": "1049.0 km",
                "iconType": "ICON_TYPE_EMPTY"
              },
              "availability": {
                "nextOpenTimeMessage": "Opens next at 11:30 am, today",
                "nextOpenTime": "2024-09-30 11:30:00",
                "visibility": true,
                "restaurantClosedMeta": {
                  
                }
              },
              "aggregatedDiscountInfo": {
                "header": "Claim double offer",
                "shortDescriptionList": [
                  {
                    "discountType": "Percentage",
                    "operationType": "RESTAURANT"
                  },
                  {
                    "meta": "Claim double offer",
                    "discountType": "Flat",
                    "operationType": "RESTAURANT"
                  }
                ],
                "descriptionList": [
                  {
                    "meta": "30% off upto ₹150 |  Use AXIS30 Above ₹200",
                    "discountType": "Percentage",
                    "operationType": "RESTAURANT"
                  },
                  {
                    "meta": "Claim your extra offer",
                    "discountType": "Flat",
                    "operationType": "RESTAURANT"
                  }
                ],
                "visible": true
              },
              "badges": {
                
              },
              "slugString": "alpha-restaurant-bhatar-road-near-olympia-mall-athwa",
              "labels": [
                {
                  "title": "Timings",
                  "message": "null"
                },
                {
                  "title": "Address",
                  "message": "Shivshakti Shopping Center, Bhatar Road, Near Olympia Mall"
                },
                {
                  "title": "Cuisines",
                  "message": "Thalis,North Indian"
                }
              ],
              "totalRatings": 7100,
              "aggregatedDiscountInfoV2": {
                "header": "Claim double offer",
                "shortDescriptionList": [
                  {
                    "discountType": "Percentage",
                    "operationType": "RESTAURANT"
                  },
                  {
                    "meta": "Claim double offer",
                    "discountType": "Flat",
                    "operationType": "RESTAURANT"
                  }
                ],
                "descriptionList": [
                  {
                    "meta": "30% off upto ₹150 |  Use AXIS30 Above ₹200",
                    "discountType": "Percentage",
                    "operationType": "RESTAURANT"
                  },
                  {
                    "meta": "Claim your extra offer",
                    "discountType": "Flat",
                    "operationType": "RESTAURANT"
                  }
                ],
                "couponDetailsCta": "View coupon details"
              },
              "type": "F",
              "headerBanner": {
                "url": "swiggy://webview?is_external=false&webview_url=https://www.swiggy.com/restaurant-info/65694"
              },
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
              "cartOrderabilityNudgeBanner": {
                "parameters": {
                  
                },
                "presentation": {
                  
                }
              },
              "latLong": "21.171706,72.81634299999996",
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
              "columns": 2,
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
                      "restId": "65694",
                      "offerLogo": "rng/md/ads/production/d07196b25b85d1fd9951e10c255ab737",
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
                      "restId": "65694",
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
                      "@type": "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                      "title": "Recommended",
                      "itemCards": [
                        {
                          "card": {
                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            "info": {
                              "id": "67070283",
                              "name": "Kashmiri Kofta [sweet]",
                              "category": "Main Course",
                              "imageId": "uf4rmaqyhiwvkeun4gkk",
                              "isVeg": 1,
                              "price": 20500,
                              "variants": {
                                
                              },
                              "variantsV2": {
                                
                              },
                              "addons": [
                                {
                                  "groupId": "126822495",
                                  "groupName": "Choice Of Preperation",
                                  "choices": [
                                    {
                                      "id": "66005615",
                                      "name": "Jain",
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "66005614",
                                      "name": "Regular",
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    }
                                  ],
                                  "maxAddons": 1,
                                  "maxFreeAddons": -1,
                                  "minAddons": 1
                                }
                              ],
                              "itemAttribute": {
                                "vegClassifier": "VEG"
                              },
                              "ribbon": {
                                
                              },
                              "showImage": true,
                              "itemBadge": {
                                
                              },
                              "badgesV2": {
                                
                              },
                              "ratings": {
                                "aggregatedRating": {
                                  "rating": "1.6",
                                  "ratingCount": "23 ratings",
                                  "ratingCountV2": "23"
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
                              "id": "67070300",
                              "name": "Paneer Chilly Dry",
                              "category": "Chinese",
                              "imageId": "qnnk6eiop0t0dm2umtk1",
                              "isVeg": 1,
                              "price": 25000,
                              "variants": {
                                
                              },
                              "variantsV2": {
                                
                              },
                              "addons": [
                                {
                                  "groupId": "81548218",
                                  "groupName": "Choice Of Preperation",
                                  "choices": [
                                    {
                                      "id": "66005615",
                                      "name": "Jain",
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "66005614",
                                      "name": "Regular",
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    }
                                  ],
                                  "maxAddons": 1,
                                  "maxFreeAddons": -1,
                                  "minAddons": 1
                                }
                              ],
                              "itemAttribute": {
                                "vegClassifier": "VEG"
                              },
                              "ribbon": {
                                
                              },
                              "showImage": true,
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
                              "id": "67070304",
                              "name": "Veg Manchurian Dry",
                              "category": "Chinese",
                              "imageId": "i4w1sknhrvweq7jvhppe",
                              "isVeg": 1,
                              "price": 22000,
                              "variants": {
                                
                              },
                              "variantsV2": {
                                
                              },
                              "addons": [
                                {
                                  "groupId": "81548312",
                                  "groupName": "Choice Of Preperation",
                                  "choices": [
                                    {
                                      "id": "66005615",
                                      "name": "Jain",
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "66005614",
                                      "name": "Regular",
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    }
                                  ],
                                  "maxAddons": 1,
                                  "maxFreeAddons": -1,
                                  "minAddons": 1
                                }
                              ],
                              "itemAttribute": {
                                "vegClassifier": "VEG"
                              },
                              "ribbon": {
                                
                              },
                              "showImage": true,
                              "itemBadge": {
                                
                              },
                              "badgesV2": {
                                
                              },
                              "ratings": {
                                "aggregatedRating": {
                                  "rating": "4.5",
                                  "ratingCount": "70 ratings",
                                  "ratingCountV2": "70"
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
                              "id": "67070231",
                              "name": "Lemone Coriander Soup",
                              "category": "Soups",
                              "imageId": "0b5560bd3387105101f968d7316d3b51",
                              "isVeg": 1,
                              "price": 11000,
                              "variants": {
                                
                              },
                              "variantsV2": {
                                
                              },
                              "addons": [
                                {
                                  "groupId": "81548210",
                                  "groupName": "Choice Of Preperation",
                                  "choices": [
                                    {
                                      "id": "66005615",
                                      "name": "Jain",
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "66005614",
                                      "name": "Regular",
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    }
                                  ],
                                  "maxAddons": 1,
                                  "maxFreeAddons": -1,
                                  "minAddons": 1
                                }
                              ],
                              "itemAttribute": {
                                "vegClassifier": "VEG"
                              },
                              "ribbon": {
                                
                              },
                              "showImage": true,
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
                      ],
                      "type": "CATEGORY_TYPE_RECOMMENDED"
                    }
                  }
                },
                {
                  "card": {
                    "card": {
                      "@type": "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                      "title": "Lunch Pack",
                      "itemCards": [
                        {
                          "card": {
                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            "info": {
                              "id": "17264600",
                              "name": "Pack Lunch",
                              "category": "Lunch Pack",
                              "imageId": "FOOD_CATALOG/IMAGES/CMS/2024/7/12/5843d47c-358f-4954-8848-7d6d9ec63505_bb5966df-30ff-4ce5-888c-b30d5d610c15.jpeg",
                              "isVeg": 1,
                              "price": 22000,
                              "variants": {
                                
                              },
                              "variantsV2": {
                                
                              },
                              "addons": [
                                {
                                  "groupId": "81548250",
                                  "groupName": "Choice Of Preperation",
                                  "choices": [
                                    {
                                      "id": "66005615",
                                      "name": "Jain",
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "66005614",
                                      "name": "Regular",
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    }
                                  ],
                                  "maxAddons": 1,
                                  "maxFreeAddons": -1,
                                  "minAddons": 1
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
                                  "ratingCount": "1841 ratings",
                                  "ratingCountV2": "1841"
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
                      "title": "Main Course",
                      "categories": [
                        {
                          "title": "Khana Khazana",
                          "itemCards": [
                            {
                              "card": {
                                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                "info": {
                                  "id": "17264439",
                                  "name": "Kaju Kofta",
                                  "category": "Main Course",
                                  "imageId": "FOOD_CATALOG/IMAGES/CMS/2024/7/12/88abc046-746b-41e1-b854-f2faa0b84b0b_591e0771-0bae-435c-ae74-6469725116d6.jpeg",
                                  "isVeg": 1,
                                  "price": 21000,
                                  "variants": {
                                    
                                  },
                                  "variantsV2": {
                                    
                                  },
                                  "addons": [
                                    {
                                      "groupId": "81548230",
                                      "groupName": "Choice Of Preperation",
                                      "choices": [
                                        {
                                          "id": "66005615",
                                          "name": "Jain",
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        },
                                        {
                                          "id": "66005614",
                                          "name": "Regular",
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        }
                                      ],
                                      "maxAddons": 1,
                                      "maxFreeAddons": -1,
                                      "minAddons": 1
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
                                  "id": "17264441",
                                  "name": "Cheese Kofta",
                                  "category": "Main Course",
                                  "isVeg": 1,
                                  "price": 20500,
                                  "variants": {
                                    
                                  },
                                  "variantsV2": {
                                    
                                  },
                                  "addons": [
                                    {
                                      "groupId": "81548229",
                                      "groupName": "Choice Of Preperation",
                                      "choices": [
                                        {
                                          "id": "66005615",
                                          "name": "Jain",
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        },
                                        {
                                          "id": "66005614",
                                          "name": "Regular",
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        }
                                      ],
                                      "maxAddons": 1,
                                      "maxFreeAddons": -1,
                                      "minAddons": 1
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
                                  "id": "17264443",
                                  "name": "Kadai Kofta",
                                  "category": "Main Course",
                                  "isVeg": 1,
                                  "price": 20500,
                                  "variants": {
                                    
                                  },
                                  "variantsV2": {
                                    
                                  },
                                  "addons": [
                                    {
                                      "groupId": "81548228",
                                      "groupName": "Choice Of Preperation",
                                      "choices": [
                                        {
                                          "id": "66005615",
                                          "name": "Jain",
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        },
                                        {
                                          "id": "66005614",
                                          "name": "Regular",
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        }
                                      ],
                                      "maxAddons": 1,
                                      "maxFreeAddons": -1,
                                      "minAddons": 1
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
                                  "id": "17264449",
                                  "name": "Paneer Kofta",
                                  "category": "Main Course",
                                  "imageId": "u6m2uegi2zecqzk730hr",
                                  "isVeg": 1,
                                  "price": 20500,
                                  "variants": {
                                    
                                  },
                                  "variantsV2": {
                                    
                                  },
                                  "addons": [
                                    {
                                      "groupId": "81548222",
                                      "groupName": "Choice Of Preperation",
                                      "choices": [
                                        {
                                          "id": "66005615",
                                          "name": "Jain",
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        },
                                        {
                                          "id": "66005614",
                                          "name": "Regular",
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        }
                                      ],
                                      "maxAddons": 1,
                                      "maxFreeAddons": -1,
                                      "minAddons": 1
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
                                  "id": "17264451",
                                  "name": "Veg Kofta",
                                  "category": "Main Course",
                                  "isVeg": 1,
                                  "price": 19000,
                                  "variants": {
                                    
                                  },
                                  "variantsV2": {
                                    
                                  },
                                  "addons": [
                                    {
                                      "groupId": "81548215",
                                      "groupName": "Choice Of Preperation",
                                      "choices": [
                                        {
                                          "id": "66005615",
                                          "name": "Jain",
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        },
                                        {
                                          "id": "66005614",
                                          "name": "Regular",
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        }
                                      ],
                                      "maxAddons": 1,
                                      "maxFreeAddons": -1,
                                      "minAddons": 1
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
                                      "rating": "5.0",
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
                                  "id": "17264510",
                                  "name": "Veg Hungama.",
                                  "category": "Main Course",
                                  "isVeg": 1,
                                  "price": 21000,
                                  "variants": {
                                    
                                  },
                                  "variantsV2": {
                                    
                                  },
                                  "addons": [
                                    {
                                      "groupId": "81548207",
                                      "groupName": "Choice Of Preperation",
                                      "choices": [
                                        {
                                          "id": "66005615",
                                          "name": "Jain",
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        },
                                        {
                                          "id": "66005614",
                                          "name": "Regular",
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        }
                                      ],
                                      "maxAddons": 1,
                                      "maxFreeAddons": -1,
                                      "minAddons": 1
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
                                  "id": "17264511",
                                  "name": "Cheese Angoori (sweet).",
                                  "category": "Main Course",
                                  "isVeg": 1,
                                  "price": 22000,
                                  "variants": {
                                    
                                  },
                                  "variantsV2": {
                                    
                                  },
                                  "addons": [
                                    {
                                      "groupId": "81548206",
                                      "groupName": "Choice Of Preperation",
                                      "choices": [
                                        {
                                          "id": "66005615",
                                          "name": "Jain",
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        },
                                        {
                                          "id": "66005614",
                                          "name": "Regular",
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        }
                                      ],
                                      "maxAddons": 1,
                                      "maxFreeAddons": -1,
                                      "minAddons": 1
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
                                      "rating": "3.1",
                                      "ratingCount": "108 ratings",
                                      "ratingCountV2": "108"
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
                                  "id": "17264512",
                                  "name": "Veg Handi",
                                  "category": "Main Course",
                                  "imageId": "FOOD_CATALOG/IMAGES/CMS/2024/7/12/8ce7aa5b-6116-4feb-a8f6-0a9bc2f17acb_3261e9d8-5420-48b5-9ac3-96d8d44b70a5.jpg",
                                  "isVeg": 1,
                                  "price": 21000,
                                  "variants": {
                                    
                                  },
                                  "variantsV2": {
                                    
                                  },
                                  "addons": [
                                    {
                                      "groupId": "81548205",
                                      "groupName": "Choice Of Preperation",
                                      "choices": [
                                        {
                                          "id": "66005615",
                                          "name": "Jain",
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        },
                                        {
                                          "id": "66005614",
                                          "name": "Regular",
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        }
                                      ],
                                      "maxAddons": 1,
                                      "maxFreeAddons": -1,
                                      "minAddons": 1
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
                                      "ratingCount": "57 ratings",
                                      "ratingCountV2": "57"
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
                                  "id": "17264513",
                                  "name": "Veg Kadai.",
                                  "category": "Main Course",
                                  "imageId": "b3qpc5y3me6svrbqgdcj",
                                  "isVeg": 1,
                                  "price": 21000,
                                  "variants": {
                                    
                                  },
                                  "variantsV2": {
                                    
                                  },
                                  "addons": [
                                    {
                                      "groupId": "81548204",
                                      "groupName": "Choice Of Preperation",
                                      "choices": [
                                        {
                                          "id": "66005615",
                                          "name": "Jain",
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        },
                                        {
                                          "id": "66005614",
                                          "name": "Regular",
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        }
                                      ],
                                      "maxAddons": 1,
                                      "maxFreeAddons": -1,
                                      "minAddons": 1
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
                                      "ratingCount": "129 ratings",
                                      "ratingCountV2": "129"
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
                                  "id": "17264515",
                                  "name": "Veg Kolhapuri",
                                  "category": "Main Course",
                                  "imageId": "FOOD_CATALOG/IMAGES/CMS/2024/7/12/ed8fc7e2-04cf-4b97-b913-6d61076f92f7_94d98470-77e3-4aa0-bcf7-331cae347feb.jpg",
                                  "isVeg": 1,
                                  "price": 22000,
                                  "variants": {
                                    
                                  },
                                  "variantsV2": {
                                    
                                  },
                                  "addons": [
                                    {
                                      "groupId": "81548211",
                                      "groupName": "Choice Of Preperation",
                                      "choices": [
                                        {
                                          "id": "66005615",
                                          "name": "Jain",
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        },
                                        {
                                          "id": "66005614",
                                          "name": "Regular",
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        }
                                      ],
                                      "maxAddons": 1,
                                      "maxFreeAddons": -1,
                                      "minAddons": 1
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
                                      "ratingCount": "126 ratings",
                                      "ratingCountV2": "126"
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
                                  "id": "17264517",
                                  "name": "Veg Jaipuri",
                                  "category": "Main Course",
                                  "imageId": "FOOD_CATALOG/IMAGES/CMS/2024/7/12/7af8145f-c179-4dc5-b35c-216a9fe3c858_2a27c52c-8157-4f69-8f56-c518df6daa0d.jpeg",
                                  "isVeg": 1,
                                  "price": 22000,
                                  "variants": {
                                    
                                  },
                                  "variantsV2": {
                                    
                                  },
                                  "addons": [
                                    {
                                      "groupId": "81548310",
                                      "groupName": "Choice Of Preperation",
                                      "choices": [
                                        {
                                          "id": "66005615",
                                          "name": "Jain",
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        },
                                        {
                                          "id": "66005614",
                                          "name": "Regular",
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        }
                                      ],
                                      "maxAddons": 1,
                                      "maxFreeAddons": -1,
                                      "minAddons": 1
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
                                      "ratingCount": "23 ratings",
                                      "ratingCountV2": "23"
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
                                  "id": "17264519",
                                  "name": "Veg Toofani",
                                  "category": "Main Course",
                                  "imageId": "FOOD_CATALOG/IMAGES/CMS/2024/7/12/5b9ca985-f073-4688-874a-c5b2869feba3_039d7dad-6a2a-40ca-ad59-3c4649b25eaf.jpeg",
                                  "isVeg": 1,
                                  "price": 22000,
                                  "variants": {
                                    
                                  },
                                  "variantsV2": {
                                    
                                  },
                                  "addons": [
                                    {
                                      "groupId": "81548309",
                                      "groupName": "Choice Of Preperation",
                                      "choices": [
                                        {
                                          "id": "66005615",
                                          "name": "Jain",
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        },
                                        {
                                          "id": "66005614",
                                          "name": "Regular",
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        }
                                      ],
                                      "maxAddons": 1,
                                      "maxFreeAddons": -1,
                                      "minAddons": 1
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
                                      "ratingCount": "58 ratings",
                                      "ratingCountV2": "58"
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
                                  "id": "17264524",
                                  "name": "Veg Hara Masala",
                                  "category": "Main Course",
                                  "isVeg": 1,
                                  "price": 22000,
                                  "variants": {
                                    
                                  },
                                  "variantsV2": {
                                    
                                  },
                                  "addons": [
                                    {
                                      "groupId": "81548305",
                                      "groupName": "Choice Of Preperation",
                                      "choices": [
                                        {
                                          "id": "66005615",
                                          "name": "Jain",
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        },
                                        {
                                          "id": "66005614",
                                          "name": "Regular",
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        }
                                      ],
                                      "maxAddons": 1,
                                      "maxFreeAddons": -1,
                                      "minAddons": 1
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
                                      "rating": "3.5",
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
                                  "id": "17264525",
                                  "name": "Kaju Curry",
                                  "category": "Main Course",
                                  "imageId": "agmxqu6pv0eiyyf2beny",
                                  "isVeg": 1,
                                  "price": 27000,
                                  "variants": {
                                    
                                  },
                                  "variantsV2": {
                                    
                                  },
                                  "addons": [
                                    {
                                      "groupId": "81548304",
                                      "groupName": "Choice Of Preperation",
                                      "choices": [
                                        {
                                          "id": "66005615",
                                          "name": "Jain",
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        },
                                        {
                                          "id": "66005614",
                                          "name": "Regular",
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        }
                                      ],
                                      "maxAddons": 1,
                                      "maxFreeAddons": -1,
                                      "minAddons": 1
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
                                      "ratingCount": "207 ratings",
                                      "ratingCountV2": "207"
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
                                  "id": "17264529",
                                  "name": "Mushroom Masala",
                                  "category": "Main Course",
                                  "isVeg": 1,
                                  "price": 24000,
                                  "variants": {
                                    
                                  },
                                  "variantsV2": {
                                    
                                  },
                                  "addons": [
                                    {
                                      "groupId": "81548302",
                                      "groupName": "Choice Of Preperation",
                                      "choices": [
                                        {
                                          "id": "66005615",
                                          "name": "Jain",
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        },
                                        {
                                          "id": "66005614",
                                          "name": "Regular",
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        }
                                      ],
                                      "maxAddons": 1,
                                      "maxFreeAddons": -1,
                                      "minAddons": 1
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
                                  "id": "17264534",
                                  "name": "Veg Balti",
                                  "category": "Main Course",
                                  "isVeg": 1,
                                  "price": 24000,
                                  "variants": {
                                    
                                  },
                                  "variantsV2": {
                                    
                                  },
                                  "addons": [
                                    {
                                      "groupId": "81548299",
                                      "groupName": "Choice Of Preperation",
                                      "choices": [
                                        {
                                          "id": "66005615",
                                          "name": "Jain",
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        },
                                        {
                                          "id": "66005614",
                                          "name": "Regular",
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        }
                                      ],
                                      "maxAddons": 1,
                                      "maxFreeAddons": -1,
                                      "minAddons": 1
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
                                      "ratingCount": "9 ratings",
                                      "ratingCountV2": "9"
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
                                  "id": "17264539",
                                  "name": "Kaju Mushroom",
                                  "category": "Main Course",
                                  "isVeg": 1,
                                  "price": 22000,
                                  "variants": {
                                    
                                  },
                                  "variantsV2": {
                                    
                                  },
                                  "addons": [
                                    {
                                      "groupId": "81548298",
                                      "groupName": "Choice Of Preperation",
                                      "choices": [
                                        {
                                          "id": "66005615",
                                          "name": "Jain",
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        },
                                        {
                                          "id": "66005614",
                                          "name": "Regular",
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        }
                                      ],
                                      "maxAddons": 1,
                                      "maxFreeAddons": -1,
                                      "minAddons": 1
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
                                      "rating": "5.0",
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
                                  "id": "17264542",
                                  "name": "Dum Aloo",
                                  "category": "Main Course",
                                  "imageId": "7d2b4c3d25d3363c285c56fa29d612b9",
                                  "isVeg": 1,
                                  "price": 18500,
                                  "variants": {
                                    
                                  },
                                  "variantsV2": {
                                    
                                  },
                                  "addons": [
                                    {
                                      "groupId": "81548297",
                                      "groupName": "Choice Of Preperation",
                                      "choices": [
                                        {
                                          "id": "66005615",
                                          "name": "Jain",
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        },
                                        {
                                          "id": "66005614",
                                          "name": "Regular",
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        }
                                      ],
                                      "maxAddons": 1,
                                      "maxFreeAddons": -1,
                                      "minAddons": 1
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
                                      "rating": "3.6",
                                      "ratingCount": "37 ratings",
                                      "ratingCountV2": "37"
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
                                  "id": "17264546",
                                  "name": "Plain Palak",
                                  "category": "Main Course",
                                  "isVeg": 1,
                                  "price": 18000,
                                  "variants": {
                                    
                                  },
                                  "variantsV2": {
                                    
                                  },
                                  "addons": [
                                    {
                                      "groupId": "81548295",
                                      "groupName": "Choice Of Preperation",
                                      "choices": [
                                        {
                                          "id": "66005615",
                                          "name": "Jain",
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        },
                                        {
                                          "id": "66005614",
                                          "name": "Regular",
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        }
                                      ],
                                      "maxAddons": 1,
                                      "maxFreeAddons": -1,
                                      "minAddons": 1
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
                                  "id": "17264548",
                                  "name": "Chana Masala",
                                  "category": "Main Course",
                                  "imageId": "bfc79cd8f9cf92d8fb16808d49a43961",
                                  "isVeg": 1,
                                  "price": 18000,
                                  "variants": {
                                    
                                  },
                                  "variantsV2": {
                                    
                                  },
                                  "addons": [
                                    {
                                      "groupId": "81548294",
                                      "groupName": "Choice Of Preperation",
                                      "choices": [
                                        {
                                          "id": "66005615",
                                          "name": "Jain",
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        },
                                        {
                                          "id": "66005614",
                                          "name": "Regular",
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        }
                                      ],
                                      "maxAddons": 1,
                                      "maxFreeAddons": -1,
                                      "minAddons": 1
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
                                      "ratingCount": "75 ratings",
                                      "ratingCountV2": "75"
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
                                  "id": "17264551",
                                  "name": "Corn Palak",
                                  "category": "Main Course",
                                  "isVeg": 1,
                                  "price": 19000,
                                  "variants": {
                                    
                                  },
                                  "variantsV2": {
                                    
                                  },
                                  "addons": [
                                    {
                                      "groupId": "81548293",
                                      "groupName": "Choice Of Preperation",
                                      "choices": [
                                        {
                                          "id": "66005615",
                                          "name": "Jain",
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        },
                                        {
                                          "id": "66005614",
                                          "name": "Regular",
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        }
                                      ],
                                      "maxAddons": 1,
                                      "maxFreeAddons": -1,
                                      "minAddons": 1
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
                                      "rating": "5.0",
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
                                  "id": "17264553",
                                  "name": "Aloo Palak",
                                  "category": "Main Course",
                                  "imageId": "FOOD_CATALOG/IMAGES/CMS/2024/3/8/b199b61a-62ad-40f1-a829-fb2e52281d91_78cb40b6-0b0b-4ab5-b1f7-4c58819121d7",
                                  "isVeg": 1,
                                  "price": 17500,
                                  "variants": {
                                    
                                  },
                                  "variantsV2": {
                                    
                                  },
                                  "addons": [
                                    {
                                      "groupId": "81548291",
                                      "groupName": "Choice Of Preperation",
                                      "choices": [
                                        {
                                          "id": "66005615",
                                          "name": "Jain",
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        },
                                        {
                                          "id": "66005614",
                                          "name": "Regular",
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        }
                                      ],
                                      "maxAddons": 1,
                                      "maxFreeAddons": -1,
                                      "minAddons": 1
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
                                  "id": "17264556",
                                  "name": "Aloo Suki Bhaji",
                                  "category": "Main Course",
                                  "isVeg": 1,
                                  "price": 18000,
                                  "variants": {
                                    
                                  },
                                  "variantsV2": {
                                    
                                  },
                                  "addons": [
                                    {
                                      "groupId": "81548289",
                                      "groupName": "Choice Of Preperation",
                                      "choices": [
                                        {
                                          "id": "66005615",
                                          "name": "Jain",
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        },
                                        {
                                          "id": "66005614",
                                          "name": "Regular",
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        }
                                      ],
                                      "maxAddons": 1,
                                      "maxFreeAddons": -1,
                                      "minAddons": 1
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
                                      "rating": "5.0",
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
                                  "id": "37907823",
                                  "name": "Veg Deewani Handi",
                                  "category": "Main Course",
                                  "isVeg": 1,
                                  "price": 24500,
                                  "variants": {
                                    
                                  },
                                  "variantsV2": {
                                    
                                  },
                                  "addons": [
                                    {
                                      "groupId": "81548292",
                                      "groupName": "Choice Of Preperation",
                                      "choices": [
                                        {
                                          "id": "66005615",
                                          "name": "Jain",
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        },
                                        {
                                          "id": "66005614",
                                          "name": "Regular",
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        }
                                      ],
                                      "maxAddons": 1,
                                      "maxFreeAddons": -1,
                                      "minAddons": 1
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
                                  "id": "67070305",
                                  "name": "Aloo Mutter",
                                  "category": "Main Course",
                                  "imageId": "fvldqehkm8bpkvvwddf7",
                                  "isVeg": 1,
                                  "price": 17500,
                                  "variants": {
                                    
                                  },
                                  "variantsV2": {
                                    
                                  },
                                  "addons": [
                                    {
                                      "groupId": "81548290",
                                      "groupName": "Choice Of Preperation",
                                      "choices": [
                                        {
                                          "id": "66005615",
                                          "name": "Jain",
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        },
                                        {
                                          "id": "66005614",
                                          "name": "Regular",
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        }
                                      ],
                                      "maxAddons": 1,
                                      "maxFreeAddons": -1,
                                      "minAddons": 1
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
                                  "id": "67070306",
                                  "name": "Baby Corn Masala",
                                  "category": "Main Course",
                                  "isVeg": 1,
                                  "price": 24000,
                                  "variants": {
                                    
                                  },
                                  "variantsV2": {
                                    
                                  },
                                  "addons": [
                                    {
                                      "groupId": "81548306",
                                      "groupName": "Choice Of Preperation",
                                      "choices": [
                                        {
                                          "id": "66005615",
                                          "name": "Jain",
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        },
                                        {
                                          "id": "66005614",
                                          "name": "Regular",
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        }
                                      ],
                                      "maxAddons": 1,
                                      "maxFreeAddons": -1,
                                      "minAddons": 1
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
                                      "rating": "5.0",
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
                                  "id": "67070310",
                                  "name": "Mix Vegetable",
                                  "category": "Main Course",
                                  "isVeg": 1,
                                  "price": 18000,
                                  "variants": {
                                    
                                  },
                                  "variantsV2": {
                                    
                                  },
                                  "addons": [
                                    {
                                      "groupId": "81548296",
                                      "groupName": "Choice Of Preperation",
                                      "choices": [
                                        {
                                          "id": "66005615",
                                          "name": "Jain",
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        },
                                        {
                                          "id": "66005614",
                                          "name": "Regular",
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        }
                                      ],
                                      "maxAddons": 1,
                                      "maxFreeAddons": -1,
                                      "minAddons": 1
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
                                      "ratingCount": "24 ratings",
                                      "ratingCountV2": "24"
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
                                  "id": "67070311",
                                  "name": "Mushroom Muttar Masala",
                                  "category": "Main Course",
                                  "isVeg": 1,
                                  "price": 24000,
                                  "variants": {
                                    
                                  },
                                  "variantsV2": {
                                    
                                  },
                                  "addons": [
                                    {
                                      "groupId": "81548301",
                                      "groupName": "Choice Of Preperation",
                                      "choices": [
                                        {
                                          "id": "66005615",
                                          "name": "Jain",
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        },
                                        {
                                          "id": "66005614",
                                          "name": "Regular",
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        }
                                      ],
                                      "maxAddons": 1,
                                      "maxFreeAddons": -1,
                                      "minAddons": 1
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
                                  "id": "67070312",
                                  "name": "Navratna Korma",
                                  "category": "Main Course",
                                  "isVeg": 1,
                                  "price": 20000,
                                  "variants": {
                                    
                                  },
                                  "variantsV2": {
                                    
                                  },
                                  "addons": [
                                    {
                                      "groupId": "81548235",
                                      "groupName": "Choice Of Preperation",
                                      "choices": [
                                        {
                                          "id": "66005615",
                                          "name": "Jain",
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        },
                                        {
                                          "id": "66005614",
                                          "name": "Regular",
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        }
                                      ],
                                      "maxAddons": 1,
                                      "maxFreeAddons": -1,
                                      "minAddons": 1
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
                                  "id": "67070313",
                                  "name": "Veg Haydrabadi",
                                  "category": "Main Course",
                                  "isVeg": 1,
                                  "price": 22000,
                                  "variants": {
                                    
                                  },
                                  "variantsV2": {
                                    
                                  },
                                  "addons": [
                                    {
                                      "groupId": "81548311",
                                      "groupName": "Choice Of Preperation",
                                      "choices": [
                                        {
                                          "id": "66005615",
                                          "name": "Jain",
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        },
                                        {
                                          "id": "66005614",
                                          "name": "Regular",
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        }
                                      ],
                                      "maxAddons": 1,
                                      "maxFreeAddons": -1,
                                      "minAddons": 1
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
                                  "id": "67070314",
                                  "name": "Veg Kheema Masala",
                                  "category": "Main Course",
                                  "isVeg": 1,
                                  "price": 21500,
                                  "variants": {
                                    
                                  },
                                  "variantsV2": {
                                    
                                  },
                                  "addons": [
                                    {
                                      "groupId": "81548208",
                                      "groupName": "Choice Of Preperation",
                                      "choices": [
                                        {
                                          "id": "66005615",
                                          "name": "Jain",
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        },
                                        {
                                          "id": "66005614",
                                          "name": "Regular",
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        }
                                      ],
                                      "maxAddons": 1,
                                      "maxFreeAddons": -1,
                                      "minAddons": 1
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
                                  "id": "67070316",
                                  "name": "Veg Patiyala",
                                  "category": "Main Course",
                                  "isVeg": 1,
                                  "price": 24000,
                                  "variants": {
                                    
                                  },
                                  "variantsV2": {
                                    
                                  },
                                  "addons": [
                                    {
                                      "groupId": "81548307",
                                      "groupName": "Choice Of Preperation",
                                      "choices": [
                                        {
                                          "id": "66005615",
                                          "name": "Jain",
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        },
                                        {
                                          "id": "66005614",
                                          "name": "Regular",
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        }
                                      ],
                                      "maxAddons": 1,
                                      "maxFreeAddons": -1,
                                      "minAddons": 1
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
                                  "id": "94312744",
                                  "name": "Kaju Khoya (sweet)",
                                  "category": "Main Course",
                                  "isVeg": 1,
                                  "price": 27000,
                                  "variants": {
                                    
                                  },
                                  "variantsV2": {
                                    
                                  },
                                  "addons": [
                                    {
                                      "groupId": "81548303",
                                      "groupName": "Choice Of Preperation",
                                      "choices": [
                                        {
                                          "id": "66005615",
                                          "name": "Jain",
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        },
                                        {
                                          "id": "66005614",
                                          "name": "Regular",
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        }
                                      ],
                                      "maxAddons": 1,
                                      "maxFreeAddons": -1,
                                      "minAddons": 1
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
                                      "rating": "2.9",
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
                                  "id": "94312748",
                                  "name": "Veg Alpha",
                                  "category": "Main Course",
                                  "isVeg": 1,
                                  "price": 21500,
                                  "variants": {
                                    
                                  },
                                  "variantsV2": {
                                    
                                  },
                                  "addons": [
                                    {
                                      "groupId": "81548209",
                                      "groupName": "Choice Of Preperation",
                                      "choices": [
                                        {
                                          "id": "66005615",
                                          "name": "Jain",
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        },
                                        {
                                          "id": "66005614",
                                          "name": "Regular",
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        }
                                      ],
                                      "maxAddons": 1,
                                      "maxFreeAddons": -1,
                                      "minAddons": 1
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
                                  "id": "94312750",
                                  "name": "Veg Makhnwala",
                                  "category": "Main Course",
                                  "isVeg": 1,
                                  "price": 20000,
                                  "variants": {
                                    
                                  },
                                  "variantsV2": {
                                    
                                  },
                                  "addons": [
                                    {
                                      "groupId": "81548300",
                                      "groupName": "Choice Of Preperation",
                                      "choices": [
                                        {
                                          "id": "66005615",
                                          "name": "Jain",
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        },
                                        {
                                          "id": "66005614",
                                          "name": "Regular",
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        }
                                      ],
                                      "maxAddons": 1,
                                      "maxFreeAddons": -1,
                                      "minAddons": 1
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
                                      "rating": "5.0",
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
                                  "id": "94312751",
                                  "name": "Veg Tawa Masala",
                                  "category": "Main Course",
                                  "isVeg": 1,
                                  "price": 21000,
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
                        },
                        {
                          "title": "Paneer Main Course",
                          "itemCards": [
                            {
                              "card": {
                                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                "info": {
                                  "id": "17264454",
                                  "name": "Paneer Cheese Masala",
                                  "category": "Main Course",
                                  "isVeg": 1,
                                  "price": 26000,
                                  "variants": {
                                    
                                  },
                                  "variantsV2": {
                                    
                                  },
                                  "addons": [
                                    {
                                      "groupId": "81548284",
                                      "groupName": "Choice Of Preperation",
                                      "choices": [
                                        {
                                          "id": "66005615",
                                          "name": "Jain",
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        },
                                        {
                                          "id": "66005614",
                                          "name": "Regular",
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        }
                                      ],
                                      "maxAddons": 1,
                                      "maxFreeAddons": -1,
                                      "minAddons": 1
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
                                  "id": "17264457",
                                  "name": "Paneer Balti",
                                  "category": "Main Course",
                                  "isVeg": 1,
                                  "price": 26000,
                                  "variants": {
                                    
                                  },
                                  "variantsV2": {
                                    
                                  },
                                  "addons": [
                                    {
                                      "groupId": "81548278",
                                      "groupName": "Choice Of Preperation",
                                      "choices": [
                                        {
                                          "id": "66005615",
                                          "name": "Jain",
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        },
                                        {
                                          "id": "66005614",
                                          "name": "Regular",
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        }
                                      ],
                                      "maxAddons": 1,
                                      "maxFreeAddons": -1,
                                      "minAddons": 1
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
                                      "ratingCount": "302 ratings",
                                      "ratingCountV2": "302"
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
                                  "id": "17264459",
                                  "name": "Paneer Tawa Masala",
                                  "category": "Main Course",
                                  "isVeg": 1,
                                  "price": 26000,
                                  "variants": {
                                    
                                  },
                                  "variantsV2": {
                                    
                                  },
                                  "addons": [
                                    {
                                      "groupId": "81548275",
                                      "groupName": "Choice Of Preperation",
                                      "choices": [
                                        {
                                          "id": "66005615",
                                          "name": "Jain",
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        },
                                        {
                                          "id": "66005614",
                                          "name": "Regular",
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        }
                                      ],
                                      "maxAddons": 1,
                                      "maxFreeAddons": -1,
                                      "minAddons": 1
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
                                      "ratingCount": "315 ratings",
                                      "ratingCountV2": "315"
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
                                  "id": "17264461",
                                  "name": "Paneer Handi Masala",
                                  "category": "Main Course",
                                  "imageId": "a7a72c8ac4d870341aed175606642f5a",
                                  "isVeg": 1,
                                  "price": 25000,
                                  "variants": {
                                    
                                  },
                                  "variantsV2": {
                                    
                                  },
                                  "addons": [
                                    {
                                      "groupId": "81548274",
                                      "groupName": "Choice Of Preperation",
                                      "choices": [
                                        {
                                          "id": "66005615",
                                          "name": "Jain",
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        },
                                        {
                                          "id": "66005614",
                                          "name": "Regular",
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        }
                                      ],
                                      "maxAddons": 1,
                                      "maxFreeAddons": -1,
                                      "minAddons": 1
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
                                      "ratingCount": "319 ratings",
                                      "ratingCountV2": "319"
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
                                  "id": "17264464",
                                  "name": "Paneer Chatpata",
                                  "category": "Main Course",
                                  "isVeg": 1,
                                  "price": 23500,
                                  "variants": {
                                    
                                  },
                                  "variantsV2": {
                                    
                                  },
                                  "addons": [
                                    {
                                      "groupId": "81548271",
                                      "groupName": "Choice Of Preperation",
                                      "choices": [
                                        {
                                          "id": "66005615",
                                          "name": "Jain",
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        },
                                        {
                                          "id": "66005614",
                                          "name": "Regular",
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        }
                                      ],
                                      "maxAddons": 1,
                                      "maxFreeAddons": -1,
                                      "minAddons": 1
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
                                  "id": "17264465",
                                  "name": "Paneer Kadai",
                                  "category": "Main Course",
                                  "imageId": "FOOD_CATALOG/IMAGES/CMS/2024/7/12/cb6d09ed-9f67-4e20-92a6-2837c028c428_c3524268-2144-454e-b3ff-7a9fb05fda3c.jpg",
                                  "isVeg": 1,
                                  "price": 25000,
                                  "variants": {
                                    
                                  },
                                  "variantsV2": {
                                    
                                  },
                                  "addons": [
                                    {
                                      "groupId": "81548269",
                                      "groupName": "Choice Of Preperation",
                                      "choices": [
                                        {
                                          "id": "66005615",
                                          "name": "Jain",
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        },
                                        {
                                          "id": "66005614",
                                          "name": "Regular",
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        }
                                      ],
                                      "maxAddons": 1,
                                      "maxFreeAddons": -1,
                                      "minAddons": 1
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
                                      "ratingCount": "51 ratings",
                                      "ratingCountV2": "51"
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
                                  "id": "17264467",
                                  "name": "Cheese Butter Masala",
                                  "category": "Main Course",
                                  "isVeg": 1,
                                  "price": 26500,
                                  "variants": {
                                    
                                  },
                                  "variantsV2": {
                                    
                                  },
                                  "addons": [
                                    {
                                      "groupId": "81548268",
                                      "groupName": "Choice Of Preperation",
                                      "choices": [
                                        {
                                          "id": "66005615",
                                          "name": "Jain",
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        },
                                        {
                                          "id": "66005614",
                                          "name": "Regular",
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        }
                                      ],
                                      "maxAddons": 1,
                                      "maxFreeAddons": -1,
                                      "minAddons": 1
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
                                      "ratingCount": "92 ratings",
                                      "ratingCountV2": "92"
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
                                  "id": "17264468",
                                  "name": "Paneer Kaju Masala",
                                  "category": "Main Course",
                                  "isVeg": 1,
                                  "price": 24000,
                                  "variants": {
                                    
                                  },
                                  "variantsV2": {
                                    
                                  },
                                  "addons": [
                                    {
                                      "groupId": "81548265",
                                      "groupName": "Choice Of Preperation",
                                      "choices": [
                                        {
                                          "id": "66005615",
                                          "name": "Jain",
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        },
                                        {
                                          "id": "66005614",
                                          "name": "Regular",
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        }
                                      ],
                                      "maxAddons": 1,
                                      "maxFreeAddons": -1,
                                      "minAddons": 1
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
                                      "ratingCount": "120 ratings",
                                      "ratingCountV2": "120"
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
                                  "id": "17264469",
                                  "name": "Paneer Rajwadi",
                                  "category": "Main Course",
                                  "imageId": "FOOD_CATALOG/IMAGES/CMS/2024/7/12/d017181d-bc1a-4670-8d0a-ae68cf8aa2b7_ffe2f326-df74-4dc2-a01d-102d3bb76386.jpeg",
                                  "isVeg": 1,
                                  "price": 23500,
                                  "variants": {
                                    
                                  },
                                  "variantsV2": {
                                    
                                  },
                                  "addons": [
                                    {
                                      "groupId": "81548263",
                                      "groupName": "Choice Of Preperation",
                                      "choices": [
                                        {
                                          "id": "66005615",
                                          "name": "Jain",
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        },
                                        {
                                          "id": "66005614",
                                          "name": "Regular",
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        }
                                      ],
                                      "maxAddons": 1,
                                      "maxFreeAddons": -1,
                                      "minAddons": 1
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
                                  "id": "17264471",
                                  "name": "Paneer Shahi",
                                  "category": "Main Course",
                                  "imageId": "mjic7cljxsvs0utiteu8",
                                  "isVeg": 1,
                                  "price": 23500,
                                  "variants": {
                                    
                                  },
                                  "variantsV2": {
                                    
                                  },
                                  "addons": [
                                    {
                                      "groupId": "81548256",
                                      "groupName": "Choice Of Preperation",
                                      "choices": [
                                        {
                                          "id": "66005615",
                                          "name": "Jain",
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        },
                                        {
                                          "id": "66005614",
                                          "name": "Regular",
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        }
                                      ],
                                      "maxAddons": 1,
                                      "maxFreeAddons": -1,
                                      "minAddons": 1
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
                                  "id": "17264472",
                                  "name": "Paneer Hungama",
                                  "category": "Main Course",
                                  "isVeg": 1,
                                  "price": 23500,
                                  "variants": {
                                    
                                  },
                                  "variantsV2": {
                                    
                                  },
                                  "addons": [
                                    {
                                      "groupId": "81548247",
                                      "groupName": "Choice Of Preperation",
                                      "choices": [
                                        {
                                          "id": "66005615",
                                          "name": "Jain",
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        },
                                        {
                                          "id": "66005614",
                                          "name": "Regular",
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        }
                                      ],
                                      "maxAddons": 1,
                                      "maxFreeAddons": -1,
                                      "minAddons": 1
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
                                      "rating": "5.0",
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
                                  "id": "17264473",
                                  "name": "Paneer Toofani",
                                  "category": "Main Course",
                                  "isVeg": 1,
                                  "price": 24000,
                                  "variants": {
                                    
                                  },
                                  "variantsV2": {
                                    
                                  },
                                  "addons": [
                                    {
                                      "groupId": "81548246",
                                      "groupName": "Choice Of Preperation",
                                      "choices": [
                                        {
                                          "id": "66005615",
                                          "name": "Jain",
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        },
                                        {
                                          "id": "66005614",
                                          "name": "Regular",
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        }
                                      ],
                                      "maxAddons": 1,
                                      "maxFreeAddons": -1,
                                      "minAddons": 1
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
                                  "id": "17264474",
                                  "name": "Paneer Tikka Masala",
                                  "category": "Main Course",
                                  "isVeg": 1,
                                  "price": 23000,
                                  "variants": {
                                    
                                  },
                                  "variantsV2": {
                                    
                                  },
                                  "addons": [
                                    {
                                      "groupId": "81548244",
                                      "groupName": "Choice Of Preperation",
                                      "choices": [
                                        {
                                          "id": "66005615",
                                          "name": "Jain",
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        },
                                        {
                                          "id": "66005614",
                                          "name": "Regular",
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        }
                                      ],
                                      "maxAddons": 1,
                                      "maxFreeAddons": -1,
                                      "minAddons": 1
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
                                      "ratingCount": "403 ratings",
                                      "ratingCountV2": "403"
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
                                  "id": "17264475",
                                  "name": "Paneer Butter Masala",
                                  "category": "Main Course",
                                  "isVeg": 1,
                                  "price": 23000,
                                  "variants": {
                                    
                                  },
                                  "variantsV2": {
                                    
                                  },
                                  "addons": [
                                    {
                                      "groupId": "81548242",
                                      "groupName": "Choice Of Preperation",
                                      "choices": [
                                        {
                                          "id": "66005615",
                                          "name": "Jain",
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        },
                                        {
                                          "id": "66005614",
                                          "name": "Regular",
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        }
                                      ],
                                      "maxAddons": 1,
                                      "maxFreeAddons": -1,
                                      "minAddons": 1
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
                                      "ratingCount": "275 ratings",
                                      "ratingCountV2": "275"
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
                                  "id": "17264478",
                                  "name": "Paneer Pasanda",
                                  "category": "Main Course",
                                  "isVeg": 1,
                                  "price": 25000,
                                  "variants": {
                                    
                                  },
                                  "variantsV2": {
                                    
                                  },
                                  "addons": [
                                    {
                                      "groupId": "81548239",
                                      "groupName": "Choice Of Preperation",
                                      "choices": [
                                        {
                                          "id": "66005615",
                                          "name": "Jain",
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        },
                                        {
                                          "id": "66005614",
                                          "name": "Regular",
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        }
                                      ],
                                      "maxAddons": 1,
                                      "maxFreeAddons": -1,
                                      "minAddons": 1
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
                                      "ratingCount": "13 ratings",
                                      "ratingCountV2": "13"
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
                                  "id": "17264479",
                                  "name": "Paneer Hara Masala",
                                  "category": "Main Course",
                                  "isVeg": 1,
                                  "price": 24000,
                                  "variants": {
                                    
                                  },
                                  "variantsV2": {
                                    
                                  },
                                  "addons": [
                                    {
                                      "groupId": "81548238",
                                      "groupName": "Choice Of Preperation",
                                      "choices": [
                                        {
                                          "id": "66005615",
                                          "name": "Jain",
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        },
                                        {
                                          "id": "66005614",
                                          "name": "Regular",
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        }
                                      ],
                                      "maxAddons": 1,
                                      "maxFreeAddons": -1,
                                      "minAddons": 1
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
                                      "rating": "5.0",
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
                                  "id": "17264480",
                                  "name": "Paneer Bhurji",
                                  "category": "Main Course",
                                  "imageId": "FOOD_CATALOG/IMAGES/CMS/2024/5/28/4a5f294b-27bf-4fe9-84d7-2af4ea1500b1_78d459a4-c2bf-4de7-b75f-b0a383791248.jpg",
                                  "isVeg": 1,
                                  "price": 26000,
                                  "variants": {
                                    
                                  },
                                  "variantsV2": {
                                    
                                  },
                                  "addons": [
                                    {
                                      "groupId": "81548237",
                                      "groupName": "Choice Of Preperation",
                                      "choices": [
                                        {
                                          "id": "66005615",
                                          "name": "Jain",
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        },
                                        {
                                          "id": "66005614",
                                          "name": "Regular",
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        }
                                      ],
                                      "maxAddons": 1,
                                      "maxFreeAddons": -1,
                                      "minAddons": 1
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
                                  "id": "17264481",
                                  "name": "Paneer Palak",
                                  "category": "Main Course",
                                  "imageId": "FOOD_CATALOG/IMAGES/CMS/2024/5/23/88953ee4-4580-4e10-b616-84dae602c404_de1329f6-0410-4d76-bc0b-6a3f7855bbb3.jpg",
                                  "isVeg": 1,
                                  "price": 21000,
                                  "variants": {
                                    
                                  },
                                  "variantsV2": {
                                    
                                  },
                                  "addons": [
                                    {
                                      "groupId": "81548236",
                                      "groupName": "Choice Of Preperation",
                                      "choices": [
                                        {
                                          "id": "66005615",
                                          "name": "Jain",
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        },
                                        {
                                          "id": "66005614",
                                          "name": "Regular",
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        }
                                      ],
                                      "maxAddons": 1,
                                      "maxFreeAddons": -1,
                                      "minAddons": 1
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
                                  "id": "17264485",
                                  "name": "Paneer Mushroom Masala",
                                  "category": "Main Course",
                                  "isVeg": 1,
                                  "price": 24500,
                                  "variants": {
                                    
                                  },
                                  "variantsV2": {
                                    
                                  },
                                  "addons": [
                                    {
                                      "groupId": "81548231",
                                      "groupName": "Choice Of Preperation",
                                      "choices": [
                                        {
                                          "id": "66005615",
                                          "name": "Jain",
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        },
                                        {
                                          "id": "66005614",
                                          "name": "Regular",
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        }
                                      ],
                                      "maxAddons": 1,
                                      "maxFreeAddons": -1,
                                      "minAddons": 1
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
                                      "rating": "3.6",
                                      "ratingCount": "13 ratings",
                                      "ratingCountV2": "13"
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
                                  "id": "67070241",
                                  "name": "Paneer Lasunia",
                                  "category": "Main Course",
                                  "isVeg": 1,
                                  "price": 24000,
                                  "variants": {
                                    
                                  },
                                  "variantsV2": {
                                    
                                  },
                                  "addons": [
                                    {
                                      "groupId": "81548283",
                                      "groupName": "Choice Of Preperation",
                                      "choices": [
                                        {
                                          "id": "66005615",
                                          "name": "Jain",
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        },
                                        {
                                          "id": "66005614",
                                          "name": "Regular",
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        }
                                      ],
                                      "maxAddons": 1,
                                      "maxFreeAddons": -1,
                                      "minAddons": 1
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
                                  "id": "67070252",
                                  "name": "Paneer Nizamee",
                                  "category": "Main Course",
                                  "isVeg": 1,
                                  "price": 23000,
                                  "variants": {
                                    
                                  },
                                  "variantsV2": {
                                    
                                  },
                                  "addons": [
                                    {
                                      "groupId": "81548240",
                                      "groupName": "Choice Of Preperation",
                                      "choices": [
                                        {
                                          "id": "66005615",
                                          "name": "Jain",
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        },
                                        {
                                          "id": "66005614",
                                          "name": "Regular",
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        }
                                      ],
                                      "maxAddons": 1,
                                      "maxFreeAddons": -1,
                                      "minAddons": 1
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
                                      "rating": "2.3",
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
                                  "id": "67070318",
                                  "name": "Sp.cheese Begam Bahar",
                                  "category": "Main Course",
                                  "imageId": "FOOD_CATALOG/IMAGES/CMS/2024/7/12/e90d4519-d267-43d7-899b-405a851f500f_bc030113-9140-4bcd-8617-9f4fa5834ded.jpeg",
                                  "isVeg": 1,
                                  "price": 28500,
                                  "variants": {
                                    
                                  },
                                  "variantsV2": {
                                    
                                  },
                                  "addons": [
                                    {
                                      "groupId": "81548279",
                                      "groupName": "Choice Of Preperation",
                                      "choices": [
                                        {
                                          "id": "66005615",
                                          "name": "Jain",
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        },
                                        {
                                          "id": "66005614",
                                          "name": "Regular",
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        }
                                      ],
                                      "maxAddons": 1,
                                      "maxFreeAddons": -1,
                                      "minAddons": 1
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
                                      "ratingCount": "7 ratings",
                                      "ratingCountV2": "7"
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
                                  "id": "67070319",
                                  "name": "Lasunia Palak",
                                  "category": "Main Course",
                                  "isVeg": 1,
                                  "price": 22000,
                                  "variants": {
                                    
                                  },
                                  "variantsV2": {
                                    
                                  },
                                  "addons": [
                                    {
                                      "groupId": "81548233",
                                      "groupName": "Choice Of Preperation",
                                      "choices": [
                                        {
                                          "id": "66005615",
                                          "name": "Jain",
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        },
                                        {
                                          "id": "66005614",
                                          "name": "Regular",
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        }
                                      ],
                                      "maxAddons": 1,
                                      "maxFreeAddons": -1,
                                      "minAddons": 1
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
                                  "id": "67070320",
                                  "name": "Sp.paneer Alpha",
                                  "category": "Main Course",
                                  "isVeg": 1,
                                  "price": 28500,
                                  "variants": {
                                    
                                  },
                                  "variantsV2": {
                                    
                                  },
                                  "addons": [
                                    {
                                      "groupId": "81548276",
                                      "groupName": "Choice Of Preperation",
                                      "choices": [
                                        {
                                          "id": "66005615",
                                          "name": "Jain",
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        },
                                        {
                                          "id": "66005614",
                                          "name": "Regular",
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        }
                                      ],
                                      "maxAddons": 1,
                                      "maxFreeAddons": -1,
                                      "minAddons": 1
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
                                      "rating": "2.3",
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
                                  "id": "67070321",
                                  "name": "Sp.paneer Angara",
                                  "category": "Main Course",
                                  "imageId": "FOOD_CATALOG/IMAGES/CMS/2024/3/13/55696043-bafb-41e1-b359-4720c2a7390c_7d9f0c7f-9062-4122-8fce-91c840ea4e61.jpeg",
                                  "isVeg": 1,
                                  "price": 28500,
                                  "variants": {
                                    
                                  },
                                  "variantsV2": {
                                    
                                  },
                                  "addons": [
                                    {
                                      "groupId": "81548249",
                                      "groupName": "Choice Of Preperation",
                                      "choices": [
                                        {
                                          "id": "66005615",
                                          "name": "Jain",
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        },
                                        {
                                          "id": "66005614",
                                          "name": "Regular",
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        }
                                      ],
                                      "maxAddons": 1,
                                      "maxFreeAddons": -1,
                                      "minAddons": 1
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
                                  "id": "94312752",
                                  "name": "Paneer Korma (sweet)",
                                  "category": "Main Course",
                                  "isVeg": 1,
                                  "price": 23500,
                                  "variants": {
                                    
                                  },
                                  "variantsV2": {
                                    
                                  },
                                  "addons": [
                                    {
                                      "groupId": "81548241",
                                      "groupName": "Choice Of Preperation",
                                      "choices": [
                                        {
                                          "id": "66005615",
                                          "name": "Jain",
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        },
                                        {
                                          "id": "66005614",
                                          "name": "Regular",
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        }
                                      ],
                                      "maxAddons": 1,
                                      "maxFreeAddons": -1,
                                      "minAddons": 1
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
                                  "id": "94312753",
                                  "name": "Paneer Lababdar (sweet)",
                                  "category": "Main Course",
                                  "isVeg": 1,
                                  "price": 23500,
                                  "variants": {
                                    
                                  },
                                  "variantsV2": {
                                    
                                  },
                                  "addons": [
                                    {
                                      "groupId": "81548232",
                                      "groupName": "Choice Of Preperation",
                                      "choices": [
                                        {
                                          "id": "66005615",
                                          "name": "Jain",
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        },
                                        {
                                          "id": "66005614",
                                          "name": "Regular",
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        }
                                      ],
                                      "maxAddons": 1,
                                      "maxFreeAddons": -1,
                                      "minAddons": 1
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
                                      "ratingCount": "241 ratings",
                                      "ratingCountV2": "241"
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
                                  "id": "94312754",
                                  "name": "Paneer Mutter",
                                  "category": "Main Course",
                                  "isVeg": 1,
                                  "price": 18500,
                                  "variants": {
                                    
                                  },
                                  "variantsV2": {
                                    
                                  },
                                  "addons": [
                                    {
                                      "groupId": "81548234",
                                      "groupName": "Choice Of Preperation",
                                      "choices": [
                                        {
                                          "id": "66005615",
                                          "name": "Jain",
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        },
                                        {
                                          "id": "66005614",
                                          "name": "Regular",
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        }
                                      ],
                                      "maxAddons": 1,
                                      "maxFreeAddons": -1,
                                      "minAddons": 1
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
                                  "id": "94312755",
                                  "name": "Paneer Patiyala",
                                  "category": "Main Course",
                                  "isVeg": 1,
                                  "price": 24500,
                                  "variants": {
                                    
                                  },
                                  "variantsV2": {
                                    
                                  },
                                  "addons": [
                                    {
                                      "groupId": "81548260",
                                      "groupName": "Choice Of Preperation",
                                      "choices": [
                                        {
                                          "id": "66005615",
                                          "name": "Jain",
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        },
                                        {
                                          "id": "66005614",
                                          "name": "Regular",
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        }
                                      ],
                                      "maxAddons": 1,
                                      "maxFreeAddons": -1,
                                      "minAddons": 1
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
                          "title": "Dal Main Course",
                          "itemCards": [
                            {
                              "card": {
                                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                "info": {
                                  "id": "17264487",
                                  "name": "Dal Tadka'",
                                  "category": "Main Course",
                                  "imageId": "qmiu4e2yynqyktwilhsk",
                                  "isVeg": 1,
                                  "price": 17000,
                                  "variants": {
                                    
                                  },
                                  "variantsV2": {
                                    
                                  },
                                  "addons": [
                                    {
                                      "groupId": "81548288",
                                      "groupName": "Choice Of Preperation",
                                      "choices": [
                                        {
                                          "id": "66005615",
                                          "name": "Jain",
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        },
                                        {
                                          "id": "66005614",
                                          "name": "Regular",
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        }
                                      ],
                                      "maxAddons": 1,
                                      "maxFreeAddons": -1,
                                      "minAddons": 1
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
                                      "ratingCount": "345 ratings",
                                      "ratingCountV2": "345"
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
                                  "id": "17264489",
                                  "name": "Dal Fry Butter",
                                  "category": "Main Course",
                                  "imageId": "FOOD_CATALOG/IMAGES/CMS/2024/3/8/b3a29620-d100-416e-a15b-38342222f61f_c4b8a0ad-b9b6-444e-9ddb-b4f726cc28a5",
                                  "isVeg": 1,
                                  "price": 16500,
                                  "variants": {
                                    
                                  },
                                  "variantsV2": {
                                    
                                  },
                                  "addons": [
                                    {
                                      "groupId": "81548286",
                                      "groupName": "Choice Of Preperation",
                                      "choices": [
                                        {
                                          "id": "66005615",
                                          "name": "Jain",
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        },
                                        {
                                          "id": "66005614",
                                          "name": "Regular",
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        }
                                      ],
                                      "maxAddons": 1,
                                      "maxFreeAddons": -1,
                                      "minAddons": 1
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
                                      "ratingCount": "41 ratings",
                                      "ratingCountV2": "41"
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
                                  "id": "17264490",
                                  "name": "Dal Palak",
                                  "category": "Main Course",
                                  "isVeg": 1,
                                  "price": 16000,
                                  "variants": {
                                    
                                  },
                                  "variantsV2": {
                                    
                                  },
                                  "addons": [
                                    {
                                      "groupId": "81548285",
                                      "groupName": "Choice Of Preperation",
                                      "choices": [
                                        {
                                          "id": "66005615",
                                          "name": "Jain",
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        },
                                        {
                                          "id": "66005614",
                                          "name": "Regular",
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        }
                                      ],
                                      "maxAddons": 1,
                                      "maxFreeAddons": -1,
                                      "minAddons": 1
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
                                      "ratingCount": "9 ratings",
                                      "ratingCountV2": "9"
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
                                  "id": "67070273",
                                  "name": "Dal Fry'",
                                  "category": "Main Course",
                                  "imageId": "be20474a06007ae3496dab293b2fff24",
                                  "isVeg": 1,
                                  "price": 15500,
                                  "variants": {
                                    
                                  },
                                  "variantsV2": {
                                    
                                  },
                                  "addons": [
                                    {
                                      "groupId": "81548287",
                                      "groupName": "Choice Of Preperation",
                                      "choices": [
                                        {
                                          "id": "66005615",
                                          "name": "Jain",
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        },
                                        {
                                          "id": "66005614",
                                          "name": "Regular",
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        }
                                      ],
                                      "maxAddons": 1,
                                      "maxFreeAddons": -1,
                                      "minAddons": 1
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
                                      "ratingCount": "67 ratings",
                                      "ratingCountV2": "67"
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
                          "title": "Kofta Main Course",
                          "itemCards": [
                            {
                              "card": {
                                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                "info": {
                                  "id": "17264450",
                                  "name": "Nargis Kofta",
                                  "category": "Main Course",
                                  "isVeg": 1,
                                  "price": 23500,
                                  "variants": {
                                    
                                  },
                                  "variantsV2": {
                                    
                                  },
                                  "addons": [
                                    {
                                      "groupId": "126822593",
                                      "groupName": "Choice Of Preperation",
                                      "choices": [
                                        {
                                          "id": "66005615",
                                          "name": "Jain",
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        },
                                        {
                                          "id": "66005614",
                                          "name": "Regular",
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        }
                                      ],
                                      "maxAddons": 1,
                                      "maxFreeAddons": -1,
                                      "minAddons": 1
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
                                  "id": "67070278",
                                  "name": "Cheese Koftas",
                                  "category": "Main Course",
                                  "isVeg": 1,
                                  "price": 23500,
                                  "variants": {
                                    
                                  },
                                  "variantsV2": {
                                    
                                  },
                                  "addons": [
                                    {
                                      "groupId": "126822364",
                                      "groupName": "Choice Of Preperation",
                                      "choices": [
                                        {
                                          "id": "66005615",
                                          "name": "Jain",
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        },
                                        {
                                          "id": "66005614",
                                          "name": "Regular",
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        }
                                      ],
                                      "maxAddons": 1,
                                      "maxFreeAddons": -1,
                                      "minAddons": 1
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
                                      "rating": "2.1",
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
                                  "id": "67070279",
                                  "name": "Kadhai Kofta",
                                  "category": "Main Course",
                                  "isVeg": 1,
                                  "price": 23500,
                                  "variants": {
                                    
                                  },
                                  "variantsV2": {
                                    
                                  },
                                  "addons": [
                                    {
                                      "groupId": "126822508",
                                      "groupName": "Choice Of Preperation",
                                      "choices": [
                                        {
                                          "id": "66005615",
                                          "name": "Jain",
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        },
                                        {
                                          "id": "66005614",
                                          "name": "Regular",
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        }
                                      ],
                                      "maxAddons": 1,
                                      "maxFreeAddons": -1,
                                      "minAddons": 1
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
                                  "id": "67070281",
                                  "name": "Kaju Koftas",
                                  "category": "Main Course",
                                  "isVeg": 1,
                                  "price": 24000,
                                  "variants": {
                                    
                                  },
                                  "variantsV2": {
                                    
                                  },
                                  "addons": [
                                    {
                                      "groupId": "126822365",
                                      "groupName": "Choice Of Preperation",
                                      "choices": [
                                        {
                                          "id": "66005615",
                                          "name": "Jain",
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        },
                                        {
                                          "id": "66005614",
                                          "name": "Regular",
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        }
                                      ],
                                      "maxAddons": 1,
                                      "maxFreeAddons": -1,
                                      "minAddons": 1
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
                                  "id": "67070283",
                                  "name": "Kashmiri Kofta [sweet]",
                                  "category": "Main Course",
                                  "imageId": "uf4rmaqyhiwvkeun4gkk",
                                  "isVeg": 1,
                                  "price": 20500,
                                  "variants": {
                                    
                                  },
                                  "variantsV2": {
                                    
                                  },
                                  "addons": [
                                    {
                                      "groupId": "126822495",
                                      "groupName": "Choice Of Preperation",
                                      "choices": [
                                        {
                                          "id": "66005615",
                                          "name": "Jain",
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        },
                                        {
                                          "id": "66005614",
                                          "name": "Regular",
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        }
                                      ],
                                      "maxAddons": 1,
                                      "maxFreeAddons": -1,
                                      "minAddons": 1
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
                                      "rating": "1.6",
                                      "ratingCount": "23 ratings",
                                      "ratingCountV2": "23"
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
                                  "id": "67070284",
                                  "name": "Malai Kofta [sweet]",
                                  "category": "Main Course",
                                  "imageId": "FOOD_CATALOG/IMAGES/CMS/2024/7/12/76ed3cd8-3955-41d4-a96e-1526caf0ece4_ae8fd678-3ef1-4e85-90d5-508e15d55c10.jpg",
                                  "isVeg": 1,
                                  "price": 20500,
                                  "variants": {
                                    
                                  },
                                  "variantsV2": {
                                    
                                  },
                                  "addons": [
                                    {
                                      "groupId": "126822366",
                                      "groupName": "Choice Of Preperation",
                                      "choices": [
                                        {
                                          "id": "66005615",
                                          "name": "Jain",
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        },
                                        {
                                          "id": "66005614",
                                          "name": "Regular",
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        }
                                      ],
                                      "maxAddons": 1,
                                      "maxFreeAddons": -1,
                                      "minAddons": 1
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
                                  "id": "67070285",
                                  "name": "Paneer Koftas",
                                  "category": "Main Course",
                                  "imageId": "u6m2uegi2zecqzk730hr",
                                  "isVeg": 1,
                                  "price": 23500,
                                  "variants": {
                                    
                                  },
                                  "variantsV2": {
                                    
                                  },
                                  "addons": [
                                    {
                                      "groupId": "126822594",
                                      "groupName": "Choice Of Preperation",
                                      "choices": [
                                        {
                                          "id": "66005615",
                                          "name": "Jain",
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        },
                                        {
                                          "id": "66005614",
                                          "name": "Regular",
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        }
                                      ],
                                      "maxAddons": 1,
                                      "maxFreeAddons": -1,
                                      "minAddons": 1
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
                                  "id": "67070286",
                                  "name": "Vegetable Kofta",
                                  "category": "Main Course",
                                  "isVeg": 1,
                                  "price": 22000,
                                  "variants": {
                                    
                                  },
                                  "variantsV2": {
                                    
                                  },
                                  "addons": [
                                    {
                                      "groupId": "126822695",
                                      "groupName": "Choice Of Preperation",
                                      "choices": [
                                        {
                                          "id": "66005615",
                                          "name": "Jain",
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        },
                                        {
                                          "id": "66005614",
                                          "name": "Regular",
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        }
                                      ],
                                      "maxAddons": 1,
                                      "maxFreeAddons": -1,
                                      "minAddons": 1
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
                      "title": "Chinese",
                      "categories": [
                        {
                          "title": "Veg Chinese Main Course",
                          "itemCards": [
                            {
                              "card": {
                                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                "info": {
                                  "id": "17264586",
                                  "name": "Veg Sixty Five",
                                  "category": "Chinese",
                                  "isVeg": 1,
                                  "price": 22000,
                                  "variants": {
                                    
                                  },
                                  "variantsV2": {
                                    
                                  },
                                  "addons": [
                                    {
                                      "groupId": "126825234",
                                      "groupName": "Choice Of Preperation",
                                      "choices": [
                                        {
                                          "id": "66005615",
                                          "name": "Jain",
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        },
                                        {
                                          "id": "66005614",
                                          "name": "Regular",
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        }
                                      ],
                                      "maxAddons": 1,
                                      "maxFreeAddons": -1,
                                      "minAddons": 1
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
                                  "id": "67070221",
                                  "name": "Veg Manchurian Gravy",
                                  "category": "Chinese",
                                  "imageId": "ctjyt4fsxw3avubdlw13",
                                  "isVeg": 1,
                                  "price": 22000,
                                  "variants": {
                                    
                                  },
                                  "variantsV2": {
                                    
                                  },
                                  "addons": [
                                    {
                                      "groupId": "81548308",
                                      "groupName": "Choice Of Preperation",
                                      "choices": [
                                        {
                                          "id": "66005615",
                                          "name": "Jain",
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        },
                                        {
                                          "id": "66005614",
                                          "name": "Regular",
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        }
                                      ],
                                      "maxAddons": 1,
                                      "maxFreeAddons": -1,
                                      "minAddons": 1
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
                                      "rating": "3.4",
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
                                  "id": "67070297",
                                  "name": "Baby Corn Chilli",
                                  "category": "Chinese",
                                  "isVeg": 1,
                                  "price": 24500,
                                  "variants": {
                                    
                                  },
                                  "variantsV2": {
                                    
                                  },
                                  "addons": [
                                    {
                                      "groupId": "126822696",
                                      "groupName": "Choice Of Preperation",
                                      "choices": [
                                        {
                                          "id": "66005615",
                                          "name": "Jain",
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        },
                                        {
                                          "id": "66005614",
                                          "name": "Regular",
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        }
                                      ],
                                      "maxAddons": 1,
                                      "maxFreeAddons": -1,
                                      "minAddons": 1
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
                                      "rating": "3.1",
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
                                  "id": "67070298",
                                  "name": "Hakka Noodles",
                                  "category": "Chinese",
                                  "imageId": "kak1hcrrlky3hmqv7qxr",
                                  "isVeg": 1,
                                  "price": 22000,
                                  "variants": {
                                    
                                  },
                                  "variantsV2": {
                                    
                                  },
                                  "addons": [
                                    {
                                      "groupId": "126824011",
                                      "groupName": "Choice Of Preperation",
                                      "choices": [
                                        {
                                          "id": "66005615",
                                          "name": "Jain",
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        },
                                        {
                                          "id": "66005614",
                                          "name": "Regular",
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        }
                                      ],
                                      "maxAddons": 1,
                                      "maxFreeAddons": -1,
                                      "minAddons": 1
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
                                      "rating": "5.0",
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
                                  "id": "67070299",
                                  "name": "Mushroom Munchurian",
                                  "category": "Chinese",
                                  "isVeg": 1,
                                  "price": 24500,
                                  "variants": {
                                    
                                  },
                                  "variantsV2": {
                                    
                                  },
                                  "addons": [
                                    {
                                      "groupId": "126824389",
                                      "groupName": "Choice Of Preperation",
                                      "choices": [
                                        {
                                          "id": "66005615",
                                          "name": "Jain",
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        },
                                        {
                                          "id": "66005614",
                                          "name": "Regular",
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        }
                                      ],
                                      "maxAddons": 1,
                                      "maxFreeAddons": -1,
                                      "minAddons": 1
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
                                  "id": "67070300",
                                  "name": "Paneer Chilly Dry",
                                  "category": "Chinese",
                                  "imageId": "qnnk6eiop0t0dm2umtk1",
                                  "isVeg": 1,
                                  "price": 25000,
                                  "variants": {
                                    
                                  },
                                  "variantsV2": {
                                    
                                  },
                                  "addons": [
                                    {
                                      "groupId": "81548218",
                                      "groupName": "Choice Of Preperation",
                                      "choices": [
                                        {
                                          "id": "66005615",
                                          "name": "Jain",
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        },
                                        {
                                          "id": "66005614",
                                          "name": "Regular",
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        }
                                      ],
                                      "maxAddons": 1,
                                      "maxFreeAddons": -1,
                                      "minAddons": 1
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
                                  "id": "67070301",
                                  "name": "Paneer Chilly Gravy",
                                  "category": "Chinese",
                                  "isVeg": 1,
                                  "price": 24000,
                                  "variants": {
                                    
                                  },
                                  "variantsV2": {
                                    
                                  },
                                  "addons": [
                                    {
                                      "groupId": "81548251",
                                      "groupName": "Choice Of Preperation",
                                      "choices": [
                                        {
                                          "id": "66005615",
                                          "name": "Jain",
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        },
                                        {
                                          "id": "66005614",
                                          "name": "Regular",
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        }
                                      ],
                                      "maxAddons": 1,
                                      "maxFreeAddons": -1,
                                      "minAddons": 1
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
                                  "id": "67070302",
                                  "name": "Schezwan Fried Noodle",
                                  "category": "Chinese",
                                  "isVeg": 1,
                                  "price": 22000,
                                  "variants": {
                                    
                                  },
                                  "variantsV2": {
                                    
                                  },
                                  "addons": [
                                    {
                                      "groupId": "126823353",
                                      "groupName": "Choice Of Preperation",
                                      "choices": [
                                        {
                                          "id": "66005615",
                                          "name": "Jain",
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        },
                                        {
                                          "id": "66005614",
                                          "name": "Regular",
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        }
                                      ],
                                      "maxAddons": 1,
                                      "maxFreeAddons": -1,
                                      "minAddons": 1
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
                                  "id": "67070303",
                                  "name": "Signapuri Fried Rice",
                                  "category": "Chinese",
                                  "isVeg": 1,
                                  "price": 21000,
                                  "variants": {
                                    
                                  },
                                  "variantsV2": {
                                    
                                  },
                                  "addons": [
                                    {
                                      "groupId": "126824245",
                                      "groupName": "Choice Of Preperation",
                                      "choices": [
                                        {
                                          "id": "66005615",
                                          "name": "Jain",
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        },
                                        {
                                          "id": "66005614",
                                          "name": "Regular",
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        }
                                      ],
                                      "maxAddons": 1,
                                      "maxFreeAddons": -1,
                                      "minAddons": 1
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
                                  "id": "67070304",
                                  "name": "Veg Manchurian Dry",
                                  "category": "Chinese",
                                  "imageId": "i4w1sknhrvweq7jvhppe",
                                  "isVeg": 1,
                                  "price": 22000,
                                  "variants": {
                                    
                                  },
                                  "variantsV2": {
                                    
                                  },
                                  "addons": [
                                    {
                                      "groupId": "81548312",
                                      "groupName": "Choice Of Preperation",
                                      "choices": [
                                        {
                                          "id": "66005615",
                                          "name": "Jain",
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        },
                                        {
                                          "id": "66005614",
                                          "name": "Regular",
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        }
                                      ],
                                      "maxAddons": 1,
                                      "maxFreeAddons": -1,
                                      "minAddons": 1
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
                                      "ratingCount": "70 ratings",
                                      "ratingCountV2": "70"
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
                                  "id": "73374320",
                                  "name": "Manchurian Fried Rice",
                                  "category": "Chinese",
                                  "imageId": "FOOD_CATALOG/IMAGES/CMS/2024/5/31/d200c8cf-3d06-4ecb-b139-857b7f9cb3aa_a24eefae-e91f-4e9e-bdfc-c9e938e3603a.jpg",
                                  "isVeg": 1,
                                  "price": 22000,
                                  "variants": {
                                    
                                  },
                                  "variantsV2": {
                                    
                                  },
                                  "addons": [
                                    {
                                      "groupId": "81548212",
                                      "groupName": "Choice Of Preperation",
                                      "choices": [
                                        {
                                          "id": "66005615",
                                          "name": "Jain",
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        },
                                        {
                                          "id": "66005614",
                                          "name": "Regular",
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        }
                                      ],
                                      "maxAddons": 1,
                                      "maxFreeAddons": -1,
                                      "minAddons": 1
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
                      "title": "Veg Chinese Starter",
                      "itemCards": [
                        {
                          "card": {
                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            "info": {
                              "id": "17264588",
                              "name": "Chinese Bhel",
                              "category": "Veg Chinese Starter",
                              "imageId": "FOOD_CATALOG/IMAGES/CMS/2024/3/22/f9d58963-2974-406d-8fc6-31b84e0a0198_482c99c1-0060-4bbf-90d1-5078a6490282.jpg",
                              "isVeg": 1,
                              "price": 18000,
                              "variants": {
                                
                              },
                              "variantsV2": {
                                
                              },
                              "addons": [
                                {
                                  "groupId": "81548255",
                                  "groupName": "Choice Of Preperation",
                                  "choices": [
                                    {
                                      "id": "66005615",
                                      "name": "Jain",
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "66005614",
                                      "name": "Regular",
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    }
                                  ],
                                  "maxAddons": 1,
                                  "maxFreeAddons": -1,
                                  "minAddons": 1
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
                                  "ratingCount": "56 ratings",
                                  "ratingCountV2": "56"
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
                              "id": "94312767",
                              "name": "Baby Corn Chilly",
                              "category": "Veg Chinese Starter",
                              "isVeg": 1,
                              "price": 21000,
                              "variants": {
                                
                              },
                              "variantsV2": {
                                
                              },
                              "addons": [
                                {
                                  "groupId": "81548213",
                                  "groupName": "Choice Of Preperation",
                                  "choices": [
                                    {
                                      "id": "66005615",
                                      "name": "Jain",
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "66005614",
                                      "name": "Regular",
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    }
                                  ],
                                  "maxAddons": 1,
                                  "maxFreeAddons": -1,
                                  "minAddons": 1
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
                              "id": "94312768",
                              "name": "Veg 65",
                              "category": "Veg Chinese Starter",
                              "imageId": "FOOD_CATALOG/IMAGES/CMS/2024/5/28/62207763-cfba-455a-a13e-e044340243bf_be01a2a1-8b02-46ac-bcc1-7ffca0715718.jpeg",
                              "isVeg": 1,
                              "price": 19500,
                              "variants": {
                                
                              },
                              "variantsV2": {
                                
                              },
                              "addons": [
                                {
                                  "groupId": "81548214",
                                  "groupName": "Choice Of Preperation",
                                  "choices": [
                                    {
                                      "id": "66005615",
                                      "name": "Jain",
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "66005614",
                                      "name": "Regular",
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    }
                                  ],
                                  "maxAddons": 1,
                                  "maxFreeAddons": -1,
                                  "minAddons": 1
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
                      "title": "Rice Ki Bahar",
                      "itemCards": [
                        {
                          "card": {
                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            "info": {
                              "id": "17264497",
                              "name": "Jeera Rice",
                              "category": "Rice Ki Bahar",
                              "imageId": "FOOD_CATALOG/IMAGES/CMS/2024/3/7/e5b0fe68-eac0-466e-9be2-7f65fbe505f6_e9a60691-0b8c-4c8d-87cd-7b49ecd54ebf",
                              "isVeg": 1,
                              "price": 15000,
                              "variants": {
                                
                              },
                              "variantsV2": {
                                
                              },
                              "addons": [
                                {
                                  "groupId": "81548221",
                                  "groupName": "Choice Of Preperation",
                                  "choices": [
                                    {
                                      "id": "66005615",
                                      "name": "Jain",
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "66005614",
                                      "name": "Regular",
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    }
                                  ],
                                  "maxAddons": 1,
                                  "maxFreeAddons": -1,
                                  "minAddons": 1
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
                                  "ratingCount": "256 ratings",
                                  "ratingCountV2": "256"
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
                              "id": "17264498",
                              "name": "Plain Rice",
                              "category": "Rice Ki Bahar",
                              "imageId": "FOOD_CATALOG/IMAGES/CMS/2024/5/23/a02a214d-95d5-443c-b5a0-4587391a33ca_8a5ad3d8-8f4b-44fa-9bcc-a9ae7820737e.jpg",
                              "isVeg": 1,
                              "price": 8000,
                              "variants": {
                                
                              },
                              "variantsV2": {
                                
                              },
                              "addons": [
                                {
                                  "groupId": "81548219",
                                  "groupName": "Choice Of Preperation",
                                  "choices": [
                                    {
                                      "id": "66005615",
                                      "name": "Jain",
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "66005614",
                                      "name": "Regular",
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    }
                                  ],
                                  "maxAddons": 1,
                                  "maxFreeAddons": -1,
                                  "minAddons": 1
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
                                  "ratingCount": "39 ratings",
                                  "ratingCountV2": "39"
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
                              "id": "17264499",
                              "name": "Steamed Rice",
                              "category": "Rice Ki Bahar",
                              "imageId": "FOOD_CATALOG/IMAGES/CMS/2024/5/23/a02a214d-95d5-443c-b5a0-4587391a33ca_8a5ad3d8-8f4b-44fa-9bcc-a9ae7820737e.jpg",
                              "isVeg": 1,
                              "price": 10500,
                              "variants": {
                                
                              },
                              "variantsV2": {
                                
                              },
                              "addons": [
                                {
                                  "groupId": "81548217",
                                  "groupName": "Choice Of Preperation",
                                  "choices": [
                                    {
                                      "id": "66005615",
                                      "name": "Jain",
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "66005614",
                                      "name": "Regular",
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    }
                                  ],
                                  "maxAddons": 1,
                                  "maxFreeAddons": -1,
                                  "minAddons": 1
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
                                  "rating": "2.8",
                                  "ratingCount": "43 ratings",
                                  "ratingCountV2": "43"
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
                              "id": "67070227",
                              "name": "Kaju Pulav",
                              "category": "Rice Ki Bahar",
                              "isVeg": 1,
                              "price": 17500,
                              "variants": {
                                
                              },
                              "variantsV2": {
                                
                              },
                              "addons": [
                                {
                                  "groupId": "81548252",
                                  "groupName": "Choice Of Preperation",
                                  "choices": [
                                    {
                                      "id": "66005615",
                                      "name": "Jain",
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "66005614",
                                      "name": "Regular",
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    }
                                  ],
                                  "maxAddons": 1,
                                  "maxFreeAddons": -1,
                                  "minAddons": 1
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
                              "id": "67070232",
                              "name": "Peas Pulav",
                              "category": "Rice Ki Bahar",
                              "isVeg": 1,
                              "price": 17500,
                              "variants": {
                                
                              },
                              "variantsV2": {
                                
                              },
                              "addons": [
                                {
                                  "groupId": "81548225",
                                  "groupName": "Choice Of Preperation",
                                  "choices": [
                                    {
                                      "id": "66005615",
                                      "name": "Jain",
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "66005614",
                                      "name": "Regular",
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    }
                                  ],
                                  "maxAddons": 1,
                                  "maxFreeAddons": -1,
                                  "minAddons": 1
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
                                  "rating": "3.0",
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
                              "id": "67070244",
                              "name": "Veg Haydrabadi Biryani",
                              "category": "Rice Ki Bahar",
                              "isVeg": 1,
                              "price": 17500,
                              "variants": {
                                
                              },
                              "variantsV2": {
                                
                              },
                              "addons": [
                                {
                                  "groupId": "126824729",
                                  "groupName": "Choice Of Preperation",
                                  "choices": [
                                    {
                                      "id": "66005615",
                                      "name": "Jain",
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "66005614",
                                      "name": "Regular",
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    }
                                  ],
                                  "maxAddons": 1,
                                  "maxFreeAddons": -1,
                                  "minAddons": 1
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
                              "id": "67070247",
                              "name": "Veg Pulav",
                              "category": "Rice Ki Bahar",
                              "imageId": "FOOD_CATALOG/IMAGES/CMS/2024/5/31/8db7332d-9173-4de9-8400-b522cef0884c_4b7d516e-2963-43fd-b944-3b37cfddbb55.jpg",
                              "isVeg": 1,
                              "price": 17500,
                              "variants": {
                                
                              },
                              "variantsV2": {
                                
                              },
                              "addons": [
                                {
                                  "groupId": "81548227",
                                  "groupName": "Choice Of Preperation",
                                  "choices": [
                                    {
                                      "id": "66005615",
                                      "name": "Jain",
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "66005614",
                                      "name": "Regular",
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    }
                                  ],
                                  "maxAddons": 1,
                                  "maxFreeAddons": -1,
                                  "minAddons": 1
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
                              "id": "94312757",
                              "name": "Kashmiri Pulav (sweet)",
                              "category": "Rice Ki Bahar",
                              "isVeg": 1,
                              "price": 17500,
                              "variants": {
                                
                              },
                              "variantsV2": {
                                
                              },
                              "addons": [
                                {
                                  "groupId": "81548223",
                                  "groupName": "Choice Of Preperation",
                                  "choices": [
                                    {
                                      "id": "66005615",
                                      "name": "Jain",
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "66005614",
                                      "name": "Regular",
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    }
                                  ],
                                  "maxAddons": 1,
                                  "maxFreeAddons": -1,
                                  "minAddons": 1
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
                      "title": "Indian Breads",
                      "itemCards": [
                        {
                          "card": {
                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            "info": {
                              "id": "17264500",
                              "name": "Roti",
                              "category": "Indian Breads",
                              "imageId": "FOOD_CATALOG/IMAGES/CMS/2024/3/7/29f618ea-a831-4ea9-b09d-e200fda9b65d_b5b5054a-645c-4232-b44d-4cb04cef1b35",
                              "isVeg": 1,
                              "price": 2300,
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
                                  "ratingCount": "507 ratings",
                                  "ratingCountV2": "507"
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
                              "id": "17264501",
                              "name": "Butter Roti",
                              "category": "Indian Breads",
                              "imageId": "FOOD_CATALOG/IMAGES/CMS/2024/3/7/29f618ea-a831-4ea9-b09d-e200fda9b65d_b5b5054a-645c-4232-b44d-4cb04cef1b35",
                              "isVeg": 1,
                              "price": 3000,
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
                                  "ratingCount": "876 ratings",
                                  "ratingCountV2": "876"
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
                              "id": "17264560",
                              "name": "Naan",
                              "category": "Indian Breads",
                              "imageId": "FOOD_CATALOG/IMAGES/CMS/2024/7/12/e1c2bb8e-d309-498c-b61f-052e79ae9158_eecc3694-ccf7-4004-930d-fa7d4552a2e7.jpg",
                              "isVeg": 1,
                              "price": 4500,
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
                                  "ratingCount": "143 ratings",
                                  "ratingCountV2": "143"
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
                              "id": "17264561",
                              "name": "Buttern Naan",
                              "category": "Indian Breads",
                              "imageId": "a0463aebf82ca7cfc4a3be5ab6c68c57",
                              "isVeg": 1,
                              "price": 5500,
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
                                  "ratingCount": "439 ratings",
                                  "ratingCountV2": "439"
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
                              "id": "17264563",
                              "name": "Cheese Naan",
                              "category": "Indian Breads",
                              "imageId": "FOOD_CATALOG/IMAGES/CMS/2024/3/30/84ebb439-52cd-448a-ac26-4751c18f68a3_ddb2c1ce-53df-427e-84c7-2db861cfb0e7.jpg",
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
                                  "rating": "4.1",
                                  "ratingCount": "30 ratings",
                                  "ratingCountV2": "30"
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
                              "id": "17264564",
                              "name": "Garlic Naan",
                              "category": "Indian Breads",
                              "imageId": "FOOD_CATALOG/IMAGES/CMS/2024/5/28/c4a858c6-71f5-4ae1-94d7-576e7f61fc24_d52e284c-9e2d-46b4-8897-22a313eb80c9.jpg",
                              "isVeg": 1,
                              "price": 11000,
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
                                  "rating": "3.4",
                                  "ratingCount": "40 ratings",
                                  "ratingCountV2": "40"
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
                              "id": "17264565",
                              "name": "Kulcha",
                              "category": "Indian Breads",
                              "imageId": "940ed2cd07de89802c58a7f1ed622d67",
                              "isVeg": 1,
                              "price": 4500,
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
                                  "rating": "3.2",
                                  "ratingCount": "41 ratings",
                                  "ratingCountV2": "41"
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
                              "id": "17264566",
                              "name": "Butter Kulcha",
                              "category": "Indian Breads",
                              "imageId": "FOOD_CATALOG/IMAGES/CMS/2024/6/13/9e52956b-1eb4-405e-b3ff-6a08b8307c7b_9abe1bf1-be9b-48f5-82f4-3c70a2c0f130.jpg",
                              "isVeg": 1,
                              "price": 5000,
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
                                  "rating": "4.9",
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
                              "id": "17264568",
                              "name": "Onion Kulcha",
                              "category": "Indian Breads",
                              "imageId": "FOOD_CATALOG/IMAGES/CMS/2024/7/12/83a18f52-d18e-473b-b654-cb07b3ae39c6_a84d8c6a-9e5d-4ed8-8aed-6c997f35a039.jpg",
                              "isVeg": 1,
                              "price": 11000,
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
                              "id": "17264570",
                              "name": "Cheese Garlic Naan",
                              "category": "Indian Breads",
                              "imageId": "FOOD_CATALOG/IMAGES/CMS/2024/5/28/c4a858c6-71f5-4ae1-94d7-576e7f61fc24_d52e284c-9e2d-46b4-8897-22a313eb80c9.jpg",
                              "isVeg": 1,
                              "price": 12500,
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
                              "id": "67070275",
                              "name": "Cheese Chilly Garlic Naan",
                              "category": "Indian Breads",
                              "imageId": "jednfua6xkvlarhdm1oi",
                              "isVeg": 1,
                              "price": 14000,
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
                              "id": "67070276",
                              "name": "Cheese Chilly Naan",
                              "category": "Indian Breads",
                              "imageId": "FOOD_CATALOG/IMAGES/CMS/2024/5/28/c4a858c6-71f5-4ae1-94d7-576e7f61fc24_d52e284c-9e2d-46b4-8897-22a313eb80c9.jpg",
                              "isVeg": 1,
                              "price": 12000,
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
                              "id": "67070280",
                              "name": "Chilly Naan",
                              "category": "Indian Breads",
                              "imageId": "FOOD_CATALOG/IMAGES/CMS/2024/7/12/4dbe76d2-681b-439a-a9c9-9bce3db5d69b_32a3fcf2-7971-4c96-8793-6a9b7e7bf16d.jpg",
                              "isVeg": 1,
                              "price": 10000,
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
                              "id": "67070288",
                              "name": "Stuff Kulcha",
                              "category": "Indian Breads",
                              "isVeg": 1,
                              "price": 11000,
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
                                  "rating": "3.6",
                                  "ratingCount": "12 ratings",
                                  "ratingCountV2": "12"
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
                              "id": "67070289",
                              "name": "Stuff Naan",
                              "category": "Indian Breads",
                              "isVeg": 1,
                              "price": 11000,
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
                                  "rating": "4.8",
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
                              "id": "94312759",
                              "name": "Butter Paratha",
                              "category": "Indian Breads",
                              "imageId": "FOOD_CATALOG/IMAGES/CMS/2024/6/13/61d44588-f58a-48c9-8dbd-a2f8e7a1c737_6a8d99fc-9410-44f0-8e02-af82f0686b87.jpg",
                              "isVeg": 1,
                              "price": 5000,
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
                              "id": "94312760",
                              "name": "Paratha",
                              "category": "Indian Breads",
                              "imageId": "FOOD_CATALOG/IMAGES/CMS/2024/6/13/61d44588-f58a-48c9-8dbd-a2f8e7a1c737_6a8d99fc-9410-44f0-8e02-af82f0686b87.jpg",
                              "isVeg": 1,
                              "price": 4500,
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
                                  "rating": "5.0",
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
                              "id": "94312761",
                              "name": "Stuff Paratha",
                              "category": "Indian Breads",
                              "imageId": "leaavvqpwbz7inxaavxl",
                              "isVeg": 1,
                              "price": 11000,
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
                                  "rating": "4.9",
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
                  }
                },
                {
                  "card": {
                    "card": {
                      "@type": "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                      "title": "Sandwich",
                      "itemCards": [
                        {
                          "card": {
                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            "info": {
                              "id": "17264438",
                              "name": "Bread Butter Sandwich",
                              "category": "Sandwich",
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
                                  "rating": "4.0",
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
                              "id": "17264440",
                              "name": "Veg Sandwich",
                              "category": "Sandwich",
                              "isVeg": 1,
                              "price": 5500,
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
                              "id": "17264442",
                              "name": "Masala Sandwich",
                              "category": "Sandwich",
                              "isVeg": 1,
                              "price": 8000,
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
                                  "rating": "3.5",
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
                              "id": "17264444",
                              "name": "Cheese Sandwich",
                              "category": "Sandwich",
                              "isVeg": 1,
                              "price": 7000,
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
                              "id": "17264446",
                              "name": "Veg Cheese Sandwich",
                              "category": "Sandwich",
                              "isVeg": 1,
                              "price": 8000,
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
                              "id": "17264448",
                              "name": "Jam Sandwich",
                              "category": "Sandwich",
                              "isVeg": 1,
                              "price": 7000,
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
                  }
                },
                {
                  "card": {
                    "card": {
                      "@type": "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                      "title": "Accompaniments",
                      "itemCards": [
                        {
                          "card": {
                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            "info": {
                              "id": "17264573",
                              "name": "Green Salad",
                              "category": "Accompaniments",
                              "isVeg": 1,
                              "price": 8000,
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
                              "id": "17264574",
                              "name": "Tomato Salad",
                              "category": "Accompaniments",
                              "imageId": "ac1aaf48643fc8887bc3435459c303f8",
                              "isVeg": 1,
                              "price": 7000,
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
                              "id": "17264575",
                              "name": "Pineapple Raita",
                              "category": "Accompaniments",
                              "imageId": "FOOD_CATALOG/IMAGES/CMS/2024/3/11/53a9c6bf-bc14-476d-a7ed-9ae10d0c2e68_546d2992-1ad3-40af-a444-6138fb90e99b.jpeg",
                              "isVeg": 1,
                              "price": 9000,
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
                                  "rating": "3.5",
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
                              "id": "17264577",
                              "name": "Veg Raita",
                              "category": "Accompaniments",
                              "imageId": "clrhlvehbr9wqrtrtmy7",
                              "isVeg": 1,
                              "price": 9000,
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
                                  "rating": "4.9",
                                  "ratingCount": "24 ratings",
                                  "ratingCountV2": "24"
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
                              "id": "17264579",
                              "name": "Curd",
                              "category": "Accompaniments",
                              "imageId": "FOOD_CATALOG/IMAGES/CMS/2024/7/12/a006e59e-70a2-4fae-88ae-184404b2e4eb_bb9f29b5-e431-4e30-b7d2-b4ab396642a9.jpg",
                              "isVeg": 1,
                              "price": 5000,
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
                                  "rating": "5.0",
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
                              "id": "17264580",
                              "name": "Papad Roasted",
                              "category": "Accompaniments",
                              "imageId": "FOOD_CATALOG/IMAGES/CMS/2024/7/12/50a8400a-8f26-40e7-b8cf-839ab2edea30_3c50b821-f028-4a13-b515-da07f9beb724.jpg",
                              "isVeg": 1,
                              "price": 1500,
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
                                  "ratingCount": "74 ratings",
                                  "ratingCountV2": "74"
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
                              "id": "17264582",
                              "name": "Masala Papad",
                              "category": "Accompaniments",
                              "imageId": "vlihmm8vlp4sljxgbrbh",
                              "isVeg": 1,
                              "price": 3000,
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
                                  "rating": "5.0",
                                  "ratingCount": "32 ratings",
                                  "ratingCountV2": "32"
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
                              "id": "67070291",
                              "name": "Bundi Raita",
                              "category": "Accompaniments",
                              "imageId": "FOOD_CATALOG/IMAGES/CMS/2024/7/12/16f7c7fa-1e14-4a11-8147-b695ceaa3a3e_9bcffa73-6018-4e7c-95a4-415baebb7e37.jpg",
                              "isVeg": 1,
                              "price": 9000,
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
                              "id": "67070293",
                              "name": "Dahi Bundi (sweet )",
                              "category": "Accompaniments",
                              "isVeg": 1,
                              "price": 9000,
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
                              "id": "67070294",
                              "name": "Fry Papad",
                              "category": "Accompaniments",
                              "imageId": "FOOD_CATALOG/IMAGES/CMS/2024/3/15/12099e93-e2b4-4fe1-a86e-86f6bb0acad7_34d70d8e-5768-4304-bbb4-45ad4f5dfbf8.jpg",
                              "isVeg": 1,
                              "price": 1500,
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
                                  "rating": "2.4",
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
                      "title": "Desserts And Beverages",
                      "categories": [
                        {
                          "title": "Appetizer",
                          "itemCards": [
                            {
                              "card": {
                                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                "info": {
                                  "id": "17264552",
                                  "name": "Special Lassi",
                                  "category": "Desserts And Beverages",
                                  "imageId": "FOOD_CATALOG/IMAGES/CMS/2024/3/10/738ddb05-945a-4dea-b3b8-d786aee4c50b_35f5a576-1dbc-434d-ae39-4febfddeb49c_compressed",
                                  "isVeg": 1,
                                  "price": 11000,
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
                                      "rating": "4.8",
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
                                  "id": "94312765",
                                  "name": "Lassi (sweet)",
                                  "category": "Desserts And Beverages",
                                  "imageId": "FOOD_CATALOG/IMAGES/CMS/2024/3/10/738ddb05-945a-4dea-b3b8-d786aee4c50b_35f5a576-1dbc-434d-ae39-4febfddeb49c_compressed",
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
                          "title": "Milkshakes",
                          "itemCards": [
                            {
                              "card": {
                                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                "info": {
                                  "id": "17264533",
                                  "name": "Chocolate Milkshake",
                                  "category": "Desserts And Beverages",
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
                                      "rating": "5.0",
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
                                  "id": "17264535",
                                  "name": "Cold Coffee",
                                  "category": "Desserts And Beverages",
                                  "isVeg": 1,
                                  "price": 10500,
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
                                      "rating": "5.0",
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
                                  "id": "67070235",
                                  "name": "Ice Cream Shake",
                                  "category": "Desserts And Beverages",
                                  "isVeg": 1,
                                  "price": 12500,
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
                                  "id": "67070240",
                                  "name": "Kaju Chocolate",
                                  "category": "Desserts And Beverages",
                                  "isVeg": 1,
                                  "price": 12500,
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
                                  "id": "67070245",
                                  "name": "Kaju Gulkand",
                                  "category": "Desserts And Beverages",
                                  "isVeg": 1,
                                  "price": 12500,
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
                                  "id": "67070249",
                                  "name": "Kaju Shake",
                                  "category": "Desserts And Beverages",
                                  "isVeg": 1,
                                  "price": 12500,
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
                                  "id": "67070296",
                                  "name": "Cold Coffee With Ice Cream",
                                  "category": "Desserts And Beverages",
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
                                  "id": "94312762",
                                  "name": "Kaju Anjeer",
                                  "category": "Desserts And Beverages",
                                  "isVeg": 1,
                                  "price": 12500,
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
                        },
                        {
                          "title": "Ice Cream",
                          "itemCards": [
                            {
                              "card": {
                                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                "info": {
                                  "id": "127480669",
                                  "name": "Vanilla Cup",
                                  "category": "Desserts And Beverages",
                                  "isVeg": 1,
                                  "price": 2500,
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
                      "@type": "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                      "title": "Refreshment",
                      "itemCards": [
                        {
                          "card": {
                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            "info": {
                              "id": "67070272",
                              "name": "Butter Milk",
                              "category": "Refreshment",
                              "imageId": "FOOD_CATALOG/IMAGES/CMS/2024/6/28/d47577ee-96d5-4876-9119-ecd8f1422d0a_10925b2e-6c43-4c3e-8cb0-bf416e15e2ca.jpg",
                              "isVeg": 1,
                              "price": 3500,
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
                                  "ratingCount": "13 ratings",
                                  "ratingCountV2": "13"
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
                              "id": "94312769",
                              "name": "Mineral Water",
                              "category": "Refreshment",
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
                              "id": "94312770",
                              "name": "Sp Lassi",
                              "category": "Refreshment",
                              "isVeg": 1,
                              "price": 11000,
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
                              "id": "17264502",
                              "name": "Paneer Tikka Dry",
                              "category": "Starters",
                              "imageId": "hpymlcf06ce5g4smnjwh",
                              "isVeg": 1,
                              "price": 28500,
                              "variants": {
                                
                              },
                              "variantsV2": {
                                
                              },
                              "addons": [
                                {
                                  "groupId": "81548248",
                                  "groupName": "Choice Of Preperation",
                                  "choices": [
                                    {
                                      "id": "66005615",
                                      "name": "Jain",
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "66005614",
                                      "name": "Regular",
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    }
                                  ],
                                  "maxAddons": 1,
                                  "maxFreeAddons": -1,
                                  "minAddons": 1
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
                                  "ratingCount": "76 ratings",
                                  "ratingCountV2": "76"
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
                              "id": "17264503",
                              "name": "Paneer Tikka Lehsuni",
                              "category": "Starters",
                              "isVeg": 1,
                              "price": 28500,
                              "variants": {
                                
                              },
                              "variantsV2": {
                                
                              },
                              "addons": [
                                {
                                  "groupId": "126825247",
                                  "groupName": "Choice Of Preperation",
                                  "choices": [
                                    {
                                      "id": "66005615",
                                      "name": "Jain",
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "66005614",
                                      "name": "Regular",
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    }
                                  ],
                                  "maxAddons": 1,
                                  "maxFreeAddons": -1,
                                  "minAddons": 1
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
                              "id": "17264505",
                              "name": "Paneer Tikka Hariyali",
                              "category": "Starters",
                              "isVeg": 1,
                              "price": 28500,
                              "variants": {
                                
                              },
                              "variantsV2": {
                                
                              },
                              "addons": [
                                {
                                  "groupId": "81548245",
                                  "groupName": "Choice Of Preperation",
                                  "choices": [
                                    {
                                      "id": "66005615",
                                      "name": "Jain",
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "66005614",
                                      "name": "Regular",
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    }
                                  ],
                                  "maxAddons": 1,
                                  "maxFreeAddons": -1,
                                  "minAddons": 1
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
                                  "rating": "5.0",
                                  "ratingCount": "7 ratings",
                                  "ratingCountV2": "7"
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
                              "id": "17264506",
                              "name": "Hara Bhara Kebab",
                              "category": "Starters",
                              "imageId": "16abf2badf805f11a2d1e8c887bb504a",
                              "isVeg": 1,
                              "price": 24500,
                              "variants": {
                                
                              },
                              "variantsV2": {
                                
                              },
                              "addons": [
                                {
                                  "groupId": "81548243",
                                  "groupName": "Choice Of Preperation",
                                  "choices": [
                                    {
                                      "id": "66005615",
                                      "name": "Jain",
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "66005614",
                                      "name": "Regular",
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    }
                                  ],
                                  "maxAddons": 1,
                                  "maxFreeAddons": -1,
                                  "minAddons": 1
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
                              "id": "17264585",
                              "name": "Mushroom Manchurian",
                              "category": "Starters",
                              "isVeg": 1,
                              "price": 21000,
                              "variants": {
                                
                              },
                              "variantsV2": {
                                
                              },
                              "addons": [
                                {
                                  "groupId": "81548257",
                                  "groupName": "Choice Of Preperation",
                                  "choices": [
                                    {
                                      "id": "66005615",
                                      "name": "Jain",
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "66005614",
                                      "name": "Regular",
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    }
                                  ],
                                  "maxAddons": 1,
                                  "maxFreeAddons": -1,
                                  "minAddons": 1
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
                              "id": "94312743",
                              "name": "Paneer Tikka Lasuni",
                              "category": "Starters",
                              "isVeg": 1,
                              "price": 25000,
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
                  }
                },
                {
                  "card": {
                    "card": {
                      "@type": "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                      "title": "Soups",
                      "itemCards": [
                        {
                          "card": {
                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            "info": {
                              "id": "17264453",
                              "name": "Mushroom Soup",
                              "category": "Soups",
                              "isVeg": 1,
                              "price": 12500,
                              "variants": {
                                
                              },
                              "variantsV2": {
                                
                              },
                              "addons": [
                                {
                                  "groupId": "81548273",
                                  "groupName": "Choice Of Preperation",
                                  "choices": [
                                    {
                                      "id": "66005615",
                                      "name": "Jain",
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "66005614",
                                      "name": "Regular",
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    }
                                  ],
                                  "maxAddons": 1,
                                  "maxFreeAddons": -1,
                                  "minAddons": 1
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
                              "id": "17264460",
                              "name": "Hot & Sour Soup",
                              "category": "Soups",
                              "imageId": "FOOD_CATALOG/IMAGES/CMS/2024/5/27/9fba2d90-1d04-452e-a3f8-0441030144a0_984f91f0-ec12-4587-8231-41970af543d9.jpg",
                              "isVeg": 1,
                              "price": 12500,
                              "variants": {
                                
                              },
                              "variantsV2": {
                                
                              },
                              "addons": [
                                {
                                  "groupId": "81548267",
                                  "groupName": "Choice Of Preperation",
                                  "choices": [
                                    {
                                      "id": "66005615",
                                      "name": "Jain",
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "66005614",
                                      "name": "Regular",
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    }
                                  ],
                                  "maxAddons": 1,
                                  "maxFreeAddons": -1,
                                  "minAddons": 1
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
                                  "rating": "5.0",
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
                              "id": "17264463",
                              "name": "Manchow Soup",
                              "category": "Soups",
                              "imageId": "FOOD_CATALOG/IMAGES/CMS/2024/3/22/31296d89-da29-44ff-9bfb-a34a131df90c_100d8d6d-fa97-4ccb-b9ed-06855b6ebd45.jpg",
                              "isVeg": 1,
                              "price": 12500,
                              "variants": {
                                
                              },
                              "variantsV2": {
                                
                              },
                              "addons": [
                                {
                                  "groupId": "81548262",
                                  "groupName": "Choice Of Preperation",
                                  "choices": [
                                    {
                                      "id": "66005615",
                                      "name": "Jain",
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "66005614",
                                      "name": "Regular",
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    }
                                  ],
                                  "maxAddons": 1,
                                  "maxFreeAddons": -1,
                                  "minAddons": 1
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
                                  "ratingCount": "123 ratings",
                                  "ratingCountV2": "123"
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
                              "id": "17264466",
                              "name": "Veg Noodles Soup",
                              "category": "Soups",
                              "imageId": "FOOD_CATALOG/IMAGES/CMS/2024/7/12/edccfb45-ddf8-4625-b1f8-ec8f2a5f4e48_6fb94c10-58ec-4ed2-b51a-77022dea91fd.jpeg",
                              "isVeg": 1,
                              "price": 12000,
                              "variants": {
                                
                              },
                              "variantsV2": {
                                
                              },
                              "addons": [
                                {
                                  "groupId": "81548259",
                                  "groupName": "Choice Of Preperation",
                                  "choices": [
                                    {
                                      "id": "66005615",
                                      "name": "Jain",
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "66005614",
                                      "name": "Regular",
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    }
                                  ],
                                  "maxAddons": 1,
                                  "maxFreeAddons": -1,
                                  "minAddons": 1
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
                              "id": "67070231",
                              "name": "Lemone Coriander Soup",
                              "category": "Soups",
                              "imageId": "0b5560bd3387105101f968d7316d3b51",
                              "isVeg": 1,
                              "price": 11000,
                              "variants": {
                                
                              },
                              "variantsV2": {
                                
                              },
                              "addons": [
                                {
                                  "groupId": "81548210",
                                  "groupName": "Choice Of Preperation",
                                  "choices": [
                                    {
                                      "id": "66005615",
                                      "name": "Jain",
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "66005614",
                                      "name": "Regular",
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    }
                                  ],
                                  "maxAddons": 1,
                                  "maxFreeAddons": -1,
                                  "minAddons": 1
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
                              "id": "67070248",
                              "name": "Ministrone Soup",
                              "category": "Soups",
                              "isVeg": 1,
                              "price": 12000,
                              "variants": {
                                
                              },
                              "variantsV2": {
                                
                              },
                              "addons": [
                                {
                                  "groupId": "81548266",
                                  "groupName": "Choice Of Preperation",
                                  "choices": [
                                    {
                                      "id": "66005615",
                                      "name": "Jain",
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "66005614",
                                      "name": "Regular",
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    }
                                  ],
                                  "maxAddons": 1,
                                  "maxFreeAddons": -1,
                                  "minAddons": 1
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
                              "id": "94312739",
                              "name": "Cream Of Tomato Soup",
                              "category": "Soups",
                              "imageId": "FOOD_CATALOG/IMAGES/CMS/2024/7/12/6d50e4d6-0e9f-4a12-baaa-9b240113fee3_9ac63426-4f14-4054-9cc1-029d86ff2b79.jpg",
                              "isVeg": 1,
                              "price": 11000,
                              "variants": {
                                
                              },
                              "variantsV2": {
                                
                              },
                              "addons": [
                                {
                                  "groupId": "81548277",
                                  "groupName": "Choice Of Preperation",
                                  "choices": [
                                    {
                                      "id": "66005615",
                                      "name": "Jain",
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "66005614",
                                      "name": "Regular",
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    }
                                  ],
                                  "maxAddons": 1,
                                  "maxFreeAddons": -1,
                                  "minAddons": 1
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
                              "id": "94312740",
                              "name": "Sweet Corn Soup",
                              "category": "Soups",
                              "imageId": "x3srf9uwa2qvogp6rbj7",
                              "isVeg": 1,
                              "price": 12500,
                              "variants": {
                                
                              },
                              "variantsV2": {
                                
                              },
                              "addons": [
                                {
                                  "groupId": "81548272",
                                  "groupName": "Choice Of Preperation",
                                  "choices": [
                                    {
                                      "id": "66005615",
                                      "name": "Jain",
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "66005614",
                                      "name": "Regular",
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    }
                                  ],
                                  "maxAddons": 1,
                                  "maxFreeAddons": -1,
                                  "minAddons": 1
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
                              "id": "94312742",
                              "name": "Sweet Corn Veg Soup",
                              "category": "Soups",
                              "imageId": "x3srf9uwa2qvogp6rbj7",
                              "isVeg": 1,
                              "price": 12500,
                              "variants": {
                                
                              },
                              "variantsV2": {
                                
                              },
                              "addons": [
                                {
                                  "groupId": "81548270",
                                  "groupName": "Choice Of Preperation",
                                  "choices": [
                                    {
                                      "id": "66005615",
                                      "name": "Jain",
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "66005614",
                                      "name": "Regular",
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    }
                                  ],
                                  "maxAddons": 1,
                                  "maxFreeAddons": -1,
                                  "minAddons": 1
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
                      "title": "Biryani",
                      "itemCards": [
                        {
                          "card": {
                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            "info": {
                              "id": "17264491",
                              "name": "Veg Biryani",
                              "category": "Biryani",
                              "isVeg": 1,
                              "price": 17000,
                              "variants": {
                                
                              },
                              "variantsV2": {
                                
                              },
                              "addons": [
                                {
                                  "groupId": "83299614",
                                  "groupName": "Choice Of Preperation",
                                  "choices": [
                                    {
                                      "id": "66005615",
                                      "name": "Jain",
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "66005614",
                                      "name": "Regular",
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    }
                                  ],
                                  "maxAddons": 1,
                                  "maxFreeAddons": -1,
                                  "minAddons": 1
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
                                  "ratingCount": "198 ratings",
                                  "ratingCountV2": "198"
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
                              "id": "17264492",
                              "name": "Veg Hyderabadi Biryani",
                              "category": "Biryani",
                              "isVeg": 1,
                              "price": 17000,
                              "variants": {
                                
                              },
                              "variantsV2": {
                                
                              },
                              "addons": [
                                {
                                  "groupId": "81548220",
                                  "groupName": "Choice Of Preperation",
                                  "choices": [
                                    {
                                      "id": "66005615",
                                      "name": "Jain",
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "66005614",
                                      "name": "Regular",
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    }
                                  ],
                                  "maxAddons": 1,
                                  "maxFreeAddons": -1,
                                  "minAddons": 1
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
                                  "ratingCount": "324 ratings",
                                  "ratingCountV2": "324"
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
                      "title": "Fried Rice Noodles And Chopsuey",
                      "categories": [
                        {
                          "title": "Fried Rice",
                          "itemCards": [
                            {
                              "card": {
                                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                "info": {
                                  "id": "17264591",
                                  "name": "Chinese Fried Rice",
                                  "category": "Fried Rice Noodles And Chopsuey",
                                  "isVeg": 1,
                                  "price": 18500,
                                  "variants": {
                                    
                                  },
                                  "variantsV2": {
                                    
                                  },
                                  "addons": [
                                    {
                                      "groupId": "81548254",
                                      "groupName": "Choice Of Preperation",
                                      "choices": [
                                        {
                                          "id": "66005615",
                                          "name": "Jain",
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        },
                                        {
                                          "id": "66005614",
                                          "name": "Regular",
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        }
                                      ],
                                      "maxAddons": 1,
                                      "maxFreeAddons": -1,
                                      "minAddons": 1
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
                                      "rating": "5.0",
                                      "ratingCount": "86 ratings",
                                      "ratingCountV2": "86"
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
                                  "id": "17264592",
                                  "name": "Schezwan Fried Rice",
                                  "category": "Fried Rice Noodles And Chopsuey",
                                  "imageId": "FOOD_CATALOG/IMAGES/CMS/2024/7/12/b86b91e8-36b9-4fca-bbdb-a38337441696_69825801-bafb-4f65-a5a1-b8be874da13d.jpg",
                                  "isVeg": 1,
                                  "price": 18500,
                                  "variants": {
                                    
                                  },
                                  "variantsV2": {
                                    
                                  },
                                  "addons": [
                                    {
                                      "groupId": "81548253",
                                      "groupName": "Choice Of Preperation",
                                      "choices": [
                                        {
                                          "id": "66005615",
                                          "name": "Jain",
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        },
                                        {
                                          "id": "66005614",
                                          "name": "Regular",
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        }
                                      ],
                                      "maxAddons": 1,
                                      "maxFreeAddons": -1,
                                      "minAddons": 1
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
                                      "rating": "5.0",
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
                                  "id": "17264593",
                                  "name": "Mushroom Fried Rice",
                                  "category": "Fried Rice Noodles And Chopsuey",
                                  "imageId": "FOOD_CATALOG/IMAGES/CMS/2024/7/12/52d4c101-469d-43e7-8402-91585354f491_660bceb1-681c-4e62-ae0c-6de3a9460ba9.jpg",
                                  "isVeg": 1,
                                  "price": 18500,
                                  "variants": {
                                    
                                  },
                                  "variantsV2": {
                                    
                                  },
                                  "addons": [
                                    {
                                      "groupId": "81548282",
                                      "groupName": "Choice Of Preperation",
                                      "choices": [
                                        {
                                          "id": "66005615",
                                          "name": "Jain",
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        },
                                        {
                                          "id": "66005614",
                                          "name": "Regular",
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        }
                                      ],
                                      "maxAddons": 1,
                                      "maxFreeAddons": -1,
                                      "minAddons": 1
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
                                  "id": "17264594",
                                  "name": "Singapuri Fried Rice",
                                  "category": "Fried Rice Noodles And Chopsuey",
                                  "imageId": "48b3f67342cafd0c5c9969482eee350a",
                                  "isVeg": 1,
                                  "price": 18500,
                                  "variants": {
                                    
                                  },
                                  "variantsV2": {
                                    
                                  },
                                  "addons": [
                                    {
                                      "groupId": "81548281",
                                      "groupName": "Choice Of Preperation",
                                      "choices": [
                                        {
                                          "id": "66005615",
                                          "name": "Jain",
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        },
                                        {
                                          "id": "66005614",
                                          "name": "Regular",
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        }
                                      ],
                                      "maxAddons": 1,
                                      "maxFreeAddons": -1,
                                      "minAddons": 1
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
                                  "id": "17264595",
                                  "name": "Veg Fried Rice",
                                  "category": "Fried Rice Noodles And Chopsuey",
                                  "imageId": "b34b528c136b3c30ce0b3985fd35f9fe",
                                  "isVeg": 1,
                                  "price": 17000,
                                  "variants": {
                                    
                                  },
                                  "variantsV2": {
                                    
                                  },
                                  "addons": [
                                    {
                                      "groupId": "81548280",
                                      "groupName": "Choice Of Preperation",
                                      "choices": [
                                        {
                                          "id": "66005615",
                                          "name": "Jain",
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        },
                                        {
                                          "id": "66005614",
                                          "name": "Regular",
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        }
                                      ],
                                      "maxAddons": 1,
                                      "maxFreeAddons": -1,
                                      "minAddons": 1
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
                                      "ratingCount": "38 ratings",
                                      "ratingCountV2": "38"
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
                          "title": "Noodles And Chopsuey",
                          "itemCards": [
                            {
                              "card": {
                                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                "info": {
                                  "id": "17264596",
                                  "name": "Veg Hakka Noodles",
                                  "category": "Fried Rice Noodles And Chopsuey",
                                  "imageId": "kak1hcrrlky3hmqv7qxr",
                                  "isVeg": 1,
                                  "price": 18500,
                                  "variants": {
                                    
                                  },
                                  "variantsV2": {
                                    
                                  },
                                  "addons": [
                                    {
                                      "groupId": "81548264",
                                      "groupName": "Choice Of Preperation",
                                      "choices": [
                                        {
                                          "id": "66005615",
                                          "name": "Jain",
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        },
                                        {
                                          "id": "66005614",
                                          "name": "Regular",
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        }
                                      ],
                                      "maxAddons": 1,
                                      "maxFreeAddons": -1,
                                      "minAddons": 1
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
                                      "ratingCount": "76 ratings",
                                      "ratingCountV2": "76"
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
                                  "id": "17264597",
                                  "name": "Singapuri Fried Noodles",
                                  "category": "Fried Rice Noodles And Chopsuey",
                                  "imageId": "FOOD_CATALOG/IMAGES/CMS/2024/5/28/a6912a6a-f406-4ca2-99b1-113169dc569d_ca506ea0-65e1-49bd-82d6-8e726ee64c13.jpg",
                                  "isVeg": 1,
                                  "price": 18500,
                                  "variants": {
                                    
                                  },
                                  "variantsV2": {
                                    
                                  },
                                  "addons": [
                                    {
                                      "groupId": "81548261",
                                      "groupName": "Choice Of Preperation",
                                      "choices": [
                                        {
                                          "id": "66005615",
                                          "name": "Jain",
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        },
                                        {
                                          "id": "66005614",
                                          "name": "Regular",
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        }
                                      ],
                                      "maxAddons": 1,
                                      "maxFreeAddons": -1,
                                      "minAddons": 1
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
                                      "rating": "5.0",
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
                                  "id": "17264598",
                                  "name": "Schezwan Fried Noodles",
                                  "category": "Fried Rice Noodles And Chopsuey",
                                  "isVeg": 1,
                                  "price": 18500,
                                  "variants": {
                                    
                                  },
                                  "variantsV2": {
                                    
                                  },
                                  "addons": [
                                    {
                                      "groupId": "81548258",
                                      "groupName": "Choice Of Preperation",
                                      "choices": [
                                        {
                                          "id": "66005615",
                                          "name": "Jain",
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        },
                                        {
                                          "id": "66005614",
                                          "name": "Regular",
                                          "inStock": 1,
                                          "isVeg": 1,
                                          "isEnabled": 1
                                        }
                                      ],
                                      "maxAddons": 1,
                                      "maxFreeAddons": -1,
                                      "minAddons": 1
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
                      "@type": "type.googleapis.com/swiggy.presentation.food.v2.RestaurantLicenseInfo",
                      "type": "FSSAI",
                      "imageId": "fssai_final_edss9i",
                      "text": [
                        "License No. 10721031000382"
                      ]
                    }
                  }
                },
                {
                  "card": {
                    "card": {
                      "@type": "type.googleapis.com/swiggy.presentation.food.v2.RestaurantAddress",
                      "name": "Alpha Restaurant",
                      "area": "Athwa",
                      "completeAddress": "Shivshakti Shopping Center, Bhatar Road, Near Olympia Mall"
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
  "csrfToken": "jdHHKJRUm7v4-NDI0MpXZtQAeF2gYTyv3zTIiN58"
}