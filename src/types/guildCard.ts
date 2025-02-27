export type platformType = 'steam' | 'ps' | 'xbox';

export type weaponType =
  | '대검'
  | '태도'
  | '한손검'
  | '쌍검'
  | '해머'
  | '수렵피리'
  | '랜스'
  | '건랜스'
  | '차지 액스'
  | '슬래시 액스'
  | '조충곤'
  | '라이트 보우건'
  | '헤비 보우건'
  | '활';

export interface GuildCardType {
  isAgree: boolean;
  nickname: string;
  platform: platformType;
  mainWeapon: weaponType;
  subWeapon: weaponType[];
  id?: string;
}
