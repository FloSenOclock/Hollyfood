BEGIN;

SET CLIENT_ENCODING TO 'UTF-8';

TRUNCATE "user", "role", "comment", "recipe", "ingredient", "category", "work", "tag", "proportion", "favorite", "recipe_has_ingredient", "ingredient_has_proportion", "recipe_has_tag", "recipe_has_category" CASCADE;

INSERT INTO "category"
  ("name")
VALUES
  ('film'),
  ('serie');
  
INSERT INTO "ingredient"
  ("name")
VALUES
  ('Tomates');

INSERT INTO "work"
  ("title", "synopsis", "category_id")
VALUES
  ('Garfield', 'Un chat ...',1),
  ('La Princesse et la Grenouille', 'Disney ...',1),
  ('Star Wars', 'Film de science-fantasie ...',1),
  ('Once Upon A Time', 'Univers Fantastique ...',2);



INSERT INTO "role"
  ("name")
VALUES
  ('membre'),
  ('admin');
  
INSERT INTO "proportion"
  ("quantity", "unit")
VALUES
  (2, 'tomates');

INSERT INTO "tag"
  ("name")
VALUES
  ('salé');

INSERT INTO "user"
  ( "name","firstname","email","password", "role_id")
VALUES
  ('menzikoff','gregory','greg@gmail.com','blablabla',2),
  ('revillon','fred','fred@gmail.com','blablabla',2),
  ('senor','florian','florian@gmail.com','blablabla',2),
  ('dc','gregory','gregory@gmail.com','blablabla',2);
 
INSERT INTO "recipe"
  ("slug","name", "quote", "picture", "instruction", "total_time", "servings", "difficulty", "score", "work_id","user_id")
VALUES
  ('lasagne de garfield','Lasagne de Garfield', 'Que ferait Garfield', 'https://img', '1- Préchauffez votre four à 180°C ', '1:00:00', 1, 'Facile', 1, 1, 1),
  ('les beignets du café','Les beignets du café', 'Les beignets au sucre sont un classique', 'https://img', '1-  Commencez par préparer votre base de levure: ', '1:00:00', 1, 'Facile', 2, 2, 1),
  ('porcs rôtis aux épices de Tatooine','Porcs rôtis aux épices de Tatooine', 'Dans une galaxie lointaine,', 'https://img', '1-  Préchauffez votre four à 200°C (400°F).', '1:00:00', 1, 'Facile', 3, 3, 1),
  ('Chocolat chaud à la cannelle de la famille Charmant','Chocolat chaud à la cannelle de la famille Charmant', 'Dans la série, le chocolat chaud à la cannelle est souvent mentionné comme une boisson réconfortante et magique, souvent préparée par Mary Margaret ', 'https://img', '1- Dans une casserole à feu moyen, faites chauffer le lait jusqu''à ce qu''il soit chaud mais pas bouillant.', '1:00:00', 1, 'Facile', 4, 4, 1);

INSERT INTO "comment"
  ( "description","date", "recipe_id", "user_id")
VALUES
  ('Lorem','2024-04-26', 1, 1);
 
INSERT INTO "recipe_has_category"
  ( "recipe_id", "category_id")
VALUES
  (1, 1),
  (2, 1),
  (3, 1),
  (4, 2);
  
INSERT INTO "recipe_has_ingredient"
  ( "ingredient_id", "recipe_id")
VALUES
  (1, 1);
  
INSERT INTO "ingredient_has_proportion"
  ( "ingredient_id", "proportion_id")
VALUES
  (1, 1);
  
INSERT INTO "recipe_has_tag"
  ( "recipe_id", "tag_id")
VALUES
  (1, 1);
  
INSERT INTO "favorite"
  ( "user_id", "recipe_id")
VALUES
  (1, 1);

COMMIT;