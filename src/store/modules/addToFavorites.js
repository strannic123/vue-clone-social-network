import addToFavoritesApi from "@/api/addToFavorites";

export const actionTypes = {
    addToFavorites: '[addToFavorites] Add to favorites'
}
export const  mutationTypes = {
    addToFavoritesStart: '[addToFavorites] Add To Favorites start',
    addToFavoritesSuccess: '[addToFavorites] Add To Favorites success',
    addToFavoritesFailure: '[addToFavorites] Add To Favorites failure'
}

const mutations = {
    [mutationTypes.addToFavoritesStart]() {},
    [mutationTypes.addToFavoritesSuccess]() {},
    [mutationTypes.addToFavoritesFailure]() {}
}

const actions = {
    [actionTypes.addToFavorites](context, {slug, isFavorited}) {
        return new Promise(resolve => {
            context.commit(mutationTypes.addToFavoritesStart)
            const promise = isFavorited ? addToFavoritesApi.removeFromFavorites(slug) : addToFavoritesApi.addToFavorites(slug)
            promise.then(article => {
                context.commit(mutationTypes.addToFavoritesSuccess, article)
                resolve(article)
            }).catch(() => {
                context.commit(mutationTypes.addToFavoritesFailure)
            })
        })
    }
}

export default {
    actions,
    mutations
}
