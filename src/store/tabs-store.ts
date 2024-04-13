import {defineStore} from "pinia";
import type {Tab, TabsStates, TransitionStates} from "@/store/interface";
import {useRouter} from "vue-router";
const router=useRouter()

export const useTabsStore = defineStore("tabs", {
    state: (): TabsStates => ({
        tabs: [{
            id: -1,
            url: "/",
            text: "主控台",
            closeable: false,
            active: true
        }],
    }),
    actions: {
        setTabs(tabs: Array<Tab>) {
            this.tabs = tabs
        },
        pushTab(tab: Tab) {
            //如果tab已经存在，则将其他tab的active状态设置为false
            let t=this.tabs.find(item => item.id === tab.id)
            if (t) {
                this.tabs.forEach(item => {
                    item.active = false
                })
                t.active = true
                return
            }
            //将其他tab的active状态设置为false
            this.tabs.forEach(item => {
                item.active = false
            })
            tab.active = true
            this.tabs.push(tab)
        },
    },
    router:useRouter(),
    persist: {
        enabled: true,
        strategies: [
            {key: "_tabs", storage: localStorage},
        ]

    }
})
