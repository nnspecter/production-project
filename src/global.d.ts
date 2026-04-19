// Source - https://stackoverflow.com/a/44228423
// Posted by Jurosh, modified by community. See post 'Timeline' for change history
// Retrieved 2026-04-19, License - CC BY-SA 3.0

declare module '*.scss' {
  interface IClassNames {
    [className: string]: string
  }
  const classNames: IClassNames;
  export = classNames;
}
