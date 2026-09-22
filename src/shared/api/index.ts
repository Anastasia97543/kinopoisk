import { getTmdbApi } from "./generated/endpoints";
import { api } from "./instance";

export { api } from "./instance";
export * from "./generated/model";
export const requests = getTmdbApi(api);
