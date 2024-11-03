import { useParams } from "react-router-dom"

export default function BookDetails() {
    const param = useParams();
    console.log(param);
  return (
    <div>
        <h1>Book details</h1>
    </div>
  )
}
