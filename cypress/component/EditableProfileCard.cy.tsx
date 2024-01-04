import { EditableProfileCard } from '../../src/features/editableProfileCard/ui/EditableProfileCard/EditableProfileCard';
import { TestProvider } from '../../src/shared/lib/tests/componentRender/ComponentRender';

const USER_ID = '1';

describe('EditableProfileCard.cy.ts', () => {
    it('playground', () => {
        cy.intercept('GET', '**/profile/*', { fixture: 'profile.json' });
        cy.mount(
            <TestProvider options={{
                initialState: {
                    user: {
                        authData: {
                            id: USER_ID,
                        },
                    },
                },
            }}
            >
                <EditableProfileCard id={USER_ID} />
            </TestProvider>,
        );
    });
});
