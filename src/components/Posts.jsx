import React from "react";

function Posts(props) {
  console.log(props.data, "posts");
  // const { pagings } = props.data;
  // console.log(data, "des");
  // console.log(props.data.pagings, "des");
  // created_time, id, message,full_picture
  return (
    <div className="container text-left">
      <div className="row justify-content-center align-items-center">
        <div className=" col-md-10 h-100">
          <div className="row">
            <h5>Posts : </h5>
            <div class="card w-100" key="id">
              <div class="card-body">
                <p class="card-title">created_time</p>
                <img
                  src="https://scontent.fdel3-2.fna.fbcdn.net/v/t1.0-9/17426115_1875466106007576_1491153257422320732_n.png?_nc_cat=111&_nc_sid=6e5ad9&_nc_ohc=0eS7TmG7LgUAX89eCwE&_nc_ht=scontent.fdel3-2.fna&oh=c164d3366d59f5ddc215d23bb0f2c9c5&oe=5ECD374F"
                  alt=""
                  className="img-fluid"
                />
                <p class="card-text">message</p>
              </div>
            </div>
          </div>
          <div className="row">
            <a
              href="https://graph.facebook.com/v6.0/1620762884811234/posts?access_token=EAAIinFc9NWUBALMarvNfWZButlYXAni6DDwuVom6Uu0XmlEjNpMFPuLKWXkWGZBt1ZARWgIzKd9EmJKHxB5oU0yZAGtLtu4egIbRvVWr5VZBdANpALw9iAZC1x7vhdoZCKRD5PubHGw58edbvlpMCRmZB3NnUYTybQSrWKX7WWlXxAZDZD&pretty=1&fields=created_time%2Cmessage%2Cfull_picture%2Cid&limit=50&after=QVFIUnkzbkl1RFoyUmZAtVmRHWXVSeFNZAeWQxRjRGcS1XcWVBUWh0bDFGa0t1UGNncHZA2UG1rNmgyZAm50S0gySUd6WERueUdJSDlUOE9Nd2F1bjlLenN6dXFCakVGUzFsT1VaLTNHR1dZAd0xjRlczd2tKa1hqTGlsMzZAJWjVsLW1Nb3ZAu"
              className="btn btn-success"
            >
              NEXT PAGE
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Posts;
