import React, { memo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Page } from 'widgets/Page/Page';
import { NotificationButton } from 'features/notificationButton';

const MainPage = () => {
    const { t } = useTranslation();
    const [value, setValue] = useState('');

    const onChange = (val: string) => {
        setValue(val);
    };

    return (
        <Page>
            {t('Головна сторінка')}
        </Page>
    );
};

export default memo(MainPage);
