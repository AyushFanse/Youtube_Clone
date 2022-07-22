import React from 'react'
import './navbar.css'
import { Menu, MicRounded, YouTube, VideoCallOutlined, SearchOutlined, NotificationsNone } from '@mui/icons-material'

const Navbar = () => {


    const Active = () => {
        const navigation_section_out = document.querySelector('.navigation_section_out')
        const navigation_section = document.querySelector('.navigation_section')

        navigation_section_out.classList.toggle('active')
        navigation_section.classList.toggle('active')
    }

    const Theme = () => {
        const root = document.querySelector('.root')
        root.classList.toggle('active')
    }

    const Open = ((e) => {
        e.currentTarget.classList.toggle('active')
    })

    return (
        <>
            <div className="navbar flex ai-c">
                <div className="navbar_tabs flex ai-c row">
                    <span className="menu_icon">
                        <Menu className="icon" onClick={Active} />
                    </span>
                    <span className="site_title_section flex ai-c">
                        <YouTube className='site_icon' id="site_icon" />
                        <span className='site_title'>
                            YouTube
                        </span>
                    </span>
                </div>
                <div className="search_bar_section flex ai-c row">
                    <div className="search_bar flex ai-c row">
                        <div className="search_input flex ai-c row">
                            <input type="text" name="search" placeholder="Search" />
                        </div>
                        <button><SearchOutlined className="icon" /></button>
                    </div>
                    <div className="voice_search flex ai-c">
                        <MicRounded className="icon" />
                    </div>
                </div>
                <div className="profile_section flex ai-c row">
                    <div className='upload_video_out' onClick={Open}>

                        <VideoCallOutlined className="icon" />

                        <div className='upload_video_out_data_out dropdown_menu_data_out flex column'>
                            <div className='dropdown_menu_data flex row icon'>
                                <span className="material-symbols-outlined dropdown_menu_data_icons">
                                    do_not_disturb_on
                                </span>
                                <span className='dropdown_menu_data_title'>Upload Video</span>
                            </div>
                            <div className='dropdown_menu_data flex row icon'>
                                <span className="material-symbols-outlined dropdown_menu_data_icons">
                                    flag
                                </span>
                                <span className='dropdown_menu_data_title'>Go Love</span>
                            </div>
                        </div>
                    </div>
                    <div className='notification_out' onClick={Open}>

                        <NotificationsNone className="icon" /><sup>6</sup>

                        <div className='notification_out_data_out dropdown_menu_data_out flex column'>
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
                    <div className='account_out flex' onClick={Open}>

                        <img
                            className="navbar_profile_image"
                            src="https://d5nunyagcicgy.cloudfront.net/external_assets/hero_examples/hair_beach_v391182663/result.jpeg"
                            alt=""
                        />

                        <div className='account_out_data_out dropdown_menu_data_out flex column'>
                            <div className='dropdown_menu_data flex row icon' onClick={Theme} >
                                <span className="material-symbols-outlined dropdown_menu_data_icons">
                                    dark_mode
                                </span>
                                <span className='dropdown_menu_data_title'>Theme</span>
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
        </>
    );
};

export default Navbar;