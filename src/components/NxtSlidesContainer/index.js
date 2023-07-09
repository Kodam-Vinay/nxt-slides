import {Component} from 'react'
import {v4 as uuidV4} from 'uuid'

import Header from '../Header'
import './index.css'
import SlideItem from '../SlideItem'

const initialSlidesList = [
  {
    id: 'cc6e1752-a063-11ec-b909-0242ac120002',
    heading: 'Welcome',
    description: 'Rahul',
  },
  {
    id: 'cc6e1aae-a063-11ec-b909-0242ac120002',
    heading: 'Agenda',
    description: 'Technologies in focus',
  },
  {
    id: 'cc6e1e78-a063-11ec-b909-0242ac120002',
    heading: 'Cyber Security',
    description: 'Ethical Hacking',
  },
  {
    id: 'cc6e1fc2-a063-11ec-b909-0242ac120002',
    heading: 'IoT',
    description: 'Wireless Technologies',
  },
  {
    id: 'cc6e20f8-a063-11ec-b909-0242ac120002',
    heading: 'AI-ML',
    description: 'Cutting-Edge Technology',
  },
  {
    id: 'cc6e2224-a063-11ec-b909-0242ac120002',
    heading: 'Blockchain',
    description: 'Emerging Technology',
  },
  {
    id: 'cc6e233c-a063-11ec-b909-0242ac120002',
    heading: 'XR Technologies',
    description: 'AR/VR Technologies',
  },
]

class NxtSlidesContainer extends Component {
  state = {
    activeSlide: initialSlidesList[0].id,
    slidesList: initialSlidesList,
    headingClicked: false,
    descriptionClicked: false,
    headingText: initialSlidesList[0].heading,
    descriptionText: initialSlidesList[0].description,
    slideNum: 1,
  }

  changeActiveSlideItem = (id, heading, description, slideNum) => {
    this.setState({
      activeSlide: id,
      headingText: heading,
      descriptionText: description,
      slideNum,
    })
  }

  onAddClick = () => {
    const {slideNum, slidesList} = this.state
    const id = uuidV4()
    const newSlide = {
      id,
      heading: 'Heading',
      description: 'Description',
    }
    const addToPosition = [
      ...slidesList.slice(0, slideNum),
      newSlide,
      ...slidesList.slice(slideNum),
    ]

    this.setState({
      slidesList: [...addToPosition],
      activeSlide: id,
      headingText: 'Heading',
      descriptionText: 'Description',
    })
  }

  changeStateHeading = () => {
    this.setState({headingClicked: true})
  }

  changeStateDescription = () => {
    this.setState({descriptionClicked: true})
  }

  onChangeHeading = event => {
    const {activeSlide} = this.state
    this.setState(prevState => ({
      slidesList: prevState.slidesList.map(eachSlide => {
        if (eachSlide.id === activeSlide) {
          return {...eachSlide, heading: event.target.value}
        }
        return eachSlide
      }),
      headingText: event.target.value,
    }))
  }

  onChangeDescription = event => {
    const {activeSlide} = this.state
    this.setState(prevState => ({
      slidesList: prevState.slidesList.map(eachSlide => {
        if (eachSlide.id === activeSlide) {
          return {...eachSlide, description: event.target.value}
        }
        return eachSlide
      }),
      descriptionText: event.target.value,
    }))
  }

  onKeyDownPressHeading = () => {
    this.setState({headingClicked: false})
  }

  onKeyDownPressDescription = () => {
    this.setState({descriptionClicked: false})
  }

  render() {
    const {
      slidesList,
      activeSlide,
      headingClicked,
      descriptionClicked,
      headingText,
      descriptionText,
    } = this.state
    console.log(activeSlide)
    const activeSlideDetails = slidesList.find(
      eachSlide => eachSlide.id === activeSlide,
    )
    const {heading, description} = activeSlideDetails
    return (
      <div className="NxtSlidesMainContainer">
        <Header />
        <div className="SlidesShowBgContainer">
          <div className="slide-left-side-container">
            <button
              type="button"
              className="add-button"
              onClick={this.onAddClick}
            >
              <img
                src="https://assets.ccbp.in/frontend/react-js/nxt-slides/nxt-slides-plus-icon.png"
                alt="new plus icon"
              />
              New
            </button>
            <ol>
              {slidesList.map((eachSlide, index) => (
                <SlideItem
                  key={eachSlide.id}
                  slidesList={eachSlide}
                  changeActiveSlideItem={this.changeActiveSlideItem}
                  isActive={activeSlide === eachSlide.id}
                  slideNumber={index + 1}
                />
              ))}
            </ol>
          </div>
          <div className="slide-right-side-container">
            <div className="slide-right-side-text-container">
              {headingClicked ? (
                <input
                  type="text"
                  className="input-element input-heading-element"
                  onChange={this.onChangeHeading}
                  value={headingText}
                  onBlur={this.onKeyDownPressHeading}
                />
              ) : (
                <h1
                  className="slide-right-side-text-container-heading"
                  onClick={this.changeStateHeading}
                >
                  {heading}
                </h1>
              )}

              {descriptionClicked ? (
                <input
                  type="text"
                  className="input-element input-description-element"
                  onChange={this.onChangeDescription}
                  value={descriptionText}
                  onBlur={this.onKeyDownPressDescription}
                />
              ) : (
                <p
                  className="slide-right-side-text-container-description"
                  onClick={this.changeStateDescription}
                >
                  {description}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default NxtSlidesContainer
