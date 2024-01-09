import { memo } from "react";
import { useParams } from "react-router-dom";
import { classNames } from "@/shared/lib/classNames/classNames";
import { Page } from "@/widgets/Page";
import { VStack } from "@/shared/ui/deprecated/Stack";
import { EditableProfileCard } from "@/features/editableProfileCard";

interface ProfilePageProps {
    className?: string;
}

const ProfilePage = (props: ProfilePageProps) => {
    const { id } = useParams<{ id: string }>();
    const { className } = props;

    return (
        <Page
            data-testid="ProfilePage"
            className={classNames("", {}, [className])}
        >
            <VStack gap="16" max>
                <EditableProfileCard id={id} />
            </VStack>
        </Page>
    );
};

export default memo(ProfilePage);
