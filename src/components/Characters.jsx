import React from 'react'

const characters = ({characters = []}) => {
    return (
        <div className="row">
            {
                characters.map((item, index) => (
                    <div key={index} className='col mb-4 '>
                        <div className='card'>
                            <img src={item.image} alt="" />
                            <div className='card-body'>
                                <h5 className='card-title'>{item.name}</h5>
                                <hr />
                                <p><b>Especie:</b> {item.species}</p>
                                <p><b>Género:</b> {item.gender}</p>
                                <p><b>Status:</b> {item.status}</p>
                                <p><b>Locación: </b> {item.location.name}</p>
                            </div>
                        </div>
                    </div>
                ))
            }
            
        </div>
    )
}

export default characters