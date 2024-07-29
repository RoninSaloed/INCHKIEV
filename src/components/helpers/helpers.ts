export const isCyrillic = (str: string) => /^[\u0400-\u04FF]+$/.test(str)
export const isUkrainianPhoneNumber = (str: string) => /^\+380\d{9}$/.test(str)
