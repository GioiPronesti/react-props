import Card from "../Post/Card/Card.jsx"
import posts from "../Post/Card/posts.js"
export default function Main() {
 
    return (

        <div className="container">
            <div className="row">
                <div className="col-12">
                    <section className="section-blog">
                       {
                        <div className="row">
                            {posts.map((posts) => ( 
                                <div key={posts.id} className="col-4">
                                  <Card />
                                </div>
                            ))}
                        </div>
                       } 
                    </section>   
                </div>
            </div>
        </div>
          
    )

}