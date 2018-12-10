export const config: any = {
  pageSizes: [8, 16, 24],
  pageSizesDialog: [4, 8, 12],
  roles: [
    { name: 'CUSTOMER', permission: 0 },
    { name: 'WAITER', permission: 1 },
  ],
  langs: [
    { label: 'English', value: 'en', flag: 'gb' },
    {
      label: 'Deutsch',
      value: 'de',
      flag: 'de',
    },
    {
      label: 'Español',
      value: 'es',
      flag: 'es',
    },
    { label: 'Català', value: 'ca', flag: 'es' },
    { label: 'Français', value: 'fr', flag: 'fr' },
    { label: 'Nederlands', value: 'nl', flag: 'nl' },
    { label: 'हिन्दी', value: 'hi', flag: 'in' },
    { label: 'Polski', value: 'pl', flag: 'pl' },
    { label: 'Русский', value: 'ru', flag: 'ru' },
    { label: 'български', value: 'bg', flag: 'bg' },
  ],
};

export enum BackendType {
  IN_MEMORY,
  REST,
  GRAPHQL,
}
