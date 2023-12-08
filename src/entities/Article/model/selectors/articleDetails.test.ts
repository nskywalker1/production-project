import { StateSchema } from 'app/providers/StoreProvider';
import { getArticleDetailsError, getArticleDetailsIsLoading, getArticleDetailsData } from './articleDetails';

describe('articleDetails.test', () => {
    test('should return data', () => {
        const data = {
            id: '1',
            title: 'subtitle',
        };
        const state: DeepPartial<StateSchema> = {
            articleDetails: {
                data,
            },
        };
        expect(getArticleDetailsData(state as StateSchema)).toEqual(data);
    });
    test('should return isLoading', () => {
        const state: DeepPartial<StateSchema> = {
            articleDetails: {
                isLoading: true,
            },
        };
        expect(getArticleDetailsIsLoading(state as StateSchema)).toEqual(true);
    });
    test('should return with empty isLoading', () => {
        const state: DeepPartial<StateSchema> = {
            articleDetails: {
                isLoading: undefined,
            },
        };
        expect(getArticleDetailsIsLoading(state as StateSchema)).toEqual(false);
    });
    test('should return with error', () => {
        const state: DeepPartial<StateSchema> = {
            articleDetails: {
                error: 'error',
            },
        };
        expect(getArticleDetailsError(state as StateSchema)).toEqual('error');
    });
    test('should return with empty error', () => {
        const state: DeepPartial<StateSchema> = {
            articleDetails: {
                error: undefined,
            },
        };
        expect(getArticleDetailsError(state as StateSchema)).toEqual(undefined);
    });
});
