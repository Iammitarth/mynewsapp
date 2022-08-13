import React, {useEffect, useState} from 'react'
import Newsitem from './Newsitem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";

const News  = (props) => {
  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(true)
  const [page, setPage] = useState(1)
  const [totalresults, setTotalResults] = useState(0)

  const capatalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
    // document.title = `${this.capatalizeFirstLetter(props.category)} - NewsMonkey`
  

  const updateNews = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=${page}&pageSize=${props.pageSize}`;
    setLoading(true)
    let data = await fetch(url)
    let parsedData = await data.json()
    console.log(parsedData)
    setArticles(parsedData.articles)
    setTotalResults(parsedData.totalResults)
    setLoading(false)

  }

  useEffect(() => {
    updateNews();
    }, [])

 const fetchMoreData = async () => {   
  const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=${page + 1}&pageSize=${props.pageSize}`;
  setPage(page+1)
  let data = await fetch(url)
  let parsedData = await data.json()
  console.log(parsedData)
  setArticles(articles.concat(parsedData.articles))
  setTotalResults(parsedData.totalResults)
  };


    return (
      <>
        <h1 className="text-center" style={{margin: 25, marginTop : 90}}>MITARTHNEWS -  Top {capatalizeFirstLetter(props.category)} HeadLines</h1>
        {loading && <Spinner/>}
        <InfiniteScroll
                    dataLength={articles.length}
                    next={fetchMoreData}
                    hasMore={articles.length !== totalresults}
                    loader={<Spinner/>}
                > 
                    <div className="container">
                    <div className="row">
                        {articles.map((element) => {
                            return <div className="col-md-4" key={element.url}>
                                <Newsitem title={element.title ? element.title : ""} description={element.description ? element.description : ""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
                            </div>
                        })}
                    </div>
                    </div> 
                </InfiniteScroll>
        </>
    )
                      }

News.defaultProps = {
  country : 'us',
  pageSize : 8,
  category : 'general',
  totalResults : 0
}

News.propTypes = {
  country : PropTypes.string,
  pageSize : PropTypes.number,
  category : PropTypes.string
}

export default News
