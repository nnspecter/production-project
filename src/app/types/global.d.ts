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

// картинки
declare module '*.png' {
  const src: string;
  export default src;
}

declare module '*.jpg' {
  const src: string;
  export default src;
}

declare module '*.jpeg' {
  const src: string;
  export default src;
}

// svg (два варианта — как строка и как React-компонент)
declare module '*.svg' {
  import * as React from 'react';

  export const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
  const src: string;
  export default src;
}

declare const __IS_DEV__: boolean;
