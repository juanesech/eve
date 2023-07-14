import type { RequestHandler } from './$types';

export const GET = (() => {
    const random = 2 + Math.random() * 1;

    return new Response(String(random));
}) satisfies RequestHandler;