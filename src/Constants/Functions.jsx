import axios from "axios";

const URL = `https://recipe-cms-capstone-project.herokuapp.com`

export const Features = {
    like_post: function () {
        return `like_post`
    },
    remove_like_from_post: function () {
        return `dislike_post`
    },
    dislike_post: function () {
        return `like_post`
    },
    remove_dislike_from_post: function () {
        return `dislike_post`
    },
    comment_on_post: function () {
        return `comment_on_post`
    },
    delete_comment_on_post: function () {
        return `delete_comment_on_post`
    },
    save_post: function () {
        return `save_post`
    },
    unsave_post: function () {
        return `unsave_post`
    },
    deletePost: function () {
        return `deletePost`
    },
    deleteaccount: function () {
        return `deleteaccount`
    }
}

export const Apis = {
    get_user_data: async () => {
        let res = await axios.get(`${URL}/upload/multimedia/get/all`)
        let dataA = res.data
        return dataA
    },
    get_user_data_by_id: function () { },
    delete_user_data_by_id: function () { },
    get_all_posts: function () { },
    get_post_by_id: function () { },
    remove_post_by_id: function () { }
}