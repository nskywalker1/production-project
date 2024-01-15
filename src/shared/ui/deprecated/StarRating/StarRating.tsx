import { memo, useState } from "react";
import { classNames } from "@/shared/lib/classNames/classNames";
import cls from "./StarRating.module.scss";
import StarIcon from "@/shared/assets/icons/star.svg";
import { Icon } from "../../redesigned/Icon";
import { Icon as IconDeprecated } from "../Icon/Icon";
import { toggleFeatures, ToggleFeatures } from "@/shared/features";

interface StarRatingProps {
    className?: string;
    onSelect?: (starCount: number) => void;
    size?: number;
    selectedStars?: number;
}

const stars = [1, 2, 3, 4, 5];

export const StarRating = memo((props: StarRatingProps) => {
    const { className, selectedStars = 0, onSelect, size = 30 } = props;
    const [isHovered, setIsHovered] = useState(false);
    const [currentStarsCount, setCurrentStarsCount] = useState(
        selectedStars || 0,
    );
    const [isSelected, setIsSelected] = useState(Boolean(selectedStars));

    const onHover = (starsCount: number) => () => {
        if (!isSelected) {
            setCurrentStarsCount(starsCount);
        }
    };

    const onLeave = () => () => {
        if (!isSelected) {
            setCurrentStarsCount(0);
        }
    };

    const onClick = (starsCount: number) => () => {
        if (!isSelected) {
            onSelect?.(starsCount);
            setCurrentStarsCount(starsCount);
            setIsSelected(true);
        }
    };

    return (
        <div
            className={classNames(
                toggleFeatures({
                    name: "isAppRedesigned",
                    off: () => cls.StarRating,
                    on: () => cls.StarRatingRedesigned,
                }),
                {},
                [className],
            )}
        >
            {stars.map((starNumber) => {
                const commonProps = {
                    className: classNames(
                        cls.starIcon,
                        { [cls.selected]: isSelected },
                        [
                            currentStarsCount >= starNumber
                                ? cls.hovered
                                : cls.normal,
                        ],
                    ),
                    Svg: StarIcon,
                    width: size,
                    height: size,
                    onClick: onClick(starNumber),
                    key: starNumber,
                    onMouseLeave: onLeave,
                    onMouseEnter: onHover(starNumber),
                    "data-testid": `StarRating.${starNumber}`,
                    "data-selected": currentStarsCount >= starNumber,
                };
                return (
                    <ToggleFeatures
                        feature="isAppRedesigned"
                        on={<Icon clickable {...commonProps} />}
                        off={<IconDeprecated {...commonProps} />}
                    />
                );
            })}
        </div>
    );
});
