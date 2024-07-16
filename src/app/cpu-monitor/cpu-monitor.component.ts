import { Component, OnInit } from '@angular/core';
import { CpuService } from '../cpu.service';
import { cpuUsage } from 'process';

@Component({
  selector: 'app-cpu-monitor',
  templateUrl: './cpu-monitor.component.html',
  styleUrl: './cpu-monitor.component.css',
})
export class CpuMonitorComponent implements OnInit {
  cpuData: any = { cpuUsage: 0, processes: [] };

  constructor(private cpuService: CpuService) {}

  ngOnInit(): void {
      this.cpuData = this.cpuService.getCpuData();
      setInterval(() => {
        this.cpuData = this.cpuService.getCpuData();
      }, 2000);
  }

}
