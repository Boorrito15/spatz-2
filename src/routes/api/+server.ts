import type { RequestHandler } from '@sveltejs/kit';

export const GET: RequestHandler = async () => {
    return new Response(JSON.stringify({ 
			app: 'spatz-2',
			version: '0.0.7',
			message: 'Hello World' 
		}), {
        headers: {
            'Content-Type': 'application/json'
        }
    });
};
