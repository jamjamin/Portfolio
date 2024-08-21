import React from 'react'

export default function Edit() {
    return (
        <div>
            <h1> Edit Project </h1>

            <form>
                <label> Title: </label><input type='text'/><br/>
                <label> Type: </label><input type='text'/><br/>
                <label> Thumbnail: </label><br/>
                <label> Description: </label><textarea/><br/>
                <label> Tags: </label><br/>
                <div className='admin-project-details'>
                    <label> Overview: </label><textarea/><br/>
                    <label> Links: </label><br/>
                    <label> Members: </label><br/>
                    <label> Technologies: </label><br/>
                    <label> Languages: </label><br/>
                </div>
            </form>
        </div>
    )
}


