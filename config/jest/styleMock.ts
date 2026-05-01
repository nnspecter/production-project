// config/jest/styleMock.ts
export default new Proxy(
    {},
    {
        get: (_target: object, prop: string) => prop,
    }
);