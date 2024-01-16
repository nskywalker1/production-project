import { memo, useMemo, useState } from "react";
import { classNames } from "@/shared/lib/classNames/classNames";
import { LangSwitcher } from "@/features/LangSwitcher";
import { ThemeSwitcher } from "@/features/ThemeSwitcher";
import { Button, ButtonSize, ButtonTheme } from "@/shared/ui/deprecated/Button";
import { VStack } from "@/shared/ui/redesigned/Stack";
import { SidebarItem } from "../SidebarItem/SidebarItem";
import cls from "./Sidebar.module.scss";
import { useSidebarItems } from "../../model/selectors/getSidebarItems";
import { ToggleFeatures } from "@/shared/features";
import { SidebarRedesigned } from "../../../../widgets/Sidebar/ui/SidebarRedesigned/SidebarRedesigned";

interface SidebarProps {
    className?: string;
}

export const Sidebar = memo(({ className }: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false);
    const sidebarItemsList = useSidebarItems();
    const onToggle = () => {
        setCollapsed((prev) => !prev);
    };

    const itemsList = useMemo(
        () =>
            sidebarItemsList.map((item) => (
                <SidebarItem
                    key={item.path}
                    item={item}
                    collapsed={collapsed}
                />
            )),
        [collapsed, sidebarItemsList],
    );

    const sidebarOff = (
        <aside
            data-testid="sidebar"
            className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [
                className,
            ])}
        >
            <Button
                data-testid="sidebar-toggle"
                type="button"
                theme={ButtonTheme.BACKGROUND_INVERTED}
                className={cls.collapseBtn}
                onClick={onToggle}
                square
                size={ButtonSize.L}
            >
                {collapsed ? ">" : "<"}
            </Button>
            <VStack role="navigation" gap="16" className={cls.items}>
                {itemsList}
            </VStack>
            <div className={cls.switchers}>
                <ThemeSwitcher />
                <LangSwitcher short={collapsed} className={cls.lang} />
            </div>
        </aside>
    );

    return (
        <ToggleFeatures
            feature="isAppRedesigned"
            on={<SidebarRedesigned />}
            off={sidebarOff}
        />
    );
});
