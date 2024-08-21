'use client'

import React, { use, useEffect, useState } from 'react'
import { FilterMapType } from './ProjectGrid'

type FilterProps = {
    filterMap : FilterMapType
    setFilterMap : (value : FilterMapType) => void
}



export const Filters = ({ filterMap, setFilterMap } : FilterProps) => {

    const handleSearchInput = (e : React.ChangeEvent<HTMLInputElement>) => {
        let search = e.target.value
        setFilterMap({ ...filterMap, search : search})
    }

    const handleTypeChange = (e : React.ChangeEvent<HTMLSelectElement>) => {
        let type = e.target.value != "All" ? e.target.value : ''
        setFilterMap({ ...filterMap, type: type})
    }

    const handleCategoryChange = (e : React.ChangeEvent<HTMLSelectElement>) => {
        let category = e.target.value != "All" ? e.target.value : ''
        setFilterMap({ ...filterMap, category: category})
    }

    const handleTechChange = (e : React.ChangeEvent<HTMLSelectElement>) => {
        let technology = e.target.value != "All" ? e.target.value : ''
        setFilterMap({ ...filterMap, tech: technology})
    }

    const handleLanguageChange = (e : React.ChangeEvent<HTMLSelectElement>) => {
        let language = e.target.value != "All" ? e.target.value : ''
        setFilterMap({ ...filterMap, lang: language})
    }


    return (
        <>
            <input type="text" placeholder='Search Project' className='search-project' onChange={e => handleSearchInput(e)}/>
            <div className='filter-selection'>
                Filters 
                <select name="type" onChange={e => handleTypeChange(e)}>
                    <option> All </option>
                    <option> Website </option>
                    <option> Desktop </option>
                    <option> Mobile </option>
                </select>
                <select name="category" onChange={e => handleCategoryChange(e)}>
                    <option> All </option>
                    <option> Collaborative </option>
                    <option> Experimental </option>
                    <option> University </option>
                </select>
                <select name="tech" onChange={e => handleTechChange(e)}>
                    <option> All </option>
                    <option> NextJS </option>
                    <option> ReactJS </option>
                    <option> NodeJS </option>
                </select>
                <select name="language" onChange={e => handleLanguageChange(e)}>
                    <option> All </option>
                    <option> Java </option>
                    <option> Python </option>
                    <option> JavaScript </option>
                    <option> TypeScript </option>
                </select>
            </div>
        </>
    )
}
