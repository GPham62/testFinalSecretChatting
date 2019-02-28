import React, { Component } from 'react'

export default class FilterProfile extends Component {
  render() {
    return (
        <div className="filter-person">
        <h2>Lựa chọn tiêu chí bạn muốn kết bạn</h2>
        <div className="suggest">
          <h5>Giới tính</h5>
          <div className="checkbox">
            <label><input type="checkbox" defaultValue />Nam</label>
          </div>
          <div className="checkbox">
            <label><input type="checkbox" defaultValue />Nữ</label>
          </div>
          <h5>Địa điểm</h5>
          <div className="form-group">
            <select className="form-control">
              <option value="hanoi">Hà nội</option>
              <option value="danang">Đà Nẵng </option>
              <option value="hcm">Hồ Chí Minh</option>
            </select>
          </div>
          <h5 className="mt-2">Sở thích</h5>
          <div className="list">
            <div className="item"><a href="#">Medieval music</a></div>
            <div className="item"><a href="#">Renaissance music</a></div>
            <div className="item"><a href="#">Baroque music</a></div>
            <div className="item"><a href="#">Classical</a></div>
            <div className="item"><a href="#">Romantic</a></div>
            <div className="item"><a href="#">20th-century music</a></div>
            <div className="item"><a href="#">Opera</a></div>
            <div className="item"><a href="#">Folk</a></div>
            <div className="item"><a href="#">Country music</a></div>
            
          </div>

          <button type="submit" className="btn btn-primary">Lưu</button>    
        </div>
      </div>
    )
  }
}
