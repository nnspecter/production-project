import { classNames } from 'shared/lib/classNames/classNames'
import cls from "./Navbar.module.scss"
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';

interface NavbarProps{
    className?: string;
}
export const Navbar = ({className}: NavbarProps) => {
  return (
    <div className={classNames(cls.Navbar)}>
      <ThemeSwitcher/>
      <div className={classNames(cls.links)}>
          <AppLink theme="inverted" to="/" className={classNames(cls.link)}>Главная</AppLink>
          <AppLink theme="primary" to="/about" className={classNames(cls.link)}>О сайте</AppLink>
      </div>
    </div>
  )
}
