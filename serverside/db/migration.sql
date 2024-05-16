BEGIN;

SET CLIENT_ENCODING TO 'UTF-8';

DROP TABLE IF EXISTS "user", "role", "comment", "recipe", "ingredient", "category", "work", "tag", "proportion", "favorite", "ingredient_has_recipe", "ingredient_has_proportion", "recipe_has_tag", "recipe_has_category" CASCADE;

CREATE TABLE "category" (
   "id" INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
   "name" TEXT NOT NULL,
   "createdAt" TIMESTAMPTZ NOT NULL DEFAULT NOW(),
   "updatedAt" TIMESTAMPTZ
);

CREATE TABLE "ingredient" (
   "id" INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
   "name" TEXT NOT NULL,
   "createdAt" TIMESTAMPTZ NOT NULL DEFAULT NOW(),
   "updatedAt" TIMESTAMPTZ
);

CREATE TABLE "work" (
   "id" INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
   "title" TEXT NOT NULL,
   "synopsis" TEXT NOT NULL,
   "category_id" INTEGER REFERENCES "category"("id") NOT NULL,
   "createdAt" TIMESTAMPTZ NOT NULL DEFAULT NOW(),
   "updatedAt" TIMESTAMPTZ
);

CREATE TABLE "role" (
   "id"  INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
   "name" VARCHAR(255) NOT NULL,
   "createdAt" TIMESTAMPTZ NOT NULL DEFAULT NOW(),
   "updatedAt" TIMESTAMPTZ
);

CREATE TABLE "proportion" (
   "id" INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
   "quantity" INTEGER NOT NULL,
   "unit" TEXT NOT NULL,
   "createdAt" TIMESTAMPTZ NOT NULL DEFAULT NOW(),
   "updatedAt" TIMESTAMPTZ
);

CREATE TABLE "tag" (
   "id" INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
   "name" TEXT NOT NULL,
   "createdAt" TIMESTAMPTZ NOT NULL DEFAULT NOW(),
   "updatedAt" TIMESTAMPTZ
);

CREATE TABLE "user" (
   "id" INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
   "name" VARCHAR(255) NOT NULL,
   "firstname" VARCHAR(255) NOT NULL,
   "avatar" TEXT,
   "email" VARCHAR(255) UNIQUE NOT NULL,
   "password" VARCHAR(255) NOT NULL,
   "role_id" INTEGER REFERENCES "role"("id") NOT NULL DEFAULT 1,
   "createdAt" TIMESTAMPTZ NOT NULL DEFAULT NOW(),
   "updatedAt" TIMESTAMPTZ
);

CREATE TABLE "recipe" (
    "id" INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "slug" VARCHAR(255) NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "quote" TEXT NOT NULL,
    "picture" TEXT NOT NULL,
    "instruction" TEXT NOT NULL,
    "total_time" TIME NOT NULL ,
    "servings" INTEGER NOT NULL,
    "difficulty" TEXT NOT NULL,
    "score" INTEGER,
    "work_id" INTEGER REFERENCES "work"("id") NOT NULL,
    "user_id" INTEGER REFERENCES "user"("id") NOT NULL,
    "createdAt" TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    "updatedAt" TIMESTAMPTZ
);

CREATE TABLE "comment" (
   "id" INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
   "description" TEXT NOT NULL,
   "date" DATE NOT NULL,
   "recipe_id" INTEGER REFERENCES "recipe"("id") NOT NULL,
   "user_id" INTEGER REFERENCES "user"("id") NOT NULL,
   "createdAt" TIMESTAMPTZ NOT NULL DEFAULT NOW(),
   "updatedAt" TIMESTAMPTZ
);

CREATE TABLE "recipe_has_category" (
   "id" INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
   "recipe_id" INTEGER REFERENCES "recipe"("id") NOT NULL,
   "category_id" INTEGER REFERENCES "category"("id") NOT NULL,
   "createdAt" TIMESTAMPTZ NOT NULL DEFAULT NOW(),
   "updatedAt" TIMESTAMPTZ
);

CREATE TABLE "ingredient_has_recipe" (
   "id" INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
   "ingredient_id" INTEGER REFERENCES "ingredient"("id") NOT NULL,
   "recipe_id" INTEGER REFERENCES "recipe"("id") NOT NULL,
   "createdAt" TIMESTAMPTZ NOT NULL DEFAULT NOW(),
   "updatedAt" TIMESTAMPTZ
);

CREATE TABLE "ingredient_has_proportion" (
   "id" INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
   "ingredient_id" INTEGER REFERENCES "ingredient"("id") NOT NULL,
   "proportion_id" INTEGER REFERENCES "proportion"("id") NOT NULL,
   "createdAt" TIMESTAMPTZ NOT NULL DEFAULT NOW(),
   "updatedAt" TIMESTAMPTZ
);

CREATE TABLE "favorite"(
   "id" INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
   "user_id" INTEGER REFERENCES "user"("id") NOT NULL,
   "recipe_id" INTEGER REFERENCES "recipe"("id") NOT NULL,
   "createdAt" TIMESTAMPTZ NOT NULL DEFAULT NOW(),
   "updatedAt" TIMESTAMPTZ
);

CREATE TABLE "recipe_has_tag" (
   "id" INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
   "recipe_id" INTEGER REFERENCES "recipe"("id") NOT NULL,
   "tag_id" INTEGER REFERENCES "tag"("id") NOT NULL,
   "createdAt" TIMESTAMPTZ NOT NULL DEFAULT NOW(),
   "updatedAt" TIMESTAMPTZ
);

COMMIT;