import Image from 'next/image'
import React from 'react'
import styles from '../styles/Header.module.scss'
import Link from 'next/link'
import TemperatureComponent from './TemperatureComponent'

const Header = () => {
    return (
        <div>
            <div className={styles.headerTop}>
                <div className={styles.logoAndText}>
                    <Image src='weather-channel-logo.svg' alt='weather channel logo' className={styles.logo} width={60} height={60} />
                    <h1>An <strong>IBM</strong> Business</h1>
                </div>
                <div className={styles['input-wrapper']}>
                    <input placeholder='Search City or Zip Code' />
                    <Image src='search.svg' alt='search' className={styles.searchIcon} width={24} height={24} />
                </div>
                <div className={styles.headerRightButtons}>
                    <Image src='globe.svg' alt='globe' className={'icon'} width={24} height={24} />
                    <span className='ml-1 mr-4'>US | ºF</span>
                    <Image src='person.svg' alt='person' className={'icon'} width={24} height={24} />
                </div>
            </div>
            <div className={styles.localWeather}>
                <div className={styles.weatherCard}>
                    <TemperatureComponent location='Miami, FL' />
                </div>
                <div className={styles.weatherCard}>
                    <TemperatureComponent location='Dallas, TX' />
                </div>
                <div />
            </div>
            <div className={styles.weatherSelector}>
                <div className={styles.wrappedNav}>
                    <Link href='/'>Today</Link>
                    <Link href='/'>Hourly</Link>
                    <Link href='/'>10 Day</Link>
                    <Link href='/'>Weekend</Link>
                    <Link href='/'>Monthly</Link>
                    <Link href='/'>Radar</Link>
                    <Link href='/'>Storms</Link>
                </div>
                <Link href='/' className={styles.moreForecasts}>
                    <span>
                        More Forecasts
                    </span>
                    <Image src='/arrow-down.svg' className={styles.downArrow} alt='arrow-down' height={15} width={15} />
                </Link>
            </div>
        </div>
    )
}

export default Header