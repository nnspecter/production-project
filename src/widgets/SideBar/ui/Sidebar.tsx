import { classNames } from 'shared/lib/classNames/classNames'
import cls from "./Sidebar.module.scss"
import { useState } from 'react';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';

interface SidebarProps {
  className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => {
    const [collapsed, setCollapsed] = useState<boolean>(false);

    const handleClick = () => {
        setCollapsed(prev => !prev)
    }
  return (
    <div className={classNames(cls.Sidebar, {[cls.collapsed]: collapsed}, [className])}>
      <button onClick={handleClick}>toggle</button>
      <div className={classNames(cls.switchers)}>
        <ThemeSwitcher/>
      </div>
    </div>
  )
}