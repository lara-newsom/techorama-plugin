export const ALL_TYPES = [
    'data-access', 'feature', 'util', 'model', 'ui'
] as const;

export type AllTypes = typeof ALL_TYPES[number];