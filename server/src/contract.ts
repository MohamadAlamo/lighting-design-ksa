// Single source of truth for the request/response contract.
// The frontend imports this file through its "@shared" alias.

export type Volt = '110' | '220';
export type SwitchKind = 'normal' | 'dimmer' | 'smart';
export type CeilingKind = 'gypsum' | 'concrete' | 'wood' | 'other';
export type YesNo = 'yes' | 'no';

export interface InstallSurvey {
  token: string;
  fullName: string;
  phone: string;
  invoice: string;
  city: string;
  mapUrl: string;
  volt: Volt;
  powerPoint: YesNo;
  switchKind: SwitchKind;
  smartSystem?: string;
  dimmerType?: string;
  ceiling: CeilingKind;
  ceilingOther?: string;
  ceilingHeight: string;
  finishingWorks: YesNo;
  obstacle: YesNo;
  ladderNeeded: YesNo;
  notes: string;
  confirmed: true;
}

export interface SubmitResponse {
  ok: boolean;
  reference?: string;
  error?: string;
  /** Duplicate of `error`, read by the Arabic form. */
  msg?: string;
  /** True when the link was already consumed. */
  used?: boolean;
}

export interface TokenStatus {
  valid: boolean;
  used: boolean;
  salesperson?: string;
}
