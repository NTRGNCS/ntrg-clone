import { useParams, Link } from 'react-router-dom'
import useReveal from '../components/useReveal.js'
import GetInTouch from '../components/GetInTouch.jsx'
import { posts } from '../data/content.js'
export default function Post() {
  useReveal()
  const { slug } = useParams()
  const post = posts.find(p => p.slug === slug) || posts[0]
  return (<>
    <section className="post-hero">
      <div className="wrap post-hero__inner">
        <div className="post-hero__meta">{post.date} — By {post.author}</div>
        <h1 className="post-hero__title gold-text">{post.title}</h1>
      </div>
    </section>
    <section className="section">
      <div className="wrap post-body">
        <img className="post-body__img" src={post.image} alt="" />
        {post.body.map((blk, i) => (
          <div key={i}>
            {blk.h && <h3>{blk.h}</h3>}
            <p>{blk.p}</p>
          </div>
        ))}
        <Link to="/insights" className="post-back">← Back to all posts</Link>
      </div>
    </section>
    <GetInTouch />
  </>)
}
