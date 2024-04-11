export interface ThemeStates {
    primary: string
    setPrimary: (color: string) => void
}

export interface LocalesStates {
    locale: string
    setLocale: (locale: string) => void
}