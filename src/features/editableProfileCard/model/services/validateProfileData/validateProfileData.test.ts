import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { ValidateProfileError } from '../../consts/consts';
import { validateProfileData } from './validateProfileData';

const data = {
    username: 'admin',
    age: 22,
    country: Country.Ukraine,
    currency: Currency.UAH,
    city: 'Kyiv',
    first: 'nazar',
    lastname: 'nazar',
};
describe('validateProfileData.test', () => {
    test('success', async () => {
        const result = validateProfileData(data);

        expect(result).toEqual([]);
    });
    test('without first and lastname', async () => {
        const result = validateProfileData({ ...data, first: '', lastname: '' });
        expect(result).toEqual([
            ValidateProfileError.INCORRECT_USER_DATA,
        ]);
    });
    test('without age', async () => {
        const result = validateProfileData({ ...data, age: undefined });
        expect(result).toEqual([
            ValidateProfileError.INCORRECT_AGE,
        ]);
    });
});
