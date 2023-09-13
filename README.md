# Recipe Finder

## Developers
- Ethan Barker: barkeret@oregonstate.edu
- Jordan P
- Kathleen Ashley: srslyashh@gmail.com
- Jermaine Lara : laraje@oregonstate.edu

## Description

Recipe Finder is a web application that empowers users to discover recipes based on the ingredients they have on hand. It offers a user-friendly interface for searching recipes by categories, dietary preferences, and specific ingredients. Users can explore various cuisines and cooking ideas, find detailed recipe information, and even view mouthwatering images of the dishes they want to prepare.

## APIs

We leverage the following APIs to provide a rich recipe-finding experience:

- **Spoonacular API**: [Spoonacular Food API](https://spoonacular.com/food-api) serves as the backbone of our application, offering access to a vast database of recipes and ingredients.

  - `recipes/complexSearch`: This endpoint enables extensive searching and filtering options, allowing users to pinpoint the perfect recipe based on their preferences. It plays a significant role in our "Categories" page.

  - `recipes/findByIngredients`: Users can utilize this endpoint to discover recipes they can cook right away by specifying the ingredients they have in their kitchen.

  - `recipes/{id}/information`: We use this endpoint to gather detailed information about specific recipes. It populates our recipe cards on the website, including enticing images.

## Routes & Non-navigation Interactions

### Home Page

The home page serves as the welcoming gateway to our Recipe Finder application. Users can explore the main features and initiate their recipe search.

### About Page

The About page offers insights into our project, including information about the dedicated individuals who have contributed to its development.

### Browsing by Categories

- **Cuisine API Parameterized Route**: On this page, users can delve into various recipe categories based on cuisines. Each category leads to a dedicated page showcasing recipes associated with that cuisine.

### Recipes by Search

Users can search for recipes with precision using various API parameters, such as:

- Included/Excluded Ingredients
- Intolerances
- Dietary Preferences

### Recipe View

The Recipe View page provides users with detailed information about a specific recipe. Users can access instructions, ingredients, cooking times, and captivating images to inspire their culinary adventures.

## Getting Started

To get started with Recipe Finder, follow these steps:

1. Clone this repository to your local machine.

2. Install the necessary dependencies using your preferred package manager (e.g., npm or yarn).

3. Configure the API keys for Spoonacular by following the instructions in the project's configuration file.

4. Run the application on your local environment and start exploring recipes!

## License

This project is licensed under the [MIT License](LICENSE).

---

Happy cooking with Recipe Finder! 🍽️✨
