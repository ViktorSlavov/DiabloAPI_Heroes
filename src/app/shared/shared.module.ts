import { NgModule } from '@angular/core';
import { IgxButtonModule, IgxAvatarModule, IgxIconModule, IgxCardModule, IgxExpansionPanelModule } from 'igniteui-angular';

@NgModule({
    imports: [IgxButtonModule, IgxAvatarModule, IgxIconModule, IgxCardModule, IgxExpansionPanelModule],
    exports: [IgxButtonModule, IgxAvatarModule, IgxIconModule, IgxCardModule, IgxExpansionPanelModule]
})
/**
 * Defines all of the Igx modules used in the project
 */
export class IgniteUIModule {
}
