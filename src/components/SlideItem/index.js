import './index.css'

const SlideItem = props => {
  const {slidesList, isActive, changeActiveSlideItem, slideNumber} = props
  const {id, description, heading} = slidesList
  const changeBackground = isActive ? 'apply-background' : ''
  const changeActiveSlide = () => {
    changeActiveSlideItem(id, heading, description, slideNumber)
  }
  return (
    <li
      onClick={changeActiveSlide}
      testid={`slideTab${slideNumber}`}
      className={`Each-slide-list-item-container ${changeBackground}`}
    >
      <p className="Each-slide-number">{slideNumber}</p>
      <div className="slide-list-item">
        <h1>{heading}</h1>
        <p>{description}</p>
      </div>
    </li>
  )
}
export default SlideItem
