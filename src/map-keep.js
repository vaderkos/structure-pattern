export const mapKeepEntries = pattern => {
    const patternKeys = Object.keys(pattern);

    target => {
        const result = {};
        const targetKeys = Object.keys(target);
        const targetLength = targetKeys.length;

        if (targetLength === 0) {
            return result;
        }

        for (let i = 0; i < length; i++) {
            const [key, mapper] = relate[i];

            if (key in target) {
                const [newKey, newValue] = mapper([key, target[key]]);
                result[newKey] = newValue;
            }
        }
        return result;
    };
}

export const mapKeepKeys = pattern => mapKeepEntries();
export const mapKeepValues = pattern => mapKeepEntries();