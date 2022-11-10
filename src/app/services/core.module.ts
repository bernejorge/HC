import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PersonasService } from './personas.service';
import { MenuService } from './menu.service';
import { SpinnerService } from './spinner.service';

@NgModule({
    imports: [
        CommonModule
    ],
    exports: [ // components that we want to make available
    ],
    declarations: [ // components for use in THIS module
    ],
    providers: [ // singleton services
        PersonasService,
        MenuService,
        SpinnerService
    ]
})
export class CoreModule { }