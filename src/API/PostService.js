import axios from "axios";

export default class PostService {
    static async getAll() {
        try {
            const response = await axios.get('https://jsonplaceholder.org/posts');
            return response.data;
        } catch (e) {
            console.log(e);
        }
    }
}