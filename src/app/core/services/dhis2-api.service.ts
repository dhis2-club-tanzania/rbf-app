import { Injectable } from '@angular/core';
import d2, { init, getInstance } from 'd2';

@Injectable({ providedIn: 'root' })
export class Dhis2ApiService {
  constructor() {}

  async initialize() {
    init();
  }

  getD2Instance() {
    return getInstance();
  }
}
