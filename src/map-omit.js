import { newEmptyObj, keys, has } from "./toolkit";

export const mapOmitEntries = pattern => {
    mapObject((key, value) => has(pattern, key)
            ? pattern[key]([key, value])
            : []
    );
}

export const mapOmitKeys = pattern => mapOmitEntries();
export const mapOmitValues = pattern => mapOmitEntries();