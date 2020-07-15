import React, {Component} from 'react';
import {connect} from 'react-redux';
import Modal from '../../Component/UI/Modal/Modal';
import './Main.css';
import {fetchPost,fetchUser,changePost,deletePost} from "../../Store/Action/postActions";
import {toast,ToastContainer} from "react-toastify";

class Main extends Component {

    state = {
        login:'',
        modal:false,
        modal2: false,
        id:'',
        editPostName:'',
        editImage:'',
    };

    componentDidMount() {
        this.props.fetchPost();
        this.props.fetchUser();
    }

    showModal = (id) => {
        this.setState({modal: true,id: id})
    };

    closeModal = () => {
      this.setState({modal: false})
    };

    closeModal2 = () => {
        this.setState({modal2: false})
    };

    inputValHandler = (e) => {
      this.setState({[e.target.name]: e.target.value});
    };

    checkHandler = () => {
        const role = [];

        Object.keys(this.props.user).forEach(info => {
            role.push(this.props.user[info]);
        });

        const index = role.findIndex(role => role.login === this.state.login);

        if (role[index] && role[index].role === 'admin') {
            this.setState({modal2: true,modal:false});
            toast.success('Запрос выполнен');
        }else {
            toast.error('К сожелению только админ может редактирровать посты!')
        }
    };

    editHandler = () => {
      if(this.state.editPostName === ''|| this.state.editImage === ''){
          toast.error('Заполните не заполненные поля!')
      }else {
          const putPost = {
              postName: this.state.editPostName,
              image: this.state.editImage,
          };
          this.props.changePost(this.state.id,putPost);
      }
    };

    deleteHandler = () => {
        this.props.deletePost(this.state.id)
    };


    render() {
        return (
            <div className="MainContainer">
                <ToastContainer/>
                <Modal show={this.state.modal2} close={this.closeModal2}>
                    <div className="in-1">
                        <p>Edit Post Name</p>
                        <input type="text" name="editPostName" onChange={this.inputValHandler}/>
                    </div>
                    <div className="in-1">
                        <p>edit Image</p>
                        <input type="text" name="editImage" onChange={this.inputValHandler}/>
                    </div>
                    <h3>Example</h3>
                    <div className="postBlock">
                        <div className="img">
                            <img src={this.state.editImage} alt=""/>
                        </div>
                        <p>{this.state.editPostName}</p>
                    </div>
                    <button onClick={() => this.editHandler(this.closeModal2())} className="edit2">edit</button>
                    <button onClick={() => this.deleteHandler(this.closeModal2())} className="delete">delete</button>
                </Modal>

                <Modal show={this.state.modal} close={this.closeModal}>
                    <div className="in-1">
                        <p>Login</p>
                        <input type="text" name="login" onChange={this.inputValHandler}/>
                    </div>
                    <button className="check" onClick={this.checkHandler}>Check</button>
                </Modal>
                <div className="posts">
                    {this.props.post && Object.keys(this.props.post).map(info => (
                        <div key={info} className="postBlock">
                            <div className="img">
                                <img src={this.props.post[info].image} alt=""/>
                            </div>
                            <p>{this.props.post[info].postName}</p>
                            <button className="edit" onClick={() => this.showModal(info)}>edit</button>
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    post: state.post.post,
    user: state.user.user,
});

const mapDispatchToProps = dispatch => ({
    fetchPost: () => dispatch(fetchPost()),
    fetchUser: () => dispatch(fetchUser()),
    changePost: (id,putPost) => dispatch(changePost(id,putPost)),
    deletePost: (id) => dispatch(deletePost(id)),
});

export default connect(mapStateToProps,mapDispatchToProps)(Main);