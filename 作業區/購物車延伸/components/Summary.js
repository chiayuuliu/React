import React from 'react'

function Summary(props) {
  const { delivery, setDelivery, productCount, total } = props

  return (
    <>
      <div className="col-md-4 summary">
        <div>
          <h5>
            <b>付款摘要</b>
          </h5>
          <h5>運送方式</h5>
          <select
            value={delivery}
            onChange={(e)=>{
                setDelivery(e.target.value)
            }}>
              <option value="">請選擇</option>
              <option value="200">郵局 +200</option>
              <option value="250">快遞 +250</option>
          </select>
        </div>
        <div className="row">
          <div className="col col-style">共 {productCount} 項目</div>
        </div>
        <div className="row row-style">
          <div className="col">總價</div>
          <div className="col text-right">${total}</div>
        </div>
        <button className="btn">前往付款</button>
      </div>
    </>
  )
}

export default Summary