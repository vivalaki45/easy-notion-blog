import DocumentHead from '../components/document-head'
import ExtLink from '../components/ext-link'
import styles from '../styles/page.module.css'

const RenderPage = () => (
  <div className={styles.container}>
    <DocumentHead />

    <div>
      <h2>Welcome!</h2>
      <p>おかずが、知識をアウトプットするためのウェブサイトです。</p>
      <h2>SNS</h2>
      <p>
        <ExtLink href="https://twitter.com/vivala_ki">
          Twitter
        </ExtLink>
      </p>
      <p>
        <ExtLink href="https://www.instagram.com/vivalaki_o/?next=%2F">
          Instagram
        </ExtLink>
      </p>
    </div>
  </div>
)

export default RenderPage
