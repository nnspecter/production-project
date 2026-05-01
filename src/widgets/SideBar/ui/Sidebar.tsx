import { classNames } from 'shared/lib/classNames/classNames';
import { useState } from 'react';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';
import { Button } from 'shared/ui/Button/Button';
import cls from './Sidebar.module.scss';
import { useTranslation } from 'react-i18next';

interface SidebarProps {
  className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => {
    const [collapsed, setCollapsed] = useState<boolean>(false);
    const {t} = useTranslation();

    const handleClick = () => {
        setCollapsed((prev) => !prev);
    };
    return (
        <div
            data-testid="sidebar" 
            className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className])}>
            <Button
                data-testid="sidebar-toggle" 
                onClick={handleClick}
                >
                    {t("Передвинуть")}
            </Button>
            <div className={classNames(cls.switchers)}>
                <ThemeSwitcher />
            </div>
        </div>
    );
};
