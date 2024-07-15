import { Injectable } from "@angular/core";
import { cpuUsage } from "process";

@Injectable({
  providedIn: "root"
})

export class CpuService {
  private cpuData: any = { cpuUsage: 0, processes: [] };

  constructor() {
    this.startMonitoring();
  }

  private startMonitoring() {
    setInterval(() => {
      this.cpuData.cpuUsage = Math.random() * 100; //Esta função simula o uso de CPU
      this.cpuData.processes = this.getProcesses(); //Esta função simula os processos
    }, 2000);
  }

  private getProcesses(): any[] {
    return [
      { name: "Processo A", cpuUsage: 20 },
      { name: "Processo B", cpuUsage: 15 },
      { name: "Processo C", cpuUsage: 30 }
    ];
  }

  getCpuData() {
    return this.cpuData;
  }
}