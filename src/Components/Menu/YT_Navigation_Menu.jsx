import React, { useEffect, useState } from 'react'
import { Grid } from '@mui/material'
import { OfflineShare } from '@mui/icons-material'
import './menu.css'

const NavigationMenu = () => {

    const [size, setSize] = useState(window.innerWidth);

    const showMore = () => {
        let play_list_out_expand_icon = document.querySelector('.play_list_out_expand_icon')
        let play_list_out_expand_title = document.querySelector('.play_list_out_expand_title')
        let play_list_out = document.querySelector('.play_list_out')

        if (play_list_out_expand_icon.innerText === 'expand_more') {
            play_list_out_expand_icon.innerText = 'expand_less';
            play_list_out_expand_title.innerText = 'Show less';
            play_list_out.classList.add('active');
        } else {
            play_list_out_expand_icon.innerText = 'expand_more';
            play_list_out_expand_title.innerText = 'Show More';
            play_list_out.classList.remove('active');
        }
    }

    const showMoreSub = () => {
        let subscription_out_expand_icon = document.querySelector('.subscription_out_expand_icon')
        let subscription_out_expand_title = document.querySelector('.subscription_out_expand_title')
        let subscription_out = document.querySelector('.subscription_out')

        if (subscription_out_expand_icon.innerText === 'expand_more') {
            subscription_out_expand_icon.innerText = 'expand_less';
            subscription_out_expand_title.innerText = 'Show less';
            subscription_out.classList.add('active');
        } else {
            subscription_out_expand_icon.innerText = 'expand_more';
            subscription_out_expand_title.innerText = 'Show More';
            subscription_out.classList.remove('active');
        }
    }

    useEffect(() => {
        const navigation_section_out = document.querySelector('.navigation_section_out')
        const navigation_section = document.querySelector('.navigation_section')

        window.addEventListener('resize', () => {
            setSize(window.innerWidth)
        })
        if (size >= 1132) {
            navigation_section.classList.add('active')
            navigation_section_out.classList.add('active')
            navigation_section_out.style.position = 'unset'
        } else if (size >= 790) {
            navigation_section_out.classList.add('active')
            navigation_section_out.classList.add('active')
            navigation_section.classList.remove('active')
            navigation_section_out.style.position = 'unset'
        } else {
            navigation_section_out.classList.remove('active')
        }
    }, [size])

    useEffect(() => {
        const navigation_data = document.querySelectorAll('.navigation_data')

        function active() {
            navigation_data.forEach((item) =>
                item.classList.remove('active'))
            this.classList.add('active')
        }
        navigation_data.forEach((items) =>
            items.addEventListener('click', active))
    }, [])

    return (
        <>
            <Grid className="navigation_section">
                <div className='navigation_icons_out flex column'>
                    <div className='navigation_icons active icon' title='Home'>
                        <span className="material-symbols-outlined">
                            home
                        </span>
                        <div className='navigation_icons_title'>Home</div>
                    </div>
                    <div className='navigation_icons icon' title='Explores'>
                        <span className="material-symbols-outlined">
                            explore
                        </span>
                        <div className='navigation_icons_title'>Explores</div>
                    </div>
                    <div className='navigation_icons icon' title='Shorts'>
                        <OfflineShare />
                        <div className='navigation_icons_title'>Shorts</div>
                    </div>
                    <div className='navigation_icons icon' title='Subscriptions'>
                        <span className="material-symbols-outlined">
                            subscriptions
                        </span>
                        <div className='navigation_icons_title'>Subscriptions</div>
                    </div>
                    <div className='navigation_icons icon' title='Library'>
                        <span className="material-symbols-outlined">
                            video_library
                        </span>
                        <div className='navigation_icons_title'>Library</div>
                    </div>
                </div>
                <div className='navigation_data_out flex column'>
                    <div className='navigation_data_out_section column'>
                        <div className='navigation_data active flex row icon' title='Home'>
                            <span className="material-symbols-outlined navigation_data_icons">
                                home
                            </span>
                            <span className='navigation_data_title'>Home</span>
                        </div>
                        <div className='navigation_data flex row icon' title='Explore'>
                            <span className="material-symbols-outlined navigation_data_icons">
                                explore
                            </span>
                            <span className='navigation_data_title'>Explore</span>
                        </div>
                        <div className='navigation_data flex row icon' title='Shorts'>
                            <OfflineShare className="material-symbols-outlined" />
                            <span className='navigation_data_title'>Shorts</span>
                        </div>
                        <div className='navigation_data flex row icon' title='Subscriptions'>
                            <span className="material-symbols-outlined navigation_data_icons">
                                subscriptions
                            </span>
                            <span className='navigation_data_title'>Subscriptions</span>
                        </div>
                    </div>
                    <div className='navigation_data_out_section play_list_out column'>
                        <div className='navigation_data flex row icon' title='Library'>
                            <span className="material-symbols-outlined navigation_data_icons">
                                video_library
                            </span>
                            <span className='navigation_data_title'>Library</span>
                        </div>
                        <div className='navigation_data flex row icon' title='History'>
                            <span className="material-symbols-outlined navigation_data_icons">
                                history
                            </span>
                            <span className='navigation_data_title'>History</span>
                        </div>
                        <div className='navigation_data flex row icon' title='Your videos'>
                            <span className="material-symbols-outlined navigation_data_icons">
                                slideshow
                            </span>
                            <span className='navigation_data_title'>Your videos</span>
                        </div>
                        <div className='navigation_data flex row icon' title='Watch later'>
                            <span className="material-symbols-outlined navigation_data_icons">
                                schedule
                            </span>
                            <span className='navigation_data_title'>Watch later</span>
                        </div>
                        <div className='navigation_data flex row icon' title='Your clips'>
                            <span className="material-symbols-outlined navigation_data_icons">
                                cut
                            </span>
                            <span className='navigation_data_title'>Your clips</span>
                        </div>
                        <div className='navigation_data flex row icon playlist_play' title='Play List 1'>
                            <span className="material-symbols-outlined navigation_data_icons">
                                playlist_play
                            </span>
                            <span className='navigation_data_title'>Play List 1</span>
                        </div>
                        <div className='navigation_data flex row icon playlist_play' title='Play List 2'>
                            <span className="material-symbols-outlined navigation_data_icons">
                                playlist_play
                            </span>
                            <span className='navigation_data_title'>Play List 2</span>
                        </div>
                        <div className='navigation_data flex row icon playlist_play' title='Play List 3'>
                            <span className="material-symbols-outlined navigation_data_icons">
                                playlist_play
                            </span>
                            <span className='navigation_data_title'>Play List 3</span>
                        </div>
                        <div className='flex row icon show_more' onClick={() => { showMore() }}>
                            <span className="material-symbols-outlined navigation_data_icons play_list_out_expand_icon">
                                expand_more
                            </span>
                            <span className='navigation_data_title play_list_out_expand_title'>Show more</span>
                        </div>
                    </div>

                    {/* =================== */}
                    <div className='navigation_lable_out flex ai-s'>
                        <div className='navigation_lable'>SUBSCRIPTIONS</div>
                    </div>

                    <div className='navigation_data_out_section subscription_out column'>
                        <div className='navigation_data flex row' title='Subscription 1'>
                            <div className='subscribe_image'>
                                <img
                                    src="https://d5nunyagcicgy.cloudfront.net/external_assets/hero_examples/hair_beach_v391182663/result.jpeg"
                                    alt=""
                                />
                            </div>
                            <span className='navigation_data_title'>Subscription 1</span>
                        </div>
                        <div className='navigation_data flex row' title='Subscription 2'>
                            <div className='subscribe_image'>
                                <img
                                    src="https://d5nunyagcicgy.cloudfront.net/external_assets/hero_examples/hair_beach_v391182663/result.jpeg"
                                    alt=""
                                />
                            </div>
                            <span className='navigation_data_title'>Subscription 2</span>
                        </div>
                        <div className='navigation_data flex row' title='Subscription 3'>
                            <div className='subscribe_image'>
                                <img
                                    src="https://d5nunyagcicgy.cloudfront.net/external_assets/hero_examples/hair_beach_v391182663/result.jpeg"
                                    alt=""
                                />
                            </div>
                            <span className='navigation_data_title'>Subscription 3</span>
                        </div>
                        <div className='navigation_data flex row' title='Subscription 4'>
                            <div className='subscribe_image'>
                                <img
                                    src="https://d5nunyagcicgy.cloudfront.net/external_assets/hero_examples/hair_beach_v391182663/result.jpeg"
                                    alt=""
                                />
                            </div>
                            <span className='navigation_data_title'>Subscription 4</span>
                        </div>
                        <div className='navigation_data flex row' title='Subscription 5'>
                            <div className='subscribe_image'>
                                <img
                                    src="https://d5nunyagcicgy.cloudfront.net/external_assets/hero_examples/hair_beach_v391182663/result.jpeg"
                                    alt=""
                                />
                            </div>
                            <span className='navigation_data_title'>Subscription 5</span>
                        </div>
                        <div className='navigation_data flex row subscribtions' title='Subscription 6'>
                            <div className='subscribe_image'>
                                <img
                                    src="https://d5nunyagcicgy.cloudfront.net/external_assets/hero_examples/hair_beach_v391182663/result.jpeg"
                                    alt=""
                                />
                            </div>
                            <span className='navigation_data_title'>Subscription 6</span>
                        </div>
                        <div className='navigation_data flex row subscribtions' title='Subscription 7'>
                            <div className='subscribe_image'>
                                <img
                                    src="https://d5nunyagcicgy.cloudfront.net/external_assets/hero_examples/hair_beach_v391182663/result.jpeg"
                                    alt=""
                                />
                            </div>
                            <span className='navigation_data_title'>Subscription 7</span>
                        </div>
                        <div className='navigation_data flex row subscribtions' title='Subscription 8'>
                            <div className='subscribe_image'>
                                <img
                                    src="https://d5nunyagcicgy.cloudfront.net/external_assets/hero_examples/hair_beach_v391182663/result.jpeg"
                                    alt=""
                                />
                            </div>
                            <span className='navigation_data_title'>Subscription 8</span>
                        </div>
                        <div className='flex row icon show_more' onClick={() => { showMoreSub() }}>
                            <span className="material-symbols-outlined navigation_data_icons subscription_out_expand_icon">
                                expand_more
                            </span>
                            <span className='navigation_data_title subscription_out_expand_title'>Show more</span>
                        </div>
                    </div>
                </div>
            </Grid>
        </>
    );
}

export default NavigationMenu