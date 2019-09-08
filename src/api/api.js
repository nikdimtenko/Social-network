import * as axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': '5504e774-d1d3-4639-abb1-0c8cc8a3ecc0'
    }
});

export const userAPI = {
    getUsers(currentPage, sizePage){
        return instance.get(`users?page=${currentPage}&count=${sizePage}`)
            .then(response => {
                return response.data})
    },
    follow(id){
        return instance.post(`follow/${id}`, {})
            .then(response => response.data)
    },
    unfollow(id){
        return instance.delete(`follow/${id}`, {})
            .then(response => response.data)
    }
};

export const profileAPI = {
    getProfile(userId) {
        return instance.get(`profile/${userId}`)
            .then(response => response.data)
    },
     authMe(){
         return instance.get('auth/me')
             .then(response => {
                 return response.data})
     }
};