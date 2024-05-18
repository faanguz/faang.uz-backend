import type { MultiLanguage } from 'domain/_core/multi-language';
import { Language } from 'domain/_core/multi-language';
import { UserErrorCodes } from 'domain/user/errors/user-error-codes';

export const UserErrorMessages: Record<UserErrorCodes, MultiLanguage> = {
    [UserErrorCodes.AlreadyExists]: {
        [Language.English]: 'User already exists',
        [Language.Russian]: 'Пользователь уже существует',
        [Language.Uzbek]: 'Foydalanuvchi mavjud',
    },
    [UserErrorCodes.NotFound]: {
        [Language.English]: 'User not found',
        [Language.Russian]: 'Пользователь не найден',
        [Language.Uzbek]: 'Foydalanuvchi topilmadi',
    },
};
