import axios from "axios";

const instance = axios.create({
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    withCredentials: true,
    headers: {
        "API-KEY": "55ebfa3e-6b40-4670-95de-c7dd7373b26d",
        "content-type": "application/json",
    }
})

export const userAPI = {
    getUsers(page = 1, pageSize = 10) {
        return instance.get(`users?page=${page}&count=${pageSize}`).then(response => response.data)
    }
}

export const followAPI = {
    follow(id) {
        return instance.post(`follow/${id}`).then(response => response.data);
    },
    unFollow(id) {
        return instance.delete(`follow/${id}`).then(response => response.data);
    }
}

export const profileAPI = {
    getProfile(id) {
        return instance.get(`profile/${id}`).then(response => response.data);
    },
    getStatus(id) {
        return instance.get(`profile/status/${id}`).then(response => response.data);
    },
    putStatus(status) {
        return instance.put(`profile/status`, {status: status}).then(response => response.data);
    },
    editProfile(values) {
      return instance.put('profile', {...values}).then(response => response.data);
    }
}

export const authAPI = {
    auth() {
        return instance.get('auth/me').then(response => response.data);
    },
    login({email, password, remember}) {
        return instance.post(`auth/login`, {
            email: email,
            password: password,
            rememberMe: remember
        }).then(response => response.data);
    },
    logout() {
        return instance.delete(`auth/login`).then(response => response.data);
    },
}


