export interface CountryCode {
    result: Code[];
    errorMessage: string;
    paging: string;
    serverTime: string;
}

export interface Code {
    id: string;
    name: string;
    phoneCode: string;
    countryCode: string;
}
