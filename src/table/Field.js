import React from 'react'

export const Field = (
    {
        altSpellings,
        capital,
        region, 
        languages, 
        population, 
        flags:{png},
        setShowAlert,
        setinfo
    }) => {

    const handleClic = (OficialName) => {
        fetch(`https://en.wikipedia.org/api/rest_v1/page/summary/${OficialName}`)
        .then(response => response.json())
        .then(data =>{      
            setinfo(data.extract_html);               
            setShowAlert(true);
        });      
    }

    return (             
        <tr onClick = {()=>handleClic(altSpellings[altSpellings.length-1])}>
            <td>{altSpellings[altSpellings.length-1]}</td>
            <td>{capital}</td>
            <td>{region}</td>
            <td>
                {
                    languages &&
                    Object.keys(languages).map(key=> (
                        languages[key]
                    ))          
                }
            </td>
            <td>{population}</td>
            <td>
                <img className="image" src = {png} alt = {''} />
            </td>                
        </tr>
    )
}