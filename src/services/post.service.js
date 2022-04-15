import {axiosService} from "./axios.service";
import {urls} from "../constants";

const postService = {
    getAll: () => axiosService.get(urls.posts),
    getByID: (id) => axiosService.get(`${urls.posts}/${id}`),
    getByUserID: (id) => axiosService.get(`${urls.users}/${id}/posts`)
}

export {postService};
