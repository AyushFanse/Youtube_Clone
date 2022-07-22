import React, { useEffect } from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import ContentDisplay from '../../Components/Menu/YT_Content_Display'
import NavigationMenu from '../../Components/Menu/YT_Navigation_Menu'
import { Grid, Box } from '@mui/material'
import './display.css'

const Display = () => {

    useEffect(() => {
        const yt_Home_display = document.querySelector('.App')
        const content_settings = document.querySelectorAll('.content_settings')
        const upload_video_out = document.querySelector('.upload_video_out')
        const notification_out = document.querySelector('.notification_out')
        const account_out = document.querySelector('.account_out')


        yt_Home_display.addEventListener('click', () => {
            content_settings.forEach((item) => {
                item.classList.remove('active')
            })

            upload_video_out.classList.remove('active')
            notification_out.classList.remove('active')
            account_out.classList.remove('active')
        })
    }, [])

    return (
        <>
            <div className='App'>
                <Navbar Page='Home' />
                <Grid className='yt_Home_display row'>
                    <Box className="navigation_section_out srink_nav active" >
                        <NavigationMenu />
                    </Box>
                    <Box className="yt_data_display_out">
                        <ContentDisplay />
                    </Box>
                </Grid>
            </div>
        </>
    );
}

export default Display