export default function Search(props) {
  
  return (
    <div className={`row ${props.classname}`}>
      <h2 className="col l-o-6 l-3 m-6 c-6">Search for product</h2>
        <input className="col l-3 m-6 c-6" 
        type="search" 
        placeholder={props.placeholder}
        onChange={props.onSearchHandler}/>
    </div>
  )
}
