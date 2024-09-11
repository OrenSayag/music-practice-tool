export const cn = (...classNames: (string | undefined)[])=> classNames.filter(Boolean).join(" ")

export const randomItemFromArray = <T>(arr: T[]) => arr[Math.floor(Math.random() * arr.length)]
