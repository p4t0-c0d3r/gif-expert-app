import React, { useState } from 'react';
import { CategoryAdd } from './components/CategoryAdd';

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch', 'Samurai X', 'Dragon Ball']);

    const bob = (e) => {
        e.preventDefault();
        // spred operator buscar
        setCategories([...categories, 'Ataque a los titanes']);
    }

    return(
        <>
            <h2>GifExpertApp</h2>
            <hr />
            <CategoryAdd />
            <button onClick={bob}>Añadir serie</button>
            <ol>
                {
                    categories.map( category => {
                        return <li key={ category }>{ category }</li>
                    })
                }
            </ol>
        </>
    )
}