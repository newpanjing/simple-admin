interface MenuType {
    id: number,
    text: string,
    icon: any,
    link: string,
    external: boolean,
    children: MenuType[]
}

export type {
    MenuType
}
