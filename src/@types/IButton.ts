export interface IButton {
    icone?: string;
    texto: string | number;
    onClick?: (e:any) => void;
}