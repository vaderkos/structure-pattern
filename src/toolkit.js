export const forEachObject = consumer => object => {
    const objectKeys = Object.keys(object);
    const objectLength = objectKeys.length;

    for (let i = 0; i < objectLength; i++) {
        const key = objectKeys[i];
        consumer(key, object[key]);
    }
};

export const mapObject = mapper => object => {
    const objectKeys = Object.keys(object);
    const objectLength = objectKeys.length;
    const mappedObject = {};

    for (let i = 0; i < objectLength; i++) {
        const key = objectKeys[i];
        const [newKey, newValue] = mapper(key, object[key]);

        if (typeof newKey !== 'undefined') {
            mappedObject[newKey] = newValue;
        }
    }

    return mappedObject;
};

export const emptyObj = () => ({});

export const { keys } = Object;
