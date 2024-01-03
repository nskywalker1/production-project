import { selectByTestId } from '../helpers/selectByTestId';

describe('Routing', () => {
    describe('User  non authorization', () => {
        it('Open main page', () => {
            cy.visit('/');
            cy.get('[data-testid=MainPage]').should('exist');
        });
        it('Navigates to the profile page', () => {
            cy.visit('/profile/1');
            cy.get('[data-testid=MainPage]').should('exist');
        });
        it('Transition opens to a non-existent route', () => {
            cy.visit('/asdadsads');
            cy.get('[data-testid=NotFoundPage]').should('exist');
        });
    });
    describe('User authorization', () => {
        beforeEach(() => {
            cy.login('testuser', '123');
        });
        it('Open profile page', () => {
            cy.visit('/profile/1');
            cy.get(selectByTestId('ProfilePage')).should('exist');
        });
        it('Open articles page', () => {
            cy.visit('/articles');
            cy.get(selectByTestId('ArticlesPage')).should('exist');
        });
    });
});
