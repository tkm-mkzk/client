import { List, ListItemButton, ListItemText, Typography } from '@mui/material'
import React from 'react'

const Sidebar = ({ setCategory }) => {
    return (
        <>
            <Typography
                sx={{
                    bgcolor: 'blue',
                    color: 'white',
                    padding: 1,
                }}>
                カテゴリ
            </Typography>

            <List component={'nav'}>
                <ListItemButton onClick={() => setCategory('all')}>
                    <ListItemText primary="全て"></ListItemText>
                </ListItemButton>
                <ListItemButton onClick={() => setCategory('movie')}>
                    <ListItemText primary="映画"></ListItemText>
                </ListItemButton>
                <ListItemButton onClick={() => setCategory('tv')}>
                    <ListItemText primary="TV"></ListItemText>
                </ListItemButton>
            </List>
        </>
    )
}

export default Sidebar
