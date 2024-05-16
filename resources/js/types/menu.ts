export interface IMenu {
    title?: string;
    roles?: string;
    to?: string;
    icon?: string;
    section?: string;
    children?: IMenu[];
}

export type SidebarProps<
    T extends Record<string, unknown> = Record<string, unknown>
> = T & {
    menus: IMenu[];
    hidden?: boolean;
};
