export enum Region {
    US = 'us',
    EU = 'eu',
    KR = 'kr',
    TW = 'tw'
}

export enum Locale {
    EN = 'en_US',
    MX = 'es_MX',
    BR = 'pt_BR',
    DE = 'de_DE',
    ES = 'es_ES',
    FR = 'fr_FR',
    IT = 'it_IT',
    PT = 'pt_PT',
    RU = 'ru_RU',
    KR = 'ko_KR',
    TW = 'zh_TW',
    CN = 'zh_CN',
}

export const DClasses: DClassRef[] = [
    { name: 'Barbarian', slug: 'barbarian' },
    { name: 'Crusader', slug: 'crusader' },
    { name: 'Demon Hunter', slug: 'demon-hunter' },
    { name: 'Monk', slug: 'monk' },
    { name: 'Necromancer', slug: 'necromancer' },
    { name: 'Witch Doctor', slug: 'witch-doctor' },
    { name: 'Wizard', slug: 'wizard' }
];


export interface DClassRef {
    name: string;
    slug: string;
}

export interface DClass {
    slug: string;
    name: string;
    maleName: string;
    femaleName: string;
    icon: string;
    skillCategories: { name: string, slug: string }[];
    skills: { active: DSkill[], passive: DSkill[] };
}

export interface DSkill {
    slug: string;
    name: string;
    icon: string;
    level: number;
    tooltipUrl: string;
    description: string;
    descriptionHtml: string;
}
