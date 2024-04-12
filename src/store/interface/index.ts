export interface ThemeStates {
    primary: string
    themeLayout:string
    setPrimary: (primary: string) => void
    setThemeLayout: (themeLayout: string) => void
}


export interface LocalesStates {
    locale: string
    setLocale: (locale: string) => void
}

export interface TransitionStates{
    enable: boolean
    setEnable: (enabled: boolean) => void
    type: string
    setType: (type: string) => void
}