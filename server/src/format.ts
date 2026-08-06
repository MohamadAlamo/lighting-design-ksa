import type { InstallSurvey } from './contract.js';

const VOLT: Record<string, string> = { '110': '١١٠ فولت', '220': '٢٢٠ فولت' };
const YESNO: Record<string, string> = { yes: 'نعم', no: 'لا' };
const SWITCH: Record<string, string> = {
  normal: 'مفتاح عادي (تشغيل / إيقاف)',
  dimmer: 'مفتاح ديمر',
  smart: 'نظام منزل ذكي',
};
const CEILING: Record<string, string> = {
  gypsum: 'جبس بورد',
  concrete: 'خرسانة (أسمنت)',
  wood: 'خشب',
  other: 'أخرى',
};

function esc(value: string): string {
  return value.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

function row(label: string, value?: string): string {
  if (!value) return '';
  return `<b>${label}:</b> ${esc(value)}\n`;
}

export function formatInstallReport(
  survey: InstallSurvey,
  meta: { reference: string; salesperson?: string },
): string {
  const ceiling =
    survey.ceiling === 'other' && survey.ceilingOther
      ? `${CEILING.other} — ${survey.ceilingOther}`
      : CEILING[survey.ceiling];

  const switchLine =
    survey.switchKind === 'smart' && survey.smartSystem
      ? `${SWITCH.smart} — ${survey.smartSystem}`
      : survey.switchKind === 'dimmer' && survey.dimmerType
        ? `${SWITCH.dimmer} — ${survey.dimmerType}`
        : SWITCH[survey.switchKind];

  return (
    `🔧 <b>نموذج التحقق من موقع التركيب</b>\n` +
    `<code>${meta.reference}</code>\n` +
    // From the token, not the customer — whoever minted the link owns this lead.
    `👤 <b>المندوب:</b> ${esc(meta.salesperson ?? '—')}\n` +
    `━━━━━━━━━━━━━━\n` +
    `<b>العميل</b>\n` +
    row('الإسم', survey.fullName) +
    row('الجوال', survey.phone) +
    row('الفاتورة / الطلب', survey.invoice) +
    row('المدينة', survey.city) +
    row('الموقع', survey.mapUrl) +
    `━━━━━━━━━━━━━━\n` +
    `<b>الكهرباء</b>\n` +
    row('نوع الكهرباء', VOLT[survey.volt]) +
    row('نقطة كهرباء جاهزة', YESNO[survey.powerPoint]) +
    row('المفتاح', switchLine) +
    `━━━━━━━━━━━━━━\n` +
    `<b>السقف والموقع</b>\n` +
    row('نوع السقف', ceiling) +
    row('ارتفاع السقف', survey.ceilingHeight) +
    row('أعمال تشطيب قائمة', YESNO[survey.finishingWorks]) +
    row('يوجد عائق', YESNO[survey.obstacle]) +
    row('يحتاج سلم / معدات', YESNO[survey.ladderNeeded]) +
    `━━━━━━━━━━━━━━\n` +
    row('ملاحظات', survey.notes || '—') +
    `\n✅ أقر العميل بصحة المعلومات`
  );
}

export const PHOTO_CAPTIONS: Record<string, string> = {
  placePhoto: '📷 صورة كاملة لمكان التركيب',
  ceilingPhoto: '📷 صورة السقف',
  powerPhoto: '📷 صورة نقطة الكهرباء',
};

/**
 * The Arabic install form posts a JSON blob of already-localised label/value
 * pairs. Report it as-is so the live form keeps working unchanged.
 */
export function formatLegacyReport(
  data: Record<string, string>,
  meta: { reference: string; salesperson?: string },
): string {
  const LABELS: Record<string, string> = {
    name: 'الإسم',
    phone: 'الجوال',
    invoice: 'الفاتورة / الطلب',
    city: 'المدينة',
    map: 'الموقع',
    volt: 'نوع الكهرباء',
    point: 'نقطة كهرباء جاهزة',
    switch: 'المفتاح',
    dimmer: 'نوع الديمر',
    smartSys: 'نظام المنزل الذكي',
    ceiling: 'نوع السقف',
    height: 'ارتفاع السقف',
    finishing: 'أعمال تشطيب قائمة',
    obstacle: 'يوجد عائق',
    ladder: 'يحتاج سلم / معدات',
    notes: 'ملاحظات',
  };

  const lines = Object.entries(LABELS)
    .map(([key, label]) => row(label, data[key]))
    .join('');

  return (
    `🔧 <b>نموذج التحقق من موقع التركيب</b>\n` +
    `<code>${meta.reference}</code>\n` +
    // From the token, not the customer — whoever minted the link owns this lead.
    `👤 <b>المندوب:</b> ${esc(meta.salesperson ?? '—')}\n` +
    `━━━━━━━━━━━━━━\n` +
    lines +
    `\n✅ أقر العميل بصحة المعلومات`
  );
}
