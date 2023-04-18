import { Link, useLoaderData } from "react-router-dom"

export default function Careers() {
    const careers = useLoaderData()

    return (
      <div className="careers">
        {careers.map(career => (
          <Link to='/' key={career.id}>
            <p>{career.title}</p>
            <p>Based in {career.location}</p>
          </Link>
        ))}
      </div>
    )
}


// data loader
// can call in other component
export const careersLoader = async () => {
    const res = await fetch('http://localhost:4000/careers') // api json data link

    return res.json()
}