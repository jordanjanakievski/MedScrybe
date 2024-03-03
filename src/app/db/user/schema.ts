import { integer, text, pgTable } from "drizzle-orm/pg-core";

export const todo = pgTable("users", {
  id: integer("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  password: text("password").notNull(),
});