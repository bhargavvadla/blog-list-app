import './index.css'

const BlogList = props => {
  const {blog} = props
  const {id, title, description, publishedDate} = blog

  return (
    <li className="blog-list-item" key={id}>
      <div className="blog-header">
        <h1 className="blog-title">{title}</h1>
        <p className="blog-date">{publishedDate}</p>
      </div>
      <p className="blog-description">{description}</p>
    </li>
  )
}

export default BlogList
