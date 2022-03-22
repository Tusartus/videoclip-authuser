import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabComponent } from './tab/tab.component';
import { ModalComponent } from './modal/modal.component';
import { TabsContainerComponent } from './tabs-container/tabs-container.component';
import { AlertComponent } from './alert/alert.component';
import { InputComponent } from './input/input.component';

//import { NgxMaskModule } from 'ngx-mask';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxMaskModule } from 'ngx-mask';
import {  EventBlockerDirective } from './directives/event-blocker.directive';


@NgModule({
  declarations: [
    TabComponent,
    ModalComponent,
    TabsContainerComponent,
    AlertComponent,
    InputComponent,
    EventBlockerDirective
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NgxMaskModule.forRoot()
  ],
  //manual exports here write
  exports:[

    ModalComponent,
    TabsContainerComponent,
    TabComponent,
    AlertComponent,
    InputComponent,
    EventBlockerDirective
  ],
})

export class SharedModule { }
