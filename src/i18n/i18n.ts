import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';

const baseOptions = {
    lng: 'en',
    fallbackLng: 'en',

    interpolation: {
        escapeValue: false
    }
};

export const mockTranslations = {
    en: {
        translation: {
            'ui-localized': 'Hi, I\'m localized text'
        }
    },
    ru: {
        translation: {
            'ui-localized': 'Привет, Я локализованый текст'
        }
    }
};

export function buildI18n(resources: object) {
    const options = {...baseOptions, resources};
    i18n
        .use(initReactI18next)
        .init(options as any);
    return i18n;
}
