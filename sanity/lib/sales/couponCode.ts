export const COUPON_CODES = {
    UCUBEX: "UCUBEX",
    MU2024: "MU2024",
    XMAS2004: "XMAS2004",
} as const;

export type CouponCode = keyof typeof COUPON_CODES;
