import pack from './vars'
import CloseButton from './CloseButton'
const { buttonColor } =pack
const projectLink = ({linkString,linkDesc}) => 
  <a target="_blank" className={"article-links waves-effect waves-green btn-large"+buttonColor} href={linkString}>{linkDesc}</a>
const SingleProject = ({ id }) => {
    const { img, alt, text, title, url, urlExample } = pack.projects[id]
    return (
      <div  className="fakeContajner">
        <section className="article">
            <CloseButton />
            <h2 className="articleTitle"><span className="card-title">{title}</span></h2>
            <img className="articleImg" src={img} alt={alt}/>
          <div className="card-action">
            {projectLink({linkString:url, linkDesc:'code on github'})}
            {projectLink({linkDesc:'live example', linkString:urlExample})}
          </div>
            <p className="singleProjectDesc">{text}</p>
        </section>
      </div>
    )
  }
export default SingleProject