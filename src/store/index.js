import {createStore} from 'vuex'

import auth from '@/store/modules/auth'
import feed from "@/store/modules/feed";
import popularTags from "@/store/modules/populatTags";
import article from "@/store/modules/article";
import createArticle from "@/store/modules/createArticle"
import editArticle from "@/store/modules/editArticle";
import settings from "@/store/modules/settings";



export default createStore({
    state: {},
    mutations: {},
    actions: {},
    modules: {
        auth,
        feed,
        popularTags,
        article,
        createArticle,
        editArticle,
        settings

    }
})
