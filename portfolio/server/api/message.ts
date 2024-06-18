export default defineEventHandler(async (event) => {
  const body = await readFormData(event);
    return {
      email: body.get('email'),
      message: body.get('message')
    }
})