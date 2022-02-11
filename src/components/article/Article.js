import React, { useEffect, useState } from 'react';
import {  useParams, } from 'react-router-dom';
import articleContent from './SampleArticlesDB';
import Error from '../error/Error';
import Comments from './Comments';
import UpvoteSection from './UpvoteSection';
import AddComments from './AddComments';

function Article(props) {
    const { name } = useParams();


    // Temporary storage of DB data
    const [articleData, setarticleData] = useState({ upvotes: 0, comments: [] });

    // Matching name parameter
    const article = articleContent.find(i => i.name === name);

    // Backend Connection API Fetch
    useEffect(() => {
        fetchAPI();
    }, [name]);

    async function fetchAPI() {
        const response = await fetch(`http://localhost:5001/api/article/${name}`);
        const body = await response.json();
        console.log(body);
        setarticleData(body);

    }

    // Article Not Exist in DB
    if (!article) return <Error />


// const Deletearticle = () => {

//     const { id } = useParams();
//     const navigate = useNavigate();
//     const delart = async () => {
// 			const result = await axios.delete(
// 				`/admin/article/${id}/delete`,
// 				{
// 					headers: {
// 						"Content-Type": "application/json",
// 					},
// 				}
// 			);
// 			const body = await result.data;
//             alert(body)
//             navigate(`/article`);
// 		};
//     const donothing = ()=>{
//         navigate(`/article/${id}`)
//     }
    
// const editarticle = async (e) => {
//     e.preventDefault();
//     const newPost = {
//         name: user,
//         title: title,
//         content: content,
//     };

//     try {
//          const res=await axios.put(`/admin/article/${id}/edit`, {newPost, admin}, {
//             headers: {
//                 "Content-Type": "application/json",
//             },
//         });
//         alert(res.data)
//         if (res.data !== "No Empty Fields") navigate(`/article/${id}`);
//     } catch (err) {}
// };
    

    return (
        <div >
            <h1 className='article'>{article.title}</h1>
            <UpvoteSection name={name} setarticleData={setarticleData} upvotes={articleData.upvotes} />
            <br></br> 
            <br></br>
            <p className='desc'>{article.description}</p> <br></br>
            <button className='delete'>delete</button>
            <button className='editbutton'>Edit</button>
            <Comments comments={articleData.comments} />
            <AddComments name={name} setarticleData={setarticleData} />
        </div>
    );
}

export default Article;
