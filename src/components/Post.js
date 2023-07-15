import { Component } from "react";

class Post extends Component{
    render(){
      // const {user} = this.props;
        return( 
        <div className="posts-section">
         {[1,2,3,4].map( (a,b)=> <div key={b} className="post-bar">   
          </div>)}
      </div>

        );
    }
}
export default Post;