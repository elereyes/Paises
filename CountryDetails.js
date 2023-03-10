import axios from "axios"

const CountryDetails = ({ country }) => {
    const response = axios.get()
    return (
        <>
        <h1>{country.name}</h1>
        <div>capital {country.capital}</div>
        <div>area {country.area}</div>
        <h2>languages:</h2>
        <ul>
          {Object.values(country.languages).map(language => (
          <li key={language}>{language}</li>
          ))}
        </ul>
        <div>
            <img src={country.flags.png} alt={`${country.name}flag`}/>
        </div>
        <h2>Weather in {country.capital[0]}</h2>
      </>
    )    
}
export default CountryDetails 