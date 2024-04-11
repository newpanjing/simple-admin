interface MenuType {
    id: number,
    text: string,
    icon: any,
    link: string,
    children: MenuType[]
}

export type {
    MenuType
}
