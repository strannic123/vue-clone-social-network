import articleApi from '@/api/article'

const state = {
    data: null,
    isLoading: false,
    error: null
}

export const mutationTypes = {
    getArticleStart: '[Article] Get article start',
    getArticleSuccess: '[Article] Get article success',
    getArticleFailure: '[Article] Get article failure'
}

export const actionTypes = {
    getArticle: '[Article] Get tags'
}

const mutations = {
    [mutationTypes.getArticleStart](state) {
        state.isLoading = true
        state.data = null
    },
    [mutationTypes.getArticleSuccess](state, payload) {
        state.isLoading = false
        state.data = payload
    },
    [mutationTypes.getArticleFailure](state) {
        state.isloading = false

    },

}

const actions = {
    [actionTypes.getArticle](context, slug) {
        return new Promise(resolve => {
            context.commit(mutationTypes.getArticleStart)
            articleApi.getArticle(slug)
                .then(article => {
                    context.commit(mutationTypes.getArticleSuccess, article)
                    resolve(article)
                }).catch(() => {
                context.commit(mutationTypes.getArticleFailure)
            })
        })
    }
}

export default {
    state,
    mutations,
    actions
}
