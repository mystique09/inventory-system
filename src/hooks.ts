import type { GetSession, RequestEvent } from "@sveltejs/kit";

/** @type {import('@sveltejs/kit').Handle}*/
export async function handle({ event, resolve }) {
  event.locals.user = event.request.headers.get('cookie');

  const response = await resolve(event);
  response.headers.set('Visited', 'bruhh');

  return response;
}

/** @type {import('@sveltejs/kit').GetSession}*/
export function getSession(event) {
  return event.locals.user
    ? {
      user: {
        username: event.locals.user.username,
        email: event.locals.user.email,
        role: event.locals.user.role
      }
    }
    : {};
}
