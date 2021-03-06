export default function blogApi($http){
    return {
        getBlog: _getBlog,
        getPost: _getPost
    };
    function _getBlog(num, id) {
        // return axios.get('/blog?id=1&id=2')
        return $http.get(`http://localhost:3000/blog?_limit=${num}&_page=${id}&_sort=id&_order=DESC`)
    }
    function _getPost(id) {
        return $http.get(`http://localhost:3000/blog/${id}`)
    }
}