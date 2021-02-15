import axios from '@/utils/request';

export const loginApi = () => {
    return axios({
        url:"/api/"
    })
}