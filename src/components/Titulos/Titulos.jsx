
const Titulos = (props) => {
    const {h1,p}   = props;
    return (
        <>
        <div className="font-dela text-white" >
            <h1>{h1}</h1>
        </div>
        <div className="font-sans" >
            <p>{p}</p>
        </div>
            </>
    )
}
export default Titulos;