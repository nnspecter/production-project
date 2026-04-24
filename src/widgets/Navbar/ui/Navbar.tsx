import { classNames } from 'shared/lib/classNames/classNames'
import cls from "./Navbar.module.scss"
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';
import { LanguageSwitcher } from 'shared/ui/LanguageSwitcher';
import { useTranslation } from 'react-i18next';

interface NavbarProps{
    className?: string;
}
export const Navbar = ({className}: NavbarProps) => {
  const {t} = useTranslation("main");
  const {t: aboutT} = useTranslation("about");
  return (
    <div className={classNames(cls.Navbar)}>
      <LanguageSwitcher/>
      <div className={classNames(cls.links)}>
          <AppLink theme="inverted" to="/" className={classNames(cls.link)}>{t("Главная")}</AppLink>
          <AppLink theme="primary" to="/about" className={classNames(cls.link)}>{aboutT("О сайте")}</AppLink>
      </div>
    </div>
  )
}
