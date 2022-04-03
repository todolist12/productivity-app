import { Modal, Select } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { Form } from 'react-bootstrap';

const AddChildModal = ({ modalOpen, setModalOpen, section, handleAddChild }) => {
    const [name, setName] = useState('');
    const [color, setColor] = useState('gray');
    const [board, setBoard] = useState(false);

    const closeModal = (e) => {
        e.stopPropagation();
        try{
            setModalOpen(false)
        }
        catch(error) {
            console.error(error)
        }
    }

    return (
            <Modal
                open={modalOpen}
                onClose={e => e.stopPropagation()}
                onClick={e => e.stopPropagation()}
                className = 'flex items-center justify-center'
            >
                <form className = 'w-3/6 bg-1 rounded-lg flex flex-col overflow-hidden text-color-1' onSubmit={e => {handleAddChild(e, section.name, name, color, board); closeModal(e)}}>
                    <div className = 'flex items-center justify-between p-4 bg-2'>
                        <div className = 'text-xl font-bold'>
                            Add {section.name.toLowerCase().slice(0, -1)}
                        </div>
                        <button onClick={closeModal} className = 'ion-red text-2xl flex items-center justify-center btn-hover'>
                            <ion-icon name="close-outline" className = ''></ion-icon>
                        </button>
                    </div>
                    <div className = 'flex bg-1 p-4 flex-col'>
                        <div className = 'flex flex-col mb-3'>
                            <div className='font-bold pb-2'>
                                Name
                            </div> 
                            <input required value = {name} onChange={e => setName(e.target.value)} className = 'outline-none bg-1 border-1 rounded p-2 text-sm'/>
                        </div>
                        <div className = 'flex flex-col mb-3'>
                            <div className='font-bold pb-2'>
                                Color
                            </div> 
                            {/* <input required value = {color} onChange={e => setColor(e.target.value)} className = 'outline-none bg-1 border-1 rounded p-2 text-sm'/> */}
                            <Form.Select value = {color} onChange = {e => setColor(e.target.value)} size='lg' className = 'outline-none bg-1 border-1 rounded p-2 text-sm'>
                                <option>gray</option>
                                <option>red</option>
                                <option>blue</option>
                                <option>green</option>
                                <option>yellow</option>
                                <option>black</option>
                            </Form.Select>
                            </div>
                        <div className = 'flex flex-col mb-3'>
                            <div className='font-bold pb-2'>
                                Board
                            </div>
                            <input type='checkbox' checked = {board} onChange={() => setBoard(!board)} />
                        </div>
                    </div>
                    <div className='bg-2 p-3 flex items-center justify-end'>
                        <button className = 'mr-4 p-2 bg-gray-300 rounded text-black font-bold hover' onClick={closeModal}>
                            Cancel
                        </button>
                        <button className = 'p-2 bg-4 rounded text-white font-bold hover' type='submit'>
                            Add 
                        </button>
                    </div>
                </form>
            </Modal>
    )
}

export default AddChildModal