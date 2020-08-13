
export class FormTemplateModel {
    Name: string;
    BuilderLayout: BuilderLayoutModel = new BuilderLayoutModel();
}

export class BuilderLayoutModel {
    PageOrder: number;
    Id: string;
    Name: string;
    Fields: FieldsModel[] = [];
}


export class FieldsModel {
    Id: any;
    FieldOrder: number;
    Title: string;
    Type: string;
    Required: boolean;
    ValueOptions?: ValueOptionsModel[] = [];
}

export class ValueOptionsModel {
    Label: string;
    Value: string;
}