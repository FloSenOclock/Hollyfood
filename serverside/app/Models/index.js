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

// Relation des favoris entre les utilisateurs et les recettes
Recipe.belongsToMany(User, { through: 'RecipeUser' });
User.belongsToMany(Recipe, { through: 'RecipeUser' });

// Relation entre les recette et les categories
Recipe.belongsToMany(Category, { through:'RecipeCategory' });
Category.belongsToMany(Recipe, { through: 'RecipeCategory' });

// Relation entre les recette et les ingredients
Recipe.belongsToMany(Ingredient, { through: 'RecipeIngredient' });
Ingredient.belongsToMany(Recipe, {through: 'RecipeIngredient' });

// Relation entre les ingredient et les proportions
Ingredient.belongsToMany(Proportion, { through: 'IngredientProportion' });
Proportion.belongsToMany(Ingredient, { through: 'IngredientProportion' });

// Relation entre les recettes et les tags
Recipe.belongsToMany(Tag, { through:'RecipeTag' });
Tag.belongsToMany(Recipe, { through: 'RecipeTag' });

export {User, Role, Recipe, Work, Comment, Category, Ingredient, Proportion, Tag}
