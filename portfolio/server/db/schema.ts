import { sqliteTable, text, integer } from 'drizzle-orm/sqlite-core'

export const messages = sqliteTable('messages', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  name: text('name').notNull(),
  email: text('email').notNull().unique(),
})