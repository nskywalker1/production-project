import React, { memo, useState } from "react";
import { classNames } from "@/shared/lib/classNames/classNames";
import cls from "./SidebarRedesigned.module.scss";
import { AppLogo } from "@/shared/ui/AppLogo";

interface SidebarRedesignedProps {
    className?: string;
}

export const SidebarRedesigned = memo((props: SidebarRedesignedProps) => {
    const { className } = props;
    const [collapsed, setCollapsed] = useState(false);

    return (
        <aside
            data-testid="sidebar"
            className={classNames(
                cls.SidebarRedesigned,
                { [cls.collapsed]: collapsed },
                [className],
            )}
        >
            <AppLogo className={cls.appLogo} />
        </aside>
    );
});
