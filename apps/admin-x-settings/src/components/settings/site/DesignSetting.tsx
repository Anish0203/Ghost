import React from 'react';
import TopLevelGroup from '../../TopLevelGroup';
import useRouting from '../../../hooks/useRouting';
import {Button, withErrorBoundary} from '@tryghost/admin-x-design-system';

const DesignSetting: React.FC<{ keywords: string[] }> = ({keywords}) => {
    const {updateRoute} = useRouting();
    const openPreviewModal = () => {
        updateRoute('design/edit');
    };

    return (
        <TopLevelGroup
            customButtons={<Button color='green' label='Customize' link linkWithPadding onClick={openPreviewModal}/>}
            description="Customize the theme, colors, and layout of your site"
            keywords={keywords}
            navid='design'
            testId='design'
            title="Design & branding"
        />
    );
};

export default withErrorBoundary(DesignSetting, 'Branding and design');
