

export type SettingsGroupItem = {
    key: string;
    value: string | number | boolean;
    common_name: string;
    type: string;
};

export interface ISettingsGroup {
    name: string;
    items: SettingsGroupItem[];
}
