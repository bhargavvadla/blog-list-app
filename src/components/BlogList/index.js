import BlogItem from '../BlogItem'
import './index.css'

const BlogList = props => {
  const {blogsList} = props

  return (
    <div className="blogs-list">
      <ul className="blogs-responsive">
        {blogsList.map(eachBlog => (
          <BlogItem key={eachBlog.id} blog={eachBlog} />
        ))}
      </ul>
    </div>
  )
}

export default BlogList
