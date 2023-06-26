import React from 'react'

import styles from '../styles/AdComponent.module.scss'
type Props = {
    kind: 'banner' | 'vertical-banner';
    className?: string
}
const AdComponent = (props: Props) => {
    const adStyle = props.kind === 'banner' ? styles.bannerAd : styles.verticalBannerAd
    return (
        <div className={`${adStyle || ''}${props.className ? ' ' + props.className : ''}`}>AdComponent</div>
    )
}

export default AdComponent