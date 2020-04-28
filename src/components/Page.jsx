import React, { Component } from "react";
import axios from "axios";
import Posts from "./Posts";

export class Page extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: []
    };
  }
  componentDidMount = () => {
    const { id, access_token } = this.props;
    // let data = localStorage.getItem("data");
    // data = JSON.parse(data);
    // this.setState({ data: data });
    // console.log(data, "data page");
    axios
      .get(
        `https://graph.facebook.com/v6.0/${id}?fields=name,description,about,cover,contact_address,bio,birthday,country_page_likes,new_like_count,culinary_team,general_info,personal_info,is_owned,posts.limit(10){created_time,message,full_picture,id},products,picture,videos,featured_video,video_lists,call_to_actions,whatsapp_number,store_number,phone&access_token=${access_token}`
      )
      .then(res => {
        this.setState({ data: res.data });
        localStorage.setItem("data", JSON.stringify(res.data));
      })
      .catch(err => console.log(err.message));
  };

  render() {
    console.log(this.state.data, "page");
    const {
      about,
      birthday,
      name,
      phone,
      whatsapp_number,
      country_page_likes,
      id,

      description,
      picture,
      call_to_actions,
      posts,
      new_like_count
    } = this.state.data;

    let obj = this.state.data.cover;
    let cover = "";
    for (let key in obj) {
      // console.log(obj[key], key);
      if (key == "source") {
        cover = obj[key];
      }
    }

    return (
      <div className="container mt-5">
        <div className="row justify-content-center text-center">
          <div className="col-md-12">
            <img
              src={cover}
              height="100%"
              width="100%"
              className="img-fluid"
              alt=""
            />
            {/* <img src={data.pictures.data.url} height="100px" width="100px" alt="" /> */}
            <h1 className="display-4 ">{name}</h1>
            <p className="lead">
              <span className="font-weight-bold">Description :</span>{" "}
              {description}
            </p>
            <p className="lead">
              <span className="font-weight-bold">About :</span> {about}
            </p>
            <div className="row align-items-center justify-content-around">
              <p className="lead">
                <i class="fx-2x fab fa-whatsapp"></i> : {whatsapp_number}
              </p>
              <p className="lead">
                <i class="fa fa-phone" aria-hidden="true"></i> : {phone}
              </p>
            </div>
            <div className="row justify-content-between">
              <p className="">Likes : {country_page_likes}</p>
              <p>Created On : {birthday}</p>
              <p>Likes this week : {new_like_count}</p>
            </div>
            <div className="container">{/* <Posts data={posts} /> */}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Page;
