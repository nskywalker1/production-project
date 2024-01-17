import { useTranslation } from "react-i18next";
import { memo } from "react";
import { MainLayout } from "../MainLayout";
import { Skeleton } from "@/shared/ui/redesigned/Skeleton";
import { HStack, VStack } from "@/shared/ui/redesigned/Stack";

export const AppLoaderLayout = memo(() => {
    const { t } = useTranslation();

    return (
        <MainLayout
            header={
                <HStack>
                    <Skeleton width={40} height={40} border="50%" />
                </HStack>
            }
            content={
                <VStack gap="16" style={{ height: "100%" }}>
                    <Skeleton width="70%" height={32} border="16px" />
                    <Skeleton width="40%" height={20} border="16px" />
                    <Skeleton width="50%" height={20} border="16px" />
                    <Skeleton width="30%" height={32} border="16px" />
                    <Skeleton width="80%" height="40%" border="16px" />
                    <Skeleton width="80%" height="40%" border="16px" />
                </VStack>
            }
            sidebar={<Skeleton border="32px" width={220} height="100%" />}
        />
    );
});
