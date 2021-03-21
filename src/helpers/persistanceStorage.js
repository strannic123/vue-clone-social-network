export const getItem = key => {
    try{
       return window.localStorage.getItem(key)
    }catch (e){
        console.log('Error getting LocalStorage key token')
        return null
    }
}

export const setItem = (key, data) => {
    try{
        window.localStorage.setItem(key, JSON.stringify(data) )
    }catch (e){
        console.log('Error setting LocalStorage token')
    }
}
