import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner'
export default class News extends Component {
    
    // ariticless = [
    //     {
    //         "source": {
    //             "id": "abc-news-au",
    //             "name": "ABC News (AU)"
    //         },
    //         "author": "Kerrin Thomas",
    //         "title": "Gippsland women's cricket bat maker Clare Johnston providing options for female athletes",
    //         "description": "When women go searching for a cricket bat, they often find they have fewer options than their male counterparts, but Gippsland bat maker Clare Johnston hopes to change that.",
    //         "url": "http://www.abc.net.au/news/2023-01-02/gippsland-women-cricket-bat-maker-clare-johnston-options-females/101781648",
    //         "urlToImage": "https://live-production.wcms.abc-cdn.net.au/9c2cd914655eed53f20bb3885f17b3e5?impolicy=wcms_crop_resize&cropH=2268&cropW=4032&xPos=0&yPos=378&width=862&height=485",
    //         "publishedAt": "2023-01-02T06:03:09Z",
    //         "content": "When women go searching for a cricket bat, they often find they have fewer options than their male counterparts, but a Gippsland bat maker hopes to change that.\r\nClare Johnston has played cricket sin… [+4093 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": "espn-cric-info",
    //             "name": "ESPN Cric Info"
    //         },
    //         "author": null,
    //         "title": "PCB hands Umar Akmal three-year ban from all cricket | ESPNcricinfo.com",
    //         "description": "Penalty after the batsman pleaded guilty to not reporting corrupt approaches | ESPNcricinfo.com",
    //         "url": "http://www.espncricinfo.com/story/_/id/29103103/pcb-hands-umar-akmal-three-year-ban-all-cricket",
    //         "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg",
    //         "publishedAt": "2020-04-27T11:41:47Z",
    //         "content": "Umar Akmal's troubled cricket career has hit its biggest roadblock yet, with the PCB handing him a ban from all representative cricket for three years after he pleaded guilty of failing to report det… [+1506 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": "espn-cric-info",
    //             "name": "ESPN Cric Info"
    //         },
    //         "author": null,
    //         "title": "What we learned from watching the 1992 World Cup final in full again | ESPNcricinfo.com",
    //         "description": "Wides, lbw calls, swing - plenty of things were different in white-ball cricket back then | ESPNcricinfo.com",
    //         "url": "http://www.espncricinfo.com/story/_/id/28970907/learned-watching-1992-world-cup-final-full-again",
    //         "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg",
    //         "publishedAt": "2020-03-30T15:26:05Z",
    //         "content": "Last week, we at ESPNcricinfo did something we have been thinking of doing for eight years now: pretend-live ball-by-ball commentary for a classic cricket match. We knew the result, yes, but we tried… [+6823 chars]"
    //     }
    // ]
    

  

    constructor(props) {
        super(props);
        console.log("hello i am a constructor");
        this.state = {
            ariticles: [],
            page: 1,
            loading: false
        }
        document.title=`News App- ${this.props.catagory} `;
        
    }
    
    async componentDidMount() {
        let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.catagory}&apiKey=330fd9a7c6a04b82b832e2740211a86e&page=1&pagesize=10`;
      
        this.setState(
            {
                loading:true
            }
        )
        let data = await fetch(url);
        let parsedata = await data.json();
        console.log(parsedata);
        this.setState(
            {
                ariticles: parsedata.articles,
                loading:false
                // page:this.state.page+1
            }
            )
        }
        handleonnextclick = async () => {
            let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.catagory}&apiKey=330fd9a7c6a04b82b832e2740211a86e&page=${this.state.page + 1}&pagesize=10`;
            this.setState(
                {
                loading:true
            }
            )
            let data = await fetch(url);
        let parsedata = await data.json();
        console.log(parsedata);
        this.setState(
            {
                ariticles: parsedata.articles,
                page: this.state.page + 1,
                loading:false

            }
            )
        }
        handleonprevclick = async () => {
            let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.catagory}&apiKey=330fd9a7c6a04b82b832e2740211a86e&page=${this.state.page - 1}&pagesize=10`;
        this.setState(
            {
                loading:true
            }
            )
            let data = await fetch(url);
            let parsedata = await data.json();
        console.log(parsedata);
        this.setState(
            {
                ariticles: parsedata.articles,
                page: this.state.page - 1,
                loading:false
                
            }
        )
        
    }

    
    
    render() {
        let {catagory}=this.props;
        return (
          
            
            <div className='container my-3' >
                <div className="container d-flex justify-content-center text-light">
                    <h2> This is a news component</h2>
                </div>
               {this.state.loading &&<Spinner  />} 
                {
                    !this.state.loading && <div className="row" >
                    {
                        this.state.ariticles.map((element) => {
                            return <div className='col-md-4'>
                                <NewsItem title={element.title?element.title.slice(0,60):" "} description={element.description?element.description.slice(0,130):" "} url={element.urlToImage} completenews={element.url} author={element.author} date={element.publishedAt} />
                            </div>
                        })
                    }
                

                </div>}
                <div className="d-flex justify-content-between">
                    <button type="button" className="btn btn-dark" color="white" onClick={this.handleonprevclick} disabled={this.state.page < 2}> &laquo; Previous</button>
                    <button type="button" className="btn btn-dark" color="white" onClick={this.handleonnextclick} disabled={this.state.page === 7}>Next &raquo;</button>
                </div>

            </div>

        )
    }
}

