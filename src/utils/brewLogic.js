//==================================================
// utils/brewLogic.js
//==================================================

export const brewDatabase = {

  Relax: {
    id: 1,

    name: "Cafe Latte",

    emoji: "☕",

    intensity: 2,

    sweetness: 3,

    milk: true,

    temperature: "Hot",

    caffeine: "Medium",

    description:
      "Smooth espresso blended with silky steamed milk. Perfect for relaxing evenings.",

    tags: [
      "Creamy",
      "Smooth",
      "Classic",
      "Comfort"
    ]
  },

  Focus: {
    id: 2,

    name: "Espresso",

    emoji: "⚡",

    intensity: 5,

    sweetness: 1,

    milk: false,

    temperature: "Hot",

    caffeine: "High",

    description:
      "Pure espresso shot with bold flavour for maximum focus.",

    tags: [
      "Strong",
      "Bold",
      "Arabica"
    ]
  },

  Refresh: {
    id: 3,

    name: "Iced Matcha",

    emoji: "🍵",

    intensity: 2,

    sweetness: 2,

    milk: true,

    temperature: "Cold",

    caffeine: "Medium",

    description:
      "Refreshing ceremonial matcha served chilled with milk.",

    tags: [
      "Refreshing",
      "Healthy",
      "Summer"
    ]
  },

  Sweet: {
    id: 4,

    name: "Belgian Hot Chocolate",

    emoji: "🍫",

    intensity: 1,

    sweetness: 5,

    milk: true,

    temperature: "Hot",

    caffeine: "Low",

    description:
      "Rich Belgian chocolate crafted for dessert lovers.",

    tags: [
      "Chocolate",
      "Dessert",
      "Sweet"
    ]
  },

  Energy: {
    id: 5,

    name: "Roasted Hazelnut Latte",

    emoji: "🌰",

    intensity: 4,

    sweetness: 3,

    milk: true,

    temperature: "Hot",

    caffeine: "High",

    description:
      "Nutty espresso infused with roasted hazelnut flavour.",

    tags: [
      "Nutty",
      "Premium",
      "Signature"
    ]
  }

};


//==================================================
// GET DRINK
//==================================================

export function getBrewByMood(mood){

    return brewDatabase[mood] || null;

}


//==================================================
// ALL DRINKS
//==================================================

export function getAllBrews(){

    return Object.values(brewDatabase);

}


//==================================================
// RANDOM DRINK
//==================================================

export function getRandomBrew(){

    const drinks = Object.values(brewDatabase);

    return drinks[
        Math.floor(Math.random()*drinks.length)
    ];

}


//==================================================
// SEARCH
//==================================================

export function searchBrew(keyword){

    if(!keyword) return [];

    return Object.values(brewDatabase).filter(drink=>{

        return (

            drink.name
            .toLowerCase()
            .includes(keyword.toLowerCase())

            ||

            drink.tags.some(tag=>

                tag
                .toLowerCase()
                .includes(keyword.toLowerCase())

            )

        );

    });

}


//==================================================
// FILTER
//==================================================

export function filterBrews(options={}){

    return Object.values(brewDatabase).filter(drink=>{

        if(

            options.temperature &&

            drink.temperature!==options.temperature

        ) return false;

        if(

            options.milk!==undefined &&

            drink.milk!==options.milk

        ) return false;

        if(

            options.caffeine &&

            drink.caffeine!==options.caffeine

        ) return false;

        return true;

    });

}


//==================================================
// RECOMMENDATION
//==================================================

export function recommendBrew(mood){

    const drink = getBrewByMood(mood);

    if(drink){

        return {

            success:true,

            recommendation:drink

        };

    }

    return{

        success:false,

        recommendation:getRandomBrew()

    };

}