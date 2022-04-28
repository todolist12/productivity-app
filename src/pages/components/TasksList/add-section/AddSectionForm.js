import React, { useState } from 'react'
import { classes } from '../../../../utils/classes';

const AddSectionForm = ({
        visible, 
        setVisible,
        handleAddSection,
        handleEditSection,
        name,
        editSection,
        section,
    }) => {

    const [nameInput, setNameInput] = useState(name ? name : '');

    return (
        <>
            {
                visible && 
                <div className = 'bg-1 p-2 rounded flex flex-col'>
                    <input 
                        className = {classes.addTaskFormInput}
                        placeholder = 'Section name'
                        value = {nameInput}
                        onChange = {e => setNameInput(e.target.value)}
                    />
                    <div className = 'flex justify-end items-center'>
                        <button 
                            className = {classes.btnSecondary} 
                            onClick = {e => {setVisible(true); setNameInput('');}}
                        >
                            Cancel
                        </button>
                        <button 
                            className = {classes.btnPrimary + 'ml-2'}
                            disabled = {(nameInput === '')}
                            onClick = {e => {
                                e.stopPropagation();
                                if(editSection) {
                                    handleEditSection(
                                        nameInput, 
                                        section,
                                    );
                                    setNameInput('')
                                    setVisible(false)
                                } else {
                                    handleAddSection(
                                        nameInput, 
                                    );
                                    setNameInput('')
                                }
                            }}
                        >
                            {
                                editSection ? 
                                    'Done' :
                                    'Add Section'
                            }
                        </button>
                    </div>
                </div>
            }   
        </>
    )
}

export default AddSectionForm