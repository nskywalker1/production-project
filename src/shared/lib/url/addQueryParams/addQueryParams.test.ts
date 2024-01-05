import { getQueryParams } from "./addQueryParams";

describe("addQueryParams.test.ts", () => {
    test("test with one param", () => {
        const params = getQueryParams({
            test: "value",
        });
        expect(params).toBe("?test=value");
    });
    test("test with more param", () => {
        const params = getQueryParams({
            test: "value",
            second: "2",
        });
        expect(params).toBe("?test=value&second=2");
    });
    test("test with undefined", () => {
        const params = getQueryParams({
            test: "value",
            second: undefined,
        });
        expect(params).toBe("?test=value");
    });
});
