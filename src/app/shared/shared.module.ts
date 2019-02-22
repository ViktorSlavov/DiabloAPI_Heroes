import { NgModule } from '@angular/core';
import { IgxButtonModule, IgxAvatarModule, IgxIconModule, IgxCardModule } from 'igniteui-angular';

@NgModule({
    imports: [IgxButtonModule, IgxAvatarModule, IgxIconModule, IgxCardModule],
    exports: [IgxButtonModule, IgxAvatarModule, IgxIconModule, IgxCardModule]
})
/**
 * Defines all of the Igx modules used in the project
 */
export class IgniteUIModule {
}
