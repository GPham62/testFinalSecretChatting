import React, { Component } from 'react'

export default class EditProfile extends Component {
  render() {
    return (
        <div className="card">
        <div className="card-body">
          <form>
            <div className="form-group">  
              <input type="text" className="form-control" placeholder="Nhập tên" />
            </div>
            <div className="form-group">  
              <input type="email" className="form-control" placeholder="Nhập email" />
            </div>
            <div className="form-group">  
              <input type="date" className="form-control" placeholder="Ngày sinh" />
            </div>
            <div className="form-group">  
            <label className="radio-inline">
              <input type="radio" name="optradio" defaultChecked />Nam 
            </label>
            
            <label className="radio-inline">
              <input type="radio" name="optradio" />Nữ
            </label>
            </div>
            <div className="form-group">  
              <input type="text" className="form-control" placeholder="Địa chỉ" />
            </div>
            <div className="form-group">  
              <input type="tel" className="form-control" placeholder="Số điện thoại" />
            </div>
            <div class="form-group">  
                  <label>Sở thích</label>
                  <div class="list">
                          <div class="item"><a href="#">Medieval music</a></div>
                          <div class="item"><a href="#">Renaissance music</a></div>
                          <div class="item"><a href="#">Baroque music</a></div>
                          <div class="item"><a href="#">Classical</a></div>
                        </div>
              </div>
            <button type="submit" className="btn btn-primary">Lưu</button>    
          </form>
        </div>
      </div>
      
    )
  }
}
