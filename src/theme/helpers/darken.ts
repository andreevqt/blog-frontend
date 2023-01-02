import color from 'color';

export const darken = (c: string, amount: number) => color(c).darken(amount).hsl().string();
