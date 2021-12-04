import React from 'react'
import Select from 'react-select'

function Filters({style, filter1, filter2, filter3, onChange1, onChange2, onChange3}) {
    return (
        <>
        <div style={style}>
        <Select options={filter1} onChange={onChange1} />
        </div>
        <div style={style}>
        <Select options={filter2} onChange={onChange2}/>
        </div>
        <div style={style}>
        <Select options={filter3} onChange={onChange3}/>
        </div>
        </>
    )
}

export default Filters
