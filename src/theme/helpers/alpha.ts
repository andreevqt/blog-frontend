import color from 'color';

export const alpha = (c: string, amount: number) => color(c).alpha(amount).hsl().string();
