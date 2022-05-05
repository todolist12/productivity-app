import { SegmentedControl } from '@mantine/core'
import React, { useState } from 'react'
import { classes } from '../../../../utils/classes'
import Box from '../../../components/Box'

const DayHeader = ({ date, day, month, year, setListView, listView }) => {

    return (
        <Box className = {classes.headerContainer}>
            <div className = {classes.headerTitle}>
                {day + '-' + month + '-' + year}
            </div>
            <div>
                <SegmentedControl 
                    value = {listView}
                    onChange = {e => setListView(e)}
                    data = {[
                        {value: 'board',
                        label: 'Board'},
                        {value: 'list',
                        label: 'List',}
                    ]}
                    className = 'bg-2'
                />
            </div>
        </Box>
    )
}

export default DayHeader