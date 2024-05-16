import User from "./User.js";
import Role from "./Role.js";
import Recipe from "./Recipe.js";
import Work from "./Work.js";
import Comment from "./Comment.js"
import Category from "./Category.js";
import Ingredient from "./Ingredient.js";
import Proportion from "./Proportion.js";
import Tag from "./Tag.js";

// Relation de l'utilisateur avec son role
User.belongsTo(Role, { foreignKey: "role_id", as: "role"});
Role.hasMany(User, { foreignKey: "role_id", as: "users"});

// Relation de la recette avec son oeuvre
Recipe.belongsTo(Work, { foreignKey: "work_id", as: "work"});
Work.hasMany(Recipe, { foreignKey: "work_id", as: "recipes"});


// Relation de la recette avec son utilisateur
Recipe.belongsTo(User, { foreignKey: "user_id", as: "user"});
User.hasMany(Recipe, { foreignKey: "user_id", as: "recipes"});

// Relation du commentaire avec sa recette
Comment.belongsTo(Recipe, { foreignKey: "recipe_id", as: "recipe"});
Recipe.hasMany(Comment, { foreignKey: "recipe_id", as: "comments"});

// Relation du commentaire avec son utilisateur
Comment.belongsTo(User, { foreignKey: "user_id", as: "user"});
User.hasMany(Comment, { foreignKey: "user_id", as: "comments"});

// Relation de l'oeuvre avec sa category
Work.belongsTo(Category, { foreignKey: "category_id", as: "workCategory"});
Category.hasMany(Work, { foreignKey: "category_id", as: "category"});

// Relation des favoris entre les utilisateurs et les recettes
Recipe.belongsToMany(User, {foreignKey:"recipe_id", through: 'RecipeUser' });
User.belongsToMany(Recipe, {foreignKey:"user_id", through: 'RecipeUser' });

// Relation entre les recette et les categories
Recipe.belongsToMany(Category, { foreignKey:"recipe_id", through:'recipe_has_category' });
Category.belongsToMany(Recipe, { foreignKey:"category_id",through: 'recipe_has_category' });

// Relation entre les recette et les ingredients
Recipe.belongsToMany(Ingredient, {foreignKey:"recipe_id", through: 'RecipeIngredient' });
Ingredient.belongsToMany(Recipe, {foreignKey:"ingredient_id",through: 'RecipeIngredient' });

// Relation entre les ingredient et les proportions
Ingredient.belongsToMany(Proportion, {foreignKey:"ingredient_id", through: 'IngredientProportion' });
Proportion.belongsToMany(Ingredient, {foreignKey:"proportion_id", through: 'IngredientProportion' });

// Relation entre les recettes et les tags
Recipe.belongsToMany(Tag, {foreignKey:"recipe_id", through:'RecipeTag' });
Tag.belongsToMany(Recipe, {foreignKey:"tag_id", through: 'RecipeTag' });

export {User, Role, Recipe, Work, Comment, Category, Ingredient, Proportion, Tag}
