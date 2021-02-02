import React, { useState } from 'react';
import { CategoryAdd } from './components/CategoryAdd';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch', 'Samurai X', 'Dragon Ball']);

    const bob = (e) => {
        e.preventDefault();
    }

    return(
        <>
            <h2>GifExpertApp</h2>
            <hr />
            <CategoryAdd setCategories = { setCategories }/>
            <button onClick={bob}>Añadir serie</button>
            <ol>
                {
                    categories.map(category => (
                        <GifGrid
                            key={ category }
                            category={ category } 
                        />
                    ))
                }
            </ol>
        </>
    )
}