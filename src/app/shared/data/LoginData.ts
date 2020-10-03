export interface LoginData {
    result: token;
    errorMessage: string;
    paging: string;
    serverTime: string;
}

// tslint:disable-next-line:class-name
export interface token {
    accessToken: string;
    accessTokenExpireTime: string;
    refreshToken: string;
    refreshTokenExpireTime: string;
}


// tslint:disable-next-line:class-name
export interface reqLoginBody {
    countryId: string;
    username: string;
    password: string;
    expiresInMinute: number;
}
