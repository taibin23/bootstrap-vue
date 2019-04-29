import Vue, { PluginFunction, PluginObject } from 'vue'

import { BModalComponent } from './components/modal'
import { BToastComponent } from './components/toast'
import { BToasterComponent } from './components/toaster'

export interface ComponentOptions {
  [key: string]?: any
}

export interface InstallOptions {
  breakpoints?: string[]
  [key: string]?: ComponentOptions
}

export function install (vue: typeof Vue, options: InstallOptions): void

// TypeScrip cannot merge imported class with namespace, so declare subclasses instead

export class BModal extends BModalComponent {}
export class BToast extends BToastComponent {}
export class BToaster extends BToasterComponent {}
