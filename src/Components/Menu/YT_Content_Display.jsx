import React from 'react';
import { Box } from '@mui/material'
import { MoreVert } from '@mui/icons-material'

const YT_Content_Display = () => {

    let Data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    const MenuPopup = ((e) => {
        const content_settings = document.querySelectorAll('.content_settings')

        content_settings.forEach((item) => {
            return item === e.currentTarget
                ? e.currentTarget.classList.toggle('active')
                : item.classList.remove('active')
        })
    })

    return (
        <>
            <Box className='content_display_card_out flex row'>
                {
                    Data.map((i) => (
                        <div className='content_display_card' key={i}>
                            <div className='content_image'>
                                <iframe
                                    width="560"
                                    height="315"
                                    src="https://www.youtube.com/embed/AZ16IdCUPIk"
                                    title="YouTube video player"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                >
                                </iframe>
                            </div>
                            <div className="content_display_card_info flex">
                                <div>
                                    <img
                                        src="https://d5nunyagcicgy.cloudfront.net/external_assets/hero_examples/hair_beach_v391182663/result.jpeg"
                                        alt=""
                                    />
                                </div>
                                <div className='content_data flex column'>
                                    <div className='content_data_title_out'>
                                        <b className='content_data_title'>
                                            New Channel New Channel New Channelrr New Channel....
                                        </b>
                                    </div>
                                    <div className='channel_content_data flex column'>
                                        <a href='#s' className='channel_title'>Boom Boom</a>
                                        <div className='content_views_and_duration flex row'>
                                            <div className='content_views'>12k views</div>
                                            •
                                            <div className='content_duration'>2 days ago</div>
                                        </div>
                                    </div>
                                </div>
                                <div className='content_settings' onClick={MenuPopup} >

                                    <MoreVert className='icon MoreVert' />

                                    <div className='content_settings_data_out dropdown_menu_data_out flex column'>
                                        <div className='dropdown_menu_data flex row icon'>
                                            <span className="material-symbols-outlined dropdown_menu_data_icons">
                                                home
                                            </span>
                                            <span className='dropdown_menu_data_title'>Home</span>
                                        </div>
                                        <div className='dropdown_menu_data flex row icon'>
                                            <span className="material-symbols-outlined dropdown_menu_data_icons">
                                                schedule
                                            </span>
                                            <span className='dropdown_menu_data_title'>Save to Watch Later</span>
                                        </div>
                                        <div className='dropdown_menu_data flex row icon'>
                                            <span className="material-symbols-outlined dropdown_menu_data_icons">
                                                playlist_add
                                            </span>
                                            <span className='dropdown_menu_data_title'>Add to playlist</span>
                                        </div>
                                        <div className='dropdown_menu_data flex row icon'>
                                            <span className="material-symbols-outlined dropdown_menu_data_icons">
                                                google_plus_reshare
                                            </span>
                                            <span className='dropdown_menu_data_title'>Share</span>
                                        </div>
                                        <hr style={{ width: '90%' }} />
                                        <div className='dropdown_menu_data flex row icon'>
                                            <span className="material-symbols-outlined dropdown_menu_data_icons">
                                                block
                                            </span>
                                            <span className='dropdown_menu_data_title'>Not interasted</span>
                                        </div>
                                        <div className='dropdown_menu_data flex row icon'>
                                            <span className="material-symbols-outlined dropdown_menu_data_icons">
                                                do_not_disturb_on
                                            </span>
                                            <span className='dropdown_menu_data_title'>Do not recommend</span>
                                        </div>
                                        <div className='dropdown_menu_data flex row icon'>
                                            <span className="material-symbols-outlined dropdown_menu_data_icons">
                                                flag
                                            </span>
                                            <span className='dropdown_menu_data_title'>Report</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </Box>
        </>
    );
}

export default YT_Content_Display;