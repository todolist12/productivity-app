import React from 'react'

const AddSectionForm = ({
        children, 
        visible, 
        setVisible,
        handleAddSection,
        handleEditSection,
        handleDeleteSection, 
        name,
        editSection,
        section,
        path,
    }) => {

    const [nameInput, setNameInput] = useState(name ? name : '');

    return (
        <div>
            
        </div>
    )
}

export default AddSectionForm