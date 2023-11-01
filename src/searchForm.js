import { useState, useEffect } from "react";

export default function SearchForm() {
    // let params = useParams()
    const [blog, setBlog] = useState([])

    useEffect(() => {
        fetch(`http://127.0.0.1:3000/blogs/`)
      .then((response) => response.json())
      .then((data) => {setBlog(data); console.log(data)})
    }, [])

    function searchBlog(){
    //   setSearchBlogName(document.getElementById('name').value)
    var searchBlogName = document.getElementById('name').value
    //   params.blogid = searchBlogName
    fetch(`http://127.0.0.1:3000/blogs/ids?id=${searchBlogName}`)
      .then((response) => response.json())
      .then((data) => setBlog([data]));
      
    };
    // if blog!=0
    const blogdata = Object.values(blog);
    return (
      <section className='section search'>
      
          <div className='form-control'>
            <label htmlFor='name'>search the blogs</label>
            <input type='text' id='name'/>
            <button id='text-search-btn' onClick={searchBlog}>Search</button>
          </div>
            <div>
            {blogdata && <> {blogdata.map((blogs) => {
                <div>
                    <h2>{blogs.blog_title}</h2>
                </div>
            })}
            </>}
            </div>
      </section>
    )
  }
  