import { fireEvent, screen } from '@testing-library/react';
import { ComponentRender } from 'shared/lib/tests/componentRender/ComponentRender';
import { Sidebar } from './Sidebar';

describe('Sidebar.test.tsx', () => {
    test('test', () => {
        ComponentRender(<Sidebar />);
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    });
    test('test', () => {
        ComponentRender(<Sidebar />);
        const toggleBtn = screen.getByTestId('sidebar-toggle');
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
        fireEvent.click(toggleBtn);
        expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
    });
});
