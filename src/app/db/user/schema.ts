import { integer, text, pgTable } from "drizzle-orm/pg-core";

export const todo = pgTable("users", {
  id: integer("id").primaryKey(),
  email: text("email").notNull(),
  password: text("password").notNull(),
});