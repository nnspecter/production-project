type Mods = Record<string, boolean | string | undefined>

export const classNames = (
  cls: string,
  mods: Mods = {},
  additional: (string | undefined)[] = []
): string => {
  return [
    cls,
    ...additional.filter(Boolean) as string[],
    ...Object.entries(mods)
      .filter(([_, value]) => Boolean(value))
      .map(([className]) => className)
  ].join(' ')
}