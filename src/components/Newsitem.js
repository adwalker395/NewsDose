import React from 'react'

const Newsitem=(props)=>{

    let { title, description , imageUrl , newsUrl , author , date , source} = props;
    return (
      <div className='my-3'>
        <div className="card" >
          <div>
            <span className='badge rounded-pill bg-danger'>{source}</span>
          </div>
          <img src={!imageUrl?"https://www.shutterstock.com/image-illustration/breaking-news-minimalistic-logo-on-600w-1298244646.jpg":imageUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <p className="card-text"><small className="text-muted">{!author?'Last updated ':'By '+author+' on '} {new Date(date).toGMTString()}</small></p>
            <a href={newsUrl} target='blank' className="btn btn-sm btn-primary">Read More</a>
          </div>
        </div>
      </div>
    )
  }

export default Newsitem