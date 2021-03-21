import tagsApi from '@/api/popularTags'

const state = {
    data: null,
    isLoading: false,
    error: null
}

export const mutationTypes = {
    getPopularTagsStart: '[PopularTags] Get popular tags start',
    getPopularTagsSuccess: '[PopularTags] Get popular tags success',
    getPopularTagsFailure: '[PopularTags] Get popular tags failure'
}

export const actionTypes = {
    getPopularTags: '[PopularTags] Get tags'
}

const mutations = {
    [mutationTypes.getPopularTagsStart](state) {
        state.isLoading = true
        state.data = null
    },
    [mutationTypes.getPopularTagsSuccess](state, payload) {
        state.isLoading = false
        state.data = payload
    },
    [mutationTypes.getPopularTagsFailure](state) {
        state.isloading = false

    },

}

const actions = {
    [actionTypes.getPopularTags](context) {
        return new Promise(resolve => {
            context.commit(mutationTypes.getPopularTagsStart)
            tagsApi.getPopularTags()
                .then(tags => {
                    context.commit(mutationTypes.getPopularTagsSuccess, tags)
                    resolve(tags)
                }).catch(() => {
                context.commit(mutationTypes.getPopularTagsFailure)
            })
        })
    }
}

export default {
    state,
    mutations,
    actions
}