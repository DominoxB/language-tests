import { defineStore } from "pinia"
import i18n from "@/locales"

// API simulation (mocked data)
export const useLevelsStore = defineStore("LangLevels", {
  state: () => ({
      a0: {
        name: 'A0',
        title: i18n.global.t('a0.title'),
        description: i18n.global.t('a0.description')
      },
      a1: {
        name: 'A1',
        title: i18n.global.t('a1.title'),
        description: i18n.global.t('a1.description')
      },
      a2: {
        name: 'A2',
        title: i18n.global.t('a2.title'),
        description: i18n.global.t('a2.description')
      },
      b1: {
        name: 'B1',
        title: i18n.global.t('b1.title'),
        description: i18n.global.t('b1.description')
      },
      b2: {
        name: 'B2',
        title: i18n.global.t('b2.title'),
        description: i18n.global.t('b2.description')
      },
      c1: {
        name: 'C1',
        title: i18n.global.t('c1.title'),
        description: i18n.global.t('c1.description')
      },
      c2: {
        name: 'C2',
        title: i18n.global.t('c2.title'),
        description: i18n.global.t('c2.description')
      }
  }),
})
