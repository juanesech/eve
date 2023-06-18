import { writable } from "svelte/store";
import type { Store } from "./fauna/model";

export const StoreStore = writable(<Store[]>[]);
