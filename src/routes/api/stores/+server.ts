import type { RequestHandler } from './$types';
import { Store } from '../../../db/models/store';
import { Client } from '../../../db/client';
import type { IStore } from '../../../db/models/store';
import { stores } from '../../store';


export const GET = (async() => {
    await Client();
    const stores:IStore[] = await Store.find();
    console.log("STORES RESPONSE: ", stores);

    return new Response(String({stores}));
}) satisfies RequestHandler;
