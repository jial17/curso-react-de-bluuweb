
const Frutas = () => {
    const frutas = ["🍉", "🍏", "🍌", "🍒"];
  return (
    <div>
        <ul>
            {
            frutas.map((fruta, index) => (
            <li key= {fruta}>{index+1} - {fruta}</li>
            ))
            }
        </ul>
    </div>
  )
}

export default Frutas