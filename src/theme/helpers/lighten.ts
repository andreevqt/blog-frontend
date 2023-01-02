import color from 'color';

export const lighten = (c: string, amount: number) => color(c).lighten(amount).hsl().string();
