import { value } from './value';

export class field {
    _id?: any;
    name?: any;
    type?: any;
    icon?: any;
    toggle?: any;
    required?: any;
    regex?: any;
    errorText?: any;
    label?: any;
    description?: any;
    placeholder?: any;
    className?: any;
    subtype?: any;
    handle?: any;
    min?: number;
    max?: number;
    inline?: any;
    value?: any;
    values?: Array<value>;
}

export class ThemeForm {
    BackgroundColor?: string;
    BannerImg?: string;
    TextColor?:string
}

export class PageFormBuilder {
    PageNumber?: number;
    Name?: string;
    Description?: string;
    Attributes: AttributesForm[] = []
}

export class AttributesForm {
    _id?: any;
    name?: any;
    type?: any;
    icon?: any;
    toggle?: any;
    required?: any;
    regex?: any;
    errorText?: any;
    label?: any;
    description?: any;
    placeholder?: any;
    className?: any;
    subtype?: any;
    handle?: any;
    min?: number;
    max?: number;
    inline?: any;
    value?: any;
    values?: Array<value>;
}