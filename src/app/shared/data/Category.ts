export interface Category {
    result: result[];
    errorMessage: string;
    paging: string;
    serverTime: string;
}

// tslint:disable-next-line: class-name
export interface result {
    id: number;
    title: string;
    subCategories?: subCategories[];
}

// tslint:disable-next-line:class-name
export interface subCategories {
    id: number;
    title: string;
}
