import { contact } from "~/schema";
import { db } from "../utils/db";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);

  await db.insert(contact).values({
    email: body.email,
    message: body.message
  }).execute();
})