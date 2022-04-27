import {axiosService} from "./axios.service";
import {urls} from "../constants";

const postService = {
    getAll: (page, _limit = 2) => axiosService.get(urls.posts, {
        params: {
            _start: (page - 1) * _limit,
            _limit
        }
    }),

    getByID: (id) => axiosService.get(`${urls.posts}/${id}`),
    getByUserID: (id) => axiosService.get(`${urls.users}/${id}/posts`)
}

export {postService};
