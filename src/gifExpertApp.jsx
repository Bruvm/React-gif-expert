
import { useState } from "react"
import {AddCategory, GifGrid} from "./components/index"
export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch'])

    const onAddCategory = (newCategory) => {
        if (categories.includes(newCategory)) return;

        setCategories([newCategory, ...categories ])
        //setCategories(cat => [...cat, 'valorant'])

    }
    return (
        <>
            <h1>GifExperApp</h1>
            <AddCategory
                onNewCategory={onAddCategory}
            />

            {
                categories.map(category => (
                    <GifGrid key={category} category={category} />
                ))
            }


        </>
    )
}
