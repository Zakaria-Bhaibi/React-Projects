
import Bloglist from "./Bloglist";
import useFetch from "./useFetch";

const Home = () => {
  // const [name, setName] = useState("Zakaria");
  /* const handleDelete = (id) => {
        const newBlogs = blogs.filter(blog => blog.id !== id);
        setBlogs(newBlogs);
    } */
  const {
    data: blogs,
    isPending,
    error,
  } = useFetch("http://localhost:8000/blogs");

  return (
    <div className="home">
      {error && <div> {error} </div>}
      {isPending && <div>Loading...</div>}
      {blogs && (
        <Bloglist
          blogs={blogs}
          title="All Blogs" /* handleDelete = {handleDelete} */
        />
      )}

      {/*<button onClick={() => setName('Bhaibi')} > Change name</button>
           <p> {name} </p>
          */}
    </div>
  );
};

export default Home;
