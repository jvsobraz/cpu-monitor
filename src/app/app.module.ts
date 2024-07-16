import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { CpuMonitorComponent } from './cpu-monitor/cpu-monitor.component';
import { CpuService } from './cpu.service';

@NgModule({
  declarations: [
    //AppComponent,
    CpuMonitorComponent
  ],
  imports: [
    BrowserModule,
    CommonModule
  ],
  providers: [CpuService],
  //bootstrap: [AppComponent]
})
export class AppModule { }
