import '../../css/post.scss';
export default function Post($scope, $routeParams, BlogApi) {
    let postId = $routeParams.id;
    $scope.imgDefault = 'https://cdn.browshot.com/static/images/not-found.png';
    $scope.post = {};
    $scope.fixedSocial = false;
    $scope.attach = false;
    $scope.attachSocialBlock = function () {
        let socialContainerHeight = document.querySelector('.social-links').offsetHeight
        this.fixedSocial = window.pageYOffset > 500
        this.attach = window.pageYOffset > 1430 - socialContainerHeight
    }
    $scope.GETPost = function () {
        BlogApi.getPost(postId)
            .then(post => {
                $scope.post = post.data
            })
            .catch(errors => {
                console.log(errors)
            })
        window.addEventListener('scroll', $scope.attachSocialBlock)
    }
    $scope.GETPost()
    $scope.$onDestroy = function () {
        window.removeEventListener('scroll', $scope.attachSocialBlock)
    };
}