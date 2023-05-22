import { Link } from "react-router-dom";

const Bloglist = ({ blogs, title /* handleDelete*/ }) => {
  // const blogs = props.blogs;
  //  const title = props.title;

  // npx json-server --watch data/db.json --port 8000

  return (
    <div className="bloglist">
      <h2> {title} </h2>
      {blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <Link to= {`/blogs/${blog.id}`} >
            <h2> {blog.title} </h2>
            <p>written by {blog.author} </p>
          </Link>
          {/* <button  onClick={()=>handleDelete(blog.id)}   >Delete Blog</button>*/}
        </div>
      ))}
    </div>
  );
};

export default Bloglist;
