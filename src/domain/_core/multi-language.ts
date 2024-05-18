export interface MultiLanguage {
    [Language.Uzbek]: string;
    [Language.Russian]: string;
    [Language.English]: string;
}

export enum Language {
    Russian = 'ru',
    English = 'en',
    Uzbek = 'uz',
}
