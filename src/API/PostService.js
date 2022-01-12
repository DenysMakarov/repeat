import axios from "axios";

export default class PostService{
    static async getAll(limit = 10, page = 1){
        try{
            const res =  await axios.get('https://jsonplaceholder.typicode.com/posts', {
                params:{
                    _limit: limit,
                    _page: page
                }
            });
            return res;
        } catch (e){
           console.log(e)
        }
    }

    static async getById(id){
        try{
            const res =  await axios.get('https://jsonplaceholder.typicode.com/posts/' + id);
            return res;
        } catch (e){
            console.log(e)
        }
    }

    static async getCommentId(id){
        try{
            const res =  await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`);
            return res;
        } catch (e){
            console.log(e)
        }
    }
};

