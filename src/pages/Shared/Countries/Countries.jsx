import { useEffect, useState } from "react";
import Country from "../../../components/Country/Country";

const Countries = () => {

    const [countries, setCountries] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5001/countries')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setCountries(data)
            });
    })
    return (
        <div className="container mx-auto flex flex-col items-center mt-10">
            <h2 className="text-4xl font-semibold text-purple-700 text-center mb-10">Countries in Southeast Asia</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {
                    countries?.map(country => <Country key={country._id} country={country}></Country>)
                }
            </div>
        </div>
    );
};

export default Countries;