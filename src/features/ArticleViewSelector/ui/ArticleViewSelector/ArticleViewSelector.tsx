import { useTranslation } from "react-i18next";
import ListIconDeprecated from "@/shared/assets/icons/list-24-24.svg";
import ListIcon from "@/shared/assets/icons/burger.svg";
import TiledIcon from "@/shared/assets/icons/tile.svg";
import TiledIconDeprecated from "@/shared/assets/icons/tiled-24-24.svg";

import { ArticleView } from "@/entities/Article";
import { ToggleFeatures, toggleFeatures } from "@/shared/features";
import { classNames } from "@/shared/lib/classNames/classNames";
import {
    Button as ButtonDeprecated,
    ButtonTheme,
} from "@/shared/ui/deprecated/Button";
import { Icon as IconDeprecated } from "@/shared/ui/deprecated/Icon";
import { Icon } from "@/shared/ui/redesigned/Icon";
import cls from "./ArticleViewSelector.module.scss";
import { Card } from "@/shared/ui/redesigned/Card";
import { HStack } from "@/shared/ui/redesigned/Stack";

interface ArticleViewSelectorProps {
    className?: string;
    view: ArticleView;
    onViewClick?: (view: ArticleView) => void;
}

const viewTypes = [
    {
        view: ArticleView.SMALL,
        icon: toggleFeatures({
            name: "isAppRedesigned",
            off: () => TiledIconDeprecated,
            on: () => TiledIcon,
        }),
    },
    {
        view: ArticleView.BIG,
        icon: toggleFeatures({
            name: "isAppRedesigned",
            off: () => ListIconDeprecated,
            on: () => ListIcon,
        }),
    },
];

export const ArticleViewSelector = (props: ArticleViewSelectorProps) => {
    const { className, onViewClick, view } = props;
    const { t } = useTranslation();

    const onClick = (newView: ArticleView) => () => {
        onViewClick?.(newView);
    };

    return (
        <ToggleFeatures
            feature="isAppRedesigned"
            on={
                <Card
                    border="round"
                    className={classNames(
                        cls.ArticleViewSelectorRedesigned,
                        {},
                        [className],
                    )}
                >
                    <HStack gap="8">
                        {viewTypes.map((viewType) => (
                            <Icon
                                key={viewType.view}
                                clickable
                                onClick={onClick(viewType.view)}
                                className={classNames("", {
                                    [cls.notSelected]: viewType.view === view,
                                })}
                                Svg={viewType.icon}
                            />
                        ))}
                    </HStack>
                </Card>
            }
            off={
                <div
                    className={classNames(cls.ArticleViewSelector, {}, [
                        className,
                    ])}
                >
                    {viewTypes.map((viewType) => (
                        <ButtonDeprecated
                            key={viewType.view}
                            theme={ButtonTheme.CLEAR}
                            onClick={onClick(viewType.view)}
                        >
                            <IconDeprecated
                                width={24}
                                height={24}
                                className={classNames("", {
                                    [cls.notSelected]: viewType.view !== view,
                                })}
                                Svg={viewType.icon}
                            />
                        </ButtonDeprecated>
                    ))}
                </div>
            }
        />
    );
};
