export interface Credentials {
    username: string;
    key: string;
}

export interface BlizzAuthToken {
    access_token: string;
    token_type: string;
    expires_in: number;
}

export enum DResourceType {
    skill = 'skills',
    item = 'items',
    portrait = 'portraits'
}

export enum DResourceSize {
    small = '21',
    medium = '42',
    large = '64'
}
