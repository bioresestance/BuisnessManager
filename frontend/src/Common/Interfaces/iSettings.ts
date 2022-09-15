

export type SettingsGroupItem = {
    key: string;
    value: string | number | boolean;
    common_name: string;
    type: string;
};

export interface ISettingsGroup {
    index: number;
    name: string;
    items: SettingsGroupItem[];
}
