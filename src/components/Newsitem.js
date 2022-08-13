import React from 'react'


const Newsitem = (props) => { 
    let{title, description, imageUrl, newsUrl, author, date} = props;
    return (
    <div className='my-3'>
        <div className="card">
        <img src={!imageUrl?"https://cdn.cnn.com/cnnnext/dam/assets/220714112648-employers-pay-raises-stock-super-tease.jpg":imageUrl} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{title}...</h5>
                <p className="card-text">{description}...</p>
                <p className="card-text"><small className="text-muted">By {!author?"Anonymous" : author} on {new Date (date).toGMTString()}</small></p>
                <a href={newsUrl} target="_blank" rel="noopener noreferrer"  className="btn brn-sm btn-dark">Read More</a>
            </div>
        </div>
    </div>
    )
  
}

export default Newsitem