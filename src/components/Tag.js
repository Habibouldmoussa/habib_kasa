import Styles from './Tag.module.css'
function Tag(props) {
    const tags = props.tags
    return (
        <div className={Styles.tags}> 
            {tags.map((tag) => (
                <span key={tag}>{tag} </span>
            ))}
        </div>
    )
}
export default Tag