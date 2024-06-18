import { sql } from "drizzle-orm";
import { text, integer, sqliteTable } from "drizzle-orm/sqlite-core";

export const contact = sqliteTable('contact', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  message: text('message').notNull(),
  email: text('email').notNull(),
})