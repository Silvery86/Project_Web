

export default function Search(props) {
  const onSearchChange = (event) => {
    props.searchValue(event.target.value.toLocaleLowerCase())
  }
  return (
    <div className="search-box row">
      <h2 className="col l-o-6 l-3 m-6 c-6">Search for product</h2>
        <input className="col l-3 m-6 c-6" type="search" placeholder="Search product" onChange={onSearchChange}/>
    </div>
  )
}
