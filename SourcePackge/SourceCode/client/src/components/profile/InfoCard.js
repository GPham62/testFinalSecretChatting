import React, { Component } from 'react'

export default class InfoCard extends Component {
  render() {
    return (
        <div className="card">
            <img className="card-img-top img-fluid" src="https://scontent.fhan2-4.fna.fbcdn.net/v/t1.0-1/48419229_2264961360455586_1717772844345065472_n.jpg?_nc_cat=110&_nc_oc=AQnnZ9x3nUR2im9DMteihkiO5mAh1950VGbQjuuPor3mqEwGsU_YraYLeMcMn9HtUM0&_nc_ht=scontent.fhan2-4.fna&oh=66098c4ef1ceafa51a3aa429e39badc7&oe=5D219749" alt="Card cap" />
            <div className="card-body">
                <h5 className="card-title">Nguyen Duc Minh </h5>
                <p className="card-text">Ngày sinh: <span>13/03/1998</span></p>
                <p className="card-text">Tôi là 1 người bình thường</p>
                <p>Rate:<span className="fa fa-star checked" />
                    <span className="fa fa-star checked" />
                    <span className="fa fa-star checked" />
                    <span className="fa fa-star" />
                    <span className="fa fa-star" />
                </p>
            </div>
      </div>
    )
  }
}
