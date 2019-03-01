import { DResourceType, DResourceSize } from './common';
import { Pipe, PipeTransform } from '@angular/core';

const mediaUrl = `http://media.blizzard.com/d3/icons/`;
@Pipe({
    name: 'D3Media'
})
export class D3MediaPipe implements PipeTransform {
    transform(resource: string, type: DResourceType, size: DResourceSize) {
        return `${mediaUrl}${type}/${size}/${resource}.png`;
    }
}
