import { Injectable } from '@angular/core';
import { DResourceType, DResourceSize } from './common';

@Injectable()
export class BlizzardMediaAPIService {
    constructor() {}
    mediaUrl = `http://media.blizzard.com/d3/icons/`;

    public getUrl(resource: string, type: DResourceType, size: DResourceSize) {
        return `${this.mediaUrl}${type}/${size}/${resource}.png`;
    }
}
