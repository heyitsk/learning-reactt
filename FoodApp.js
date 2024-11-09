import React from "react";
import ReactDOM from "react-dom/client";

/*
header
    log
    navbar
body
    search bar and search button
    rest cards
footer 
    copyright
*/

const Header = () => {
    return (
        <div id="header-container">
            <div id="logo container">
                <img id="logo"src="https://marketplace.canva.com/EAFaFUz4aKo/2/0/1600w/canva-yellow-abstract-cooking-fire-free-logo-JmYWTjUsE-Q.jpg" alt="logo"/>
            </div>
            <div id="navbar-container">
                <ul>
                    <li><a href="">Home</a></li>
                    <li><a href="">About</a></li>
                    <li><a href="">Contact</a></li>
                    <li><a href="">Food</a></li>
                </ul>
            </div>
        </div>
    )
}

const resObj ={
    "info": {
      "id": "234875",
      "name": "Adil Hotel",
      "cloudinaryImageId": "gp1ityra6utvzqn6ghnv",
      "locality": "Rautha Wada",
      "areaName": "Chhindwara Locality",
      "costForTwo": "₹150 for two",
      "cuisines": [
        "North Indian",
        "Biryani",
        "Tandoor"
      ],
      "avgRating": 4.4,
      "parentId": "27123",
      "avgRatingString": "4.4",
      "totalRatingsString": "1.0K+",
      "sla": {
        "deliveryTime": 40,
        "lastMileTravel": 10.7,
        "serviceability": "SERVICEABLE",
        "slaString": "40-45 mins",
        "lastMileTravelString": "10.7 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-11-07 23:00:00",
        "opened": true
      },
      "badges": {
        
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "₹150 OFF",
        "subHeader": "ABOVE ₹349",
        "discountTag": "FLAT DEAL"
      },
      "orderabilityCommunication": {
        "title": {
          
        },
        "subTitle": {
          
        },
        "message": {
          
        },
        "customIcon": {
          
        }
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      },
      "externalRatings": {
        "aggregatedRating": {
          "rating": "--"
        }
      },
      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
      "context": "seo-data-9e76e788-b975-446f-a28a-505b8a06390f"
    },
    "cta": {
      "link": "https://www.swiggy.com/city/chhindwara/adil-hotel-rautha-wada-chhindwara-locality-rest234875",
      "text": "RESTAURANT_MENU",
      "type": "WEBLINK"
    },
    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
  } //but you generally get an array of object

const resList = [
                  {
                    "info": {
                      "id": "630193",
                      "name": "Champaran  Handi Restaurant",
                      "cloudinaryImageId": "xph0vf5pvbxjf8xchwjk",
                      "locality": "Sinchai Colony",
                      "areaName": "Nagpur road",
                      "costForTwo": "₹200 for two",
                      "cuisines": [
                        "North Indian"
                      ],
                      "avgRating": 4.3,
                      "parentId": "376324",
                      "avgRatingString": "4.3",
                      "totalRatingsString": "331",
                      "sla": {
                        "deliveryTime": 43,
                        "lastMileTravel": 11.9,
                        "serviceability": "SERVICEABLE",
                        "slaString": "40-45 mins",
                        "lastMileTravelString": "11.9 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2024-11-07 23:00:00",
                        "opened": true
                      },
                      "badges": {
                        
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            
                          },
                          "textBased": {
                            
                          },
                          "textExtendedBadges": {
                            
                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "40% OFF",
                        "subHeader": "UPTO ₹80"
                      },
                      "orderabilityCommunication": {
                        "title": {
                          
                        },
                        "subTitle": {
                          
                        },
                        "message": {
                          
                        },
                        "customIcon": {
                          
                        }
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                          "lottie": {
                            
                          },
                          "video": {
                            
                          }
                        }
                      },
                      "reviewsSummary": {
                        
                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {
                        
                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "--"
                        }
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-9e76e788-b975-446f-a28a-505b8a06390f"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/chhindwara/champaran-handi-restaurant-sinchai-colony-nagpur-road-rest630193",
                      "text": "RESTAURANT_MENU",
                      "type": "WEBLINK"
                    },
                    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
                  },
                  {
                    "info": {
                      "id": "234875",
                      "name": "Adil Hotel",
                      "cloudinaryImageId": "gp1ityra6utvzqn6ghnv",
                      "locality": "Rautha Wada",
                      "areaName": "Chhindwara Locality",
                      "costForTwo": "₹150 for two",
                      "cuisines": [
                        "North Indian",
                        "Biryani",
                        "Tandoor"
                      ],
                      "avgRating": 4.4,
                      "parentId": "27123",
                      "avgRatingString": "4.4",
                      "totalRatingsString": "1.0K+",
                      "sla": {
                        "deliveryTime": 40,
                        "lastMileTravel": 10.7,
                        "serviceability": "SERVICEABLE",
                        "slaString": "40-45 mins",
                        "lastMileTravelString": "10.7 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2024-11-07 23:00:00",
                        "opened": true
                      },
                      "badges": {
                        
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            
                          },
                          "textBased": {
                            
                          },
                          "textExtendedBadges": {
                            
                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "₹150 OFF",
                        "subHeader": "ABOVE ₹349",
                        "discountTag": "FLAT DEAL"
                      },
                      "orderabilityCommunication": {
                        "title": {
                          
                        },
                        "subTitle": {
                          
                        },
                        "message": {
                          
                        },
                        "customIcon": {
                          
                        }
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                          "lottie": {
                            
                          },
                          "video": {
                            
                          }
                        }
                      },
                      "reviewsSummary": {
                        
                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {
                        
                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "--"
                        }
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-9e76e788-b975-446f-a28a-505b8a06390f"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/chhindwara/adil-hotel-rautha-wada-chhindwara-locality-rest234875",
                      "text": "RESTAURANT_MENU",
                      "type": "WEBLINK"
                    },
                    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
                  },
                  {
                    "info": {
                      "id": "774546",
                      "name": "Shree Naivedyam",
                      "cloudinaryImageId": "2274f59cb8efcfab1f446b195bcbda3b",
                      "locality": "Khajri Road",
                      "areaName": "Chhindwara City",
                      "costForTwo": "₹300 for two",
                      "cuisines": [
                        "North Indian",
                        "Chinese",
                        "South Indian",
                        "Pizzas",
                        "Beverages"
                      ],
                      "avgRating": 4.2,
                      "veg": true,
                      "parentId": "428968",
                      "avgRatingString": "4.2",
                      "totalRatingsString": "69",
                      "sla": {
                        "deliveryTime": 48,
                        "lastMileTravel": 12.3,
                        "serviceability": "SERVICEABLE",
                        "slaString": "45-50 mins",
                        "lastMileTravelString": "12.3 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2024-11-07 23:00:00",
                        "opened": true
                      },
                      "badges": {
                        
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            
                          },
                          "textBased": {
                            
                          },
                          "textExtendedBadges": {
                            
                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "10% OFF",
                        "subHeader": "UPTO ₹40"
                      },
                      "orderabilityCommunication": {
                        "title": {
                          
                        },
                        "subTitle": {
                          
                        },
                        "message": {
                          
                        },
                        "customIcon": {
                          
                        }
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                          "lottie": {
                            
                          },
                          "video": {
                            
                          }
                        }
                      },
                      "reviewsSummary": {
                        
                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {
                        
                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "--"
                        }
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-9e76e788-b975-446f-a28a-505b8a06390f"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/chhindwara/shree-naivedyam-khajri-road-chhindwara-city-rest774546",
                      "text": "RESTAURANT_MENU",
                      "type": "WEBLINK"
                    },
                    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
                  },
                  {
                    "info": {
                      "id": "618037",
                      "name": "Jai Ganesh Bhojnalaya",
                      "cloudinaryImageId": "yzgqriufpzmloogcn2vl",
                      "locality": "Railway Colony",
                      "areaName": "Bus stand",
                      "costForTwo": "₹200 for two",
                      "cuisines": [
                        "North Indian",
                        "South Indian",
                        "Indian",
                        "Chinese"
                      ],
                      "avgRating": 3.9,
                      "veg": true,
                      "parentId": "368432",
                      "avgRatingString": "3.9",
                      "totalRatingsString": "253",
                      "sla": {
                        "deliveryTime": 41,
                        "lastMileTravel": 11.3,
                        "serviceability": "SERVICEABLE",
                        "slaString": "40-45 mins",
                        "lastMileTravelString": "11.3 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2024-11-07 23:00:00",
                        "opened": true
                      },
                      "badges": {
                        "imageBadges": [
                          {
                            "imageId": "v1695133679/badges/Pure_Veg111.png",
                            "description": "pureveg"
                          }
                        ]
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            "badgeObject": [
                              {
                                "attributes": {
                                  "description": "pureveg",
                                  "imageId": "v1695133679/badges/Pure_Veg111.png"
                                }
                              }
                            ]
                          },
                          "textBased": {
                            
                          },
                          "textExtendedBadges": {
                            
                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "₹150 OFF",
                        "subHeader": "ABOVE ₹299",
                        "discountTag": "FLAT DEAL"
                      },
                      "orderabilityCommunication": {
                        "title": {
                          
                        },
                        "subTitle": {
                          
                        },
                        "message": {
                          
                        },
                        "customIcon": {
                          
                        }
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                          "lottie": {
                            
                          },
                          "video": {
                            
                          }
                        }
                      },
                      "reviewsSummary": {
                        
                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {
                        
                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "--"
                        }
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-9e76e788-b975-446f-a28a-505b8a06390f"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/chhindwara/jai-ganesh-bhojnalaya-railway-colony-bus-stand-rest618037",
                      "text": "RESTAURANT_MENU",
                      "type": "WEBLINK"
                    },
                    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
                  },
                  {
                    "info": {
                      "id": "196341",
                      "name": "Rangla Panjab",
                      "cloudinaryImageId": "hxxasn2kf8g9eyi9eonq",
                      "locality": "Shankaracharya Nagar",
                      "areaName": "Prasia Road",
                      "costForTwo": "₹350 for two",
                      "cuisines": [
                        "North Indian",
                        "South Indian",
                        "Chinese",
                        "Beverages",
                        "Fast Food",
                        "Desserts"
                      ],
                      "avgRating": 4.2,
                      "parentId": "166894",
                      "avgRatingString": "4.2",
                      "totalRatingsString": "404",
                      "sla": {
                        "deliveryTime": 50,
                        "lastMileTravel": 13.6,
                        "serviceability": "SERVICEABLE",
                        "slaString": "50-55 mins",
                        "lastMileTravelString": "13.6 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2024-11-07 23:45:00",
                        "opened": true
                      },
                      "badges": {
                        
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            
                          },
                          "textBased": {
                            
                          },
                          "textExtendedBadges": {
                            
                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "₹50 OFF",
                        "subHeader": "ABOVE ₹199",
                        "discountTag": "FLAT DEAL"
                      },
                      "orderabilityCommunication": {
                        "title": {
                          
                        },
                        "subTitle": {
                          
                        },
                        "message": {
                          
                        },
                        "customIcon": {
                          
                        }
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                          "lottie": {
                            
                          },
                          "video": {
                            
                          }
                        }
                      },
                      "reviewsSummary": {
                        
                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {
                        
                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "--"
                        }
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-9e76e788-b975-446f-a28a-505b8a06390f"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/chhindwara/rangla-panjab-shankaracharya-nagar-prasia-road-rest196341",
                      "text": "RESTAURANT_MENU",
                      "type": "WEBLINK"
                    },
                    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
                  },
                  {
                    "info": {
                      "id": "898044",
                      "name": "Thikana Special",
                      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/5/26/6adf18b9-0a2e-45ad-b587-3f714762f7bd_898044.jpg",
                      "locality": "Punjab ",
                      "areaName": "Chhindwara City",
                      "costForTwo": "₹300 for two",
                      "cuisines": [
                        "North Indian",
                        "Chinese",
                        "Biryani",
                        "Sweets",
                        "Salads"
                      ],
                      "avgRating": 4.8,
                      "parentId": "522552",
                      "avgRatingString": "4.8",
                      "totalRatingsString": "8",
                      "sla": {
                        "deliveryTime": 53,
                        "lastMileTravel": 14.4,
                        "serviceability": "SERVICEABLE",
                        "slaString": "50-55 mins",
                        "lastMileTravelString": "14.4 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2024-11-07 23:45:00",
                        "opened": true
                      },
                      "badges": {
                        
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            
                          },
                          "textBased": {
                            
                          },
                          "textExtendedBadges": {
                            
                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "₹50 OFF",
                        "subHeader": "ABOVE ₹199",
                        "discountTag": "FLAT DEAL"
                      },
                      "orderabilityCommunication": {
                        "title": {
                          
                        },
                        "subTitle": {
                          
                        },
                        "message": {
                          
                        },
                        "customIcon": {
                          
                        }
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                          "lottie": {
                            
                          },
                          "video": {
                            
                          }
                        }
                      },
                      "reviewsSummary": {
                        
                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "isNewlyOnboarded": true,
                      "restaurantOfferPresentationInfo": {
                        
                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "--"
                        }
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-9e76e788-b975-446f-a28a-505b8a06390f"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/chhindwara/thikana-special-punjab-chhindwara-city-rest898044",
                      "text": "RESTAURANT_MENU",
                      "type": "WEBLINK"
                    },
                    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
                  },
                  {
                    "info": {
                      "id": "150586",
                      "name": "Accord International",
                      "cloudinaryImageId": "ntcsuou2650qimnkrc3m",
                      "locality": "Parasia Road",
                      "areaName": "Vishnu Nagar",
                      "costForTwo": "₹400 for two",
                      "cuisines": [
                        "North Indian",
                        "South Indian",
                        "Continental",
                        "Beverages"
                      ],
                      "avgRating": 4.4,
                      "parentId": "26828",
                      "avgRatingString": "4.4",
                      "totalRatingsString": "581",
                      "sla": {
                        "deliveryTime": 58,
                        "lastMileTravel": 14.3,
                        "serviceability": "SERVICEABLE",
                        "slaString": "55-60 mins",
                        "lastMileTravelString": "14.3 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2024-11-07 23:30:00",
                        "opened": true
                      },
                      "badges": {
                        
                      },
                      "isOpen": true,
                      "aggregatedDiscountInfoV2": {
                        
                      },
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            
                          },
                          "textBased": {
                            
                          },
                          "textExtendedBadges": {
                            
                          }
                        }
                      },
                      "orderabilityCommunication": {
                        "title": {
                          
                        },
                        "subTitle": {
                          
                        },
                        "message": {
                          
                        },
                        "customIcon": {
                          
                        }
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                          "lottie": {
                            
                          },
                          "video": {
                            
                          }
                        }
                      },
                      "reviewsSummary": {
                        
                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {
                        
                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "--"
                        }
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-9e76e788-b975-446f-a28a-505b8a06390f"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/chhindwara/accord-international-parasia-road-vishnu-nagar-rest150586",
                      "text": "RESTAURANT_MENU",
                      "type": "WEBLINK"
                    },
                    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
                  },
                  {
                    "info": {
                      "id": "658210",
                      "name": "The Fusion Lounge",
                      "cloudinaryImageId": "fa4944f0cfdcbca2bec1f3ab8e3db3f7",
                      "locality": "Triloki nagar",
                      "areaName": "Railway Station",
                      "costForTwo": "₹300 for two",
                      "cuisines": [
                        "North Indian",
                        "South Indian",
                        "Chinese",
                        "Beverages",
                        "Fast Food",
                        "Desserts"
                      ],
                      "avgRating": 4.1,
                      "parentId": "395453",
                      "avgRatingString": "4.1",
                      "totalRatingsString": "272",
                      "sla": {
                        "deliveryTime": 56,
                        "lastMileTravel": 10.2,
                        "serviceability": "SERVICEABLE",
                        "slaString": "55-60 mins",
                        "lastMileTravelString": "10.2 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2024-11-07 23:00:00",
                        "opened": true
                      },
                      "badges": {
                        
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            
                          },
                          "textBased": {
                            
                          },
                          "textExtendedBadges": {
                            
                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "10% OFF",
                        "subHeader": "UPTO ₹40"
                      },
                      "orderabilityCommunication": {
                        "title": {
                          
                        },
                        "subTitle": {
                          
                        },
                        "message": {
                          
                        },
                        "customIcon": {
                          
                        }
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                          "lottie": {
                            
                          },
                          "video": {
                            
                          }
                        }
                      },
                      "reviewsSummary": {
                        
                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {
                        
                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "--"
                        }
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-9e76e788-b975-446f-a28a-505b8a06390f"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/chhindwara/the-fusion-lounge-triloki-nagar-railway-station-rest658210",
                      "text": "RESTAURANT_MENU",
                      "type": "WEBLINK"
                    },
                    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
                  }
                ]

const RestCard = (props) => {
    //arguments that are passed react will wrap them as object and will be called as props so props are objects and we can access object properties using dot notation to dynamically enter data 
    // console.log(props);
    console.log(props); //this contain the resInfo object 
    console.log(props.resInfo); //this line and 981 logs the same thing that we've taken the reInfo object from the props aobject and stored it in resInfo var
    const {resInfo} = props;
    console.log(resInfo);
    
    const {name, locality, costForTwo, cloudinaryImageId} = resInfo?.info
    
    return(
        <div id="rest-card">
            <div id="restimg-container">
                <img src=
                {"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+cloudinaryImageId
                }/>
            </div>
            <div id="rest-info">
                {/* <h4>connough place</h4>
                <h5>rating</h5> */}
                {/* <h4>{resInfo.info.name}</h4> this is not a good practice so we'll destructure it*/}
                <h4>{name}</h4>
                <h5>{locality}</h5>
                <h6>{costForTwo}</h6>
            </div>
        </div>
    )
}

const Body = () => {
    return(
        <div id="body-container">
            <div id="search-container">
                <input type="text" placeholder="Search.."></input>
                <button id="search-button" 
                style={{backgroundColor: "gray", border: "none", borderRadius: "5px", padding: "5px"}}
                >Search</button>
            </div>
            <div id="restcard-container">
                {/* <RestCard resname="kfc" reslocation="delhi"/> this is also a lengthy process as we will get data through backend and we can't write these values ourselves*/}
                {/* <RestCard resInfo = {resList[0]}/> it is better to use a loop */}
                {
                  resList.map(restaurant => <RestCard key={restaurant.info.id} resInfo={restaurant}/>) 
                  //NOTE :- whenever you use map function  make sure to use unique key for each
                }



                {/* <RestCard resname="dominos" reslocation="punjab"/>  */}
                {/* to dynamically ennter data in these cards we use "props". Just like components are normal js functions props are normal js arguments to the function */}



            </div>
        </div>
    )
}

const Footer = ()=> {
    return(
        <div id="footer-container">
            <ul>
                <li>Copyright</li>
                <li>Email</li>
                <li>Contact us</li>
            </ul>
        </div>
    )
}



const FoodApp = () => {
    return (
    <div id="FoodApp">
        <Header/>
        <Body/>
        <Footer/>

    </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<FoodApp/>)