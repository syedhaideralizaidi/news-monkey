import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";

export class News extends Component {
  static defaultProps = {
    country: "us",
    pageSize: 8,
    category: "general",
  };
  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  };

  articles = [
    {
      source: { id: "news24", name: "News24" },
      author: "Sibusiso Mjikeliso",
      title:
        "Cricket SA wants to 'get to the bottom' of Nkwe resignation concerns, says CEO | Sport",
      description:
        "Acting Cricket South Africa CEO Pholetsi Moseki says the board is concerned about the issues former Proteas assistant coach Enoch Nkwe raised in his resignation.",
      url: "https://www.news24.com/sport/Cricket/Proteas/cricket-sa-wants-to-get-to-the-bottom-of-nkwe-resignation-concerns-says-ceo-20210826",
      urlToImage:
        "https://cdn.24.co.za/files/Cms/General/d/10743/97d776dc91734e98906c0e1b7f3b1afa.jpg",
      publishedAt: "2021-08-26T11:40:16+00:00",
      content:
        '<ul><li>Cricket South Africa has committed to "getting to the bottom" of Enoch Nkwe\'s sudden resignation as Proteas assistant coach. </li><li>Nkwe voiced concerns with the current culture and working… [+3497 chars]',
    },
    {
      source: { id: "abc-news-au", name: "ABC News (AU)" },
      author: "ABC News",
      title: "England cricket great Ted Dexter dies aged 86",
      description:
        'The former England captain, nicknamed "Lord Ted", is fondly remembered as a giant of the game and one of his country\'s greatest players.',
      url: "http://www.abc.net.au/news/2021-08-26/england-cricket-great-ted-dexter-dies-aged-86/100411276",
      urlToImage:
        "https://live-production.wcms.abc-cdn.net.au/1006c7ecf34ec0935eef2aade5017711?impolicy=wcms_crop_resize&cropH=2815&cropW=5004&xPos=0&yPos=223&width=862&height=485",
      publishedAt: "2021-08-26T09:07:52Z",
      content:
        "Former England captain Ted Dexter has died aged 86 following a recent illness.\r\n<ul><li>Dexter played 62 Tests for England and was captain on 30 occasions</li><li>He was inducted into the ICC Hall of… [+1746 chars]",
    },
    {
      source: { id: "espn-cric-info", name: "ESPN Cric Info" },
      author: null,
      title:
        "PCB hands Umar Akmal three-year ban from all cricket | ESPNcricinfo.com",
      description:
        "Penalty after the batsman pleaded guilty to not reporting corrupt approaches | ESPNcricinfo.com",
      url: "http://www.espncricinfo.com/story/_/id/29103103/pcb-hands-umar-akmal-three-year-ban-all-cricket",
      urlToImage:
        "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg",
      publishedAt: "2020-04-27T11:41:47Z",
      content:
        "Umar Akmal's troubled cricket career has hit its biggest roadblock yet, with the PCB handing him a ban from all representative cricket for three years after he pleaded guilty of failing to report det… [+1506 chars]",
    },
    {
      source: { id: "espn-cric-info", name: "ESPN Cric Info" },
      author: null,
      title:
        "What we learned from watching the 1992 World Cup final in full again | ESPNcricinfo.com",
      description:
        "Wides, lbw calls, swing - plenty of things were different in white-ball cricket back then | ESPNcricinfo.com",
      url: "http://www.espncricinfo.com/story/_/id/28970907/learned-watching-1992-world-cup-final-full-again",
      urlToImage:
        "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg",
      publishedAt: "2020-03-30T15:26:05Z",
      content:
        "Last week, we at ESPNcricinfo did something we have been thinking of doing for eight years now: pretend-live ball-by-ball commentary for a classic cricket match. We knew the result, yes, but we tried… [+6823 chars]",
    },
    {
      source: {
        id: null,
        name: "WION",
      },
      author: "WION Web Team",
      title:
        "Radio signal that took 8 billion years to reach Earth came from seven interacting galaxies - WION",
      description:
        "Radio signal that took 8 billion years to reach Earth came from seven interacting galaxies",
      url: "https://www.wionews.com/science/source-of-mysterious-radio-signal-that-took-8-billion-years-to-reach-earth-revealed-678566",
      urlToImage:
        "https://cdn.wionews.com/sites/default/files/2024/01/10/404873-frbs.png",
      publishedAt: "2024-01-11T05:46:04Z",
      content:
        "Scientists have uncovered the source of the mysterious radio signal that took eight billion years to reach us.\r\nA new research presented during the 243rd meeting of the American Astronomical Society … [+2318 chars]",
    },
    {
      source: {
        id: null,
        name: "Yahoo Entertainment",
      },
      author: "Julia Love and Davey Alba",
      title:
        "Google lays off hundreds in hardware, voice assistant teams - Yahoo Finance",
      description:
        "(Bloomberg) -- Alphabet Inc.’s Google is laying off hundreds of staff working on its digital assistant, hardware and engineering teams as it sustains a drive...",
      url: "https://finance.yahoo.com/news/google-lays-off-hundreds-hardware-041348770.html",
      urlToImage:
        "https://s.yimg.com/ny/api/res/1.2/Z.WP6xhuZp3lvTBIgQ05Kg--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD04MDA-/https://media.zenfs.com/en/bloomberg_technology_68/cb9306025a7edc3db7cb4af2c0e4cb0f",
      publishedAt: "2024-01-11T05:30:00Z",
      content:
        "(Bloomberg) -- Alphabet Inc.s Google is laying off hundreds of staff working on its digital assistant, hardware and engineering teams as it sustains a drive to cut costs.\r\nMost Read from Bloomberg\r\nT… [+2608 chars]",
    },
    {
      source: {
        id: "usa-today",
        name: "USA Today",
      },
      author:
        "Anthony Robledo, Christopher Cann, Jeanine Santucci, Minnah Arshad",
      title:
        "Winter storm updates: Power outages, flooding across Northeast - USA TODAY",
      description:
        "Thousands across the mid-Atlantic and New England were without power Wednesday as a powerful winter storm tore across the region.",
      url: "https://www.usatoday.com/story/news/weather/2024/01/10/winter-storm-snow-floods-power-outages-live-updates/72170001007/",
      urlToImage:
        "https://www.usatoday.com/gcdn/authoring/authoring-images/2024/01/10/PAPP/72176847007-flooddh-011024-c.jpg?crop=5019,2824,x0,y278&width=3200&height=1801&format=pjpg&auto=webp",
      publishedAt: "2024-01-11T05:15:28Z",
      content:
        "A massive winter storm dumped rain across the Northeast on Wednesday, flooding roads, closing schools and knocking out power the day after barreling through the south, leaving at least five dead in i… [+12902 chars]",
    },
    {
      source: {
        id: null,
        name: "9News.com KUSA",
      },
      author: "Jennifer Meckles",
      title:
        "Does it feel like everyone is getting sick? Flu, COVID and RSV are all circulating through Colorado - 9News.com KUSA",
      description:
        "Much like a lingering holiday guest, the crud is sticking around longer than anyone wants.",
      url: "https://www.9news.com/article/news/health/flu-covid-rsv-circulating-colorado/73-b6fe9739-8b8c-47a3-92d6-5c4c4337c172",
      urlToImage:
        "https://media.9news.com/assets/KUSA/images/ce281db6-1af3-4ad3-a5cf-8acee9b401cd/ce281db6-1af3-4ad3-a5cf-8acee9b401cd_1140x641.jpg",
      publishedAt: "2024-01-11T05:09:00Z",
      content:
        "COLORADO, USA 'Tis the season!\r\nFresh off the holidays, and now in the heart of winter, respiratory viruses are making their seasonal rounds through Colorado. And much like a lingering guest, the cru… [+2625 chars]",
    },
    {
      source: {
        id: "associated-press",
        name: "Associated Press",
      },
      author: "BRIAN MELLEY",
      title:
        "A British postal scandal ruined hundreds of lives. The government plans to try to right those wrongs - The Associated Press",
      description:
        "British Prime Minister Rishi Sunak says he will introduce measures to reverse the convictions of more than 900 Post Office branch managers wrongly accused of theft or fraud because of a faulty computer system. The measure announced Wednesday follows a TV docu…",
      url: "https://apnews.com/article/britain-post-office-scandal-conviction-exoneration-2fa70dd0c0b5ac1850e031e5534f7392",
      urlToImage:
        "https://dims.apnews.com/dims4/default/6b82085/2147483647/strip/true/crop/7582x4265+0+395/resize/1440x810!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2Fd3%2F9f%2F6f157885d6518bbbc131806a7223%2Ff61826494bde447e9be5384f81c686de",
      publishedAt: "2024-01-11T05:06:24Z",
      content:
        "LONDON (AP) British Prime Minister Rishi Sunak has said he will introduce measures to reverse the convictions of more than 900 Post Office branch managers wrongly accused of theft or fraud because of… [+6269 chars]",
    },
  ];

  capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  constructor(props) {
    super(props);
    this.state = {
      articles: this.articles,
      loading: false,
      page: 1,
      totalResults: 20,
    };
    document.title = `${this.capitalizeFirstLetter(
      this.props.category
    )} - NewsMonkey`;
  }

  async updateNews() {
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=427ce3547fa74de39bede119e7f257ea&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false,
    });
    console.log("Updated now page:", this.state.articles);
  }

  async componentDidMount() {
    this.updateNews();
    console.log(
      "First mount",
      this.state.page,
      this.state.totalResults,
      this.props.pageSize
    );
  }

  handlePrevClick = async () => {
    this.setState({ page: this.state.page - 1 });
    this.updateNews();
  };

  handleNextClick = async () => {
    // if (
    //   this.state.page + 1 <
    //   Math.ceil(this.state.totalResults / this.props.pageSize)
    // ) {
    this.setState({ page: this.state.page + 1 });
    this.updateNews();
    // }
  };

  render() {
    return (
      <>
        <div className="container my-3">
          <h2 className="text-center" style={{ margin: "40px 0px" }}>
            NewsMonkey - Top {this.capitalizeFirstLetter(this.props.category)}{" "}
            Headlines
          </h2>
          {this.state.loading && <Spinner />}
          <div className="row">
            {!this.state.loading &&
              this.state.articles.map((element) => {
                return (
                  <div className="col-md-4" key={element.url}>
                    <NewsItem
                      title={element.title ? element.title.slice(0, 45) : ""}
                      description={
                        element.description
                          ? element.description.slice(0, 88)
                          : ""
                      }
                      imageUrl={
                        element.urlToImage
                          ? element.urlToImage
                          : "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg"
                      }
                      newsUrl={element.url}
                      author={element.author ? element.author : "Unknown"}
                      date={new Date(element.publishedAt).toGMTString()}
                      source={element.source.name}
                    />
                  </div>
                );
              })}
          </div>
        </div>

        <div className="container">
          <div className="d-flex justify-content-between my-3">
            <button
              disabled={this.state.page <= 1}
              type="button"
              className="btn btn-dark"
              onClick={this.handlePrevClick}
            >
              Previous
            </button>
            <button
              disabled={
                this.state.page >=
                Math.ceil(this.state.totalResults / this.props.pageSize)
              }
              type="button"
              className="btn btn-dark"
              onClick={this.handleNextClick}
            >
              Next
            </button>
          </div>
        </div>
      </>
    );
  }
}

export default News;
