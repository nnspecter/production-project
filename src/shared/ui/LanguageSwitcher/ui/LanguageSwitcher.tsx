import { classNames } from 'shared/lib/classNames/classNames'
import cls from "./LanguageSwitcher.module.scss"
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button/Button';

interface LanguageSwitcherProps {
  className?: string;
}

export const LanguageSwitcher = ({ className }: LanguageSwitcherProps) => {
    const {i18n} = useTranslation();
    const switchLanguage = () => {
        i18n.changeLanguage(i18n.language === "ru" ? "en" : "ru")
    }
    return (
        <div className={classNames(cls.LanguageSwitcher)}>
            <Button theme='clear' onClick={switchLanguage}>{i18n.language === "ru" ? "RU" : "EN"}</Button>
        </div>
    )
}