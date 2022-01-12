import {useEffect, useState} from "react";
import {usePosts} from "../hooks/usePost";
import {useFetching} from "../hooks/useFetching";
import PostService from "../API/PostService";
import {getPageCount} from "../utils/pages";
import MyButton from "../components/UI/button/MyButton";
import MyModal from "../components/UI/myModal/MyModal";
import PostForm from "../components/UI/form/PostForm";
import PostFilter from "../components/PostFilter";
import PostList from "../components/PostList";
import Pagination from "../components/UI/pagination/Pagination";


function Posts() {
    const [posts, setPosts] = useState([])
    // const [selectedSort, setSelectedSort] = useState('')
    // const [searchQuery, setSearchQuery] = useState('')
    const [filter, setFilter] = useState({sort: '', query: ''});
    const [modal, setModal] = useState(false);


    // pagination
    const [totalPage, setTotalPage] = useState(0);
    const [limit, setLimit] = useState(10);
    const [page, setPage] = useState(1)
    // pagination

    const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);

    // let pagesArray = getPagesArray(totalPage)
    // let pagesArray = usePagination(totalPage) // my with useMemo but dont now works it or not

    const [fetchPosts, isPostLoading, postError] = useFetching(async () => {
        const response = await PostService.getAll(limit, page);
        setPosts(response.data); //  при переключении пагинации откр млед страница со след постами
        // setPosts([...posts, ...response.data]); // показываются новые посты при прокрутки стр
        const totalCount = (response.headers['x-total-count'])
        setTotalPage(getPageCount(totalCount, limit))
    })
    useEffect(() => {
        fetchPosts()
    }, [page])

    // const sortedPosts = useMemo(
    //     () => {
    //         console.log("working sort fun")
    //         if (selectedSort){
    //             return [...posts].sort((a, b) => a[selectedSort].localeCompare(b[selectedSort]))
    //         }
    //         return posts
    //     },
    //     [selectedSort, posts]
    // )
    // const sortedAndSearchedPosts = useMemo(() => {
    //     return sortedPosts.filter(post => post.title.toLowerCase().includes(searchQuery))
    // }, [searchQuery, sortedPosts])
    // const [title, setTitle] = useState('')
    // const [body, setBody] = useState('')
    // const bodyRef = useRef()
    // const [post, setPost] = useState({title: '', body: ''})
    // const addNewPost = (e) => {
    //     e.preventDefault()
    //     // const newPost = {
    //     //     id: Date.now(),
    //     //     title,
    //     //     body
    //     // }
    //     setPosts([...posts, {...post, id: Date.now()}])
    //     setPost({title: '', body: ''})
    //     // console.log(bodyRef.current.value)
    //
    // const postSort = (sort) => {
    //     setSelectedSort(sort)
    //     // setPosts([...posts].sort((a, b) => a[sort].localeCompare(b[sort])))
    // }
    // async function fetchPost() {
    //     setIsPostLoading(true);
    //     setTimeout( async () => {
    //         const posts = await PostService.getAll();
    //         setPosts(posts);
    //         setIsPostLoading(false)
    //     }, 100)
    // }

    const createPost = (newPost) => {
        setPosts([...posts, newPost])
        setModal(false)
    }
    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id))
    }

    const changePage = (page) => {
        setPage(page)
        // fetchPosts()
    }

    return (
        <div className="App">
            <MyButton style={{marginTop: '25px'}} onClick={() => setModal(true)}>
                Create user
            </MyButton>
            <MyModal visible={modal} setVisible={setModal}>
                <PostForm create={createPost}/>
            </MyModal>
            <hr style={{margin: '15px 0'}}/>
            <PostFilter
                filter={filter}
                setFilter={setFilter}
            />

            {postError && <h1> ${postError}</h1>}
            <PostList posts={sortedAndSearchedPosts} remove={removePost} title="list one"/>
            {
                isPostLoading && <div>Loading</div>
            }
            {/*{isPostLoading*/}
            {/*    ? <h1>Loading...</h1>*/}
            {/*    : <PostList posts={sortedAndSearchedPosts} remove={removePost} title="list one"/>*/}
            {/*}*/}
            <Pagination
                page={page}
                changePage={changePage}
                totalPage={totalPage}
            />

        </div>
    );
}

export default Posts;