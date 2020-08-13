import {ThemeForm, PageFormBuilder} from './structure';

export class FormBuilder {
    name: string;
    description?: string;
    theme: ThemeForm = new ThemeForm();
    page: PageFormBuilder[] =[];
}