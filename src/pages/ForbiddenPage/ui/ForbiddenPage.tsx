import React from 'react';
import { useTranslation } from 'react-i18next';
import { Page } from '@/widgets/Page';

export const ForbiddenPage = () => {
    const { t } = useTranslation('about');

    return (
        <Page>
            {t('У вас немає доступу до цієї сторінки')}
        </Page>
    );
};
