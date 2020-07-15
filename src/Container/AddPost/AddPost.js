import React, {Component} from 'react';
import {connect} from 'react-redux';
import './AddPost.css';
import {sendPost} from "../../Store/Action/postActions";
import  {toast,ToastContainer} from "react-toastify";

class AddPost extends Component {

    state = {
      postName:'',
      image:'',
    };

    inputValHandler = (e) => {
      this.setState({[e.target.name]: e.target.value});
    };

    addHandler = () => {
        if(this.state.postName === ''||this.state.postName === ' '||this.state.image === ''||this.state.image === ' '){
            toast.error('Заполните не введенные поля!');
        }else{
            const post = {
                postName: this.state.postName,
                image: this.state.image,
            };
            this.props.sendPost(post);
            this.props.history.push('/');
        }
    };

    render() {
        return (
            <div className="AddContainer">
                <ToastContainer/>
                <div className="inputs">
                    <div className="in-1">
                        <p>Post Name</p>
                        <input type="text" name="postName" onChange={this.inputValHandler}/>
                    </div>
                    <div className="in-1">
                        <p>Post Image</p>
                        <input type="text" name="image" onChange={this.inputValHandler}/>
                    </div>
                    <h3>Example yor post</h3>
                    <div className="postBlock">
                        <div className="img">
                            <img src={this.state.image} alt=""/>
                        </div>
                        <p>{this.state.postName}</p>
                    </div>
                    <button onClick={this.addHandler}>Add</button>
                </div>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => ({
   sendPost: (post) => dispatch(sendPost(post)),
});

export default connect(null,mapDispatchToProps)(AddPost);