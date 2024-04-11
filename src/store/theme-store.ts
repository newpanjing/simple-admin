import {defineStore} from "pinia";
import {primary} from "@/theme/colors";
import {setPrimaryColor} from "@/theme";
import type {ThemeStates} from "@/store/interface";

export const useTheme = defineStore("theme-store", {
    state: (): ThemeStates => ({
        primary: primary,
    }),
    actions: {
        setPrimary(color: string) {
            this.primary = color
            setPrimaryColor(color)
        }
    },
    persist: {
        enabled: true,
        strategies: [
            {key: "_theme_store", storage: localStorage},

            //定义字段的存储策略
            // { storage: localStorage, paths: ['accessToken'] },
        ]
    },
});