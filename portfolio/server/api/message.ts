import { contact } from "~/schema";
import { db } from "../utils/db";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);

  await db.insert(contact).values({
    email: body.get('email'),
    message: body.get('message')
  }).execute();

  return {
    email: body.get('email'),
    message: body.get('message')
  }
})