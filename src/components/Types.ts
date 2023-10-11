export enum Size {
  'XS' = 'XS',
  'SM' = 'SM',
  'MD' = 'MD',
  'LG' = 'LG'
}

export enum AlertTypes {
  DEFAULT = 'DEFAULT',
  INFO = 'INFO',
  SUCCESS = 'SUCCESS',
  WARNING = 'WARNING',
  ERROR = 'ERROR'
}

export enum THEMES {
  LIGHT = 'light',
  DARK = 'dark'
}

export enum AccordionTypes {
  SINGLE = 'single',
  MULTIPLE = 'multiple'
}

export interface ColumnDef {
  name: string;
  title: string;
  className?: string;
  component?: JSX.Element;
}
