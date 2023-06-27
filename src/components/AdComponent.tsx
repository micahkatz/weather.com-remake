import React from 'react'

import styles from '../styles/AdComponent.module.scss'
import Image from 'next/image';
import { isMobile, browserName } from 'react-device-detect';
type Props = {
    kind: 'banner' | 'vertical-banner';
    className?: string
    containerClassName?: string
    width?: number;
    height?: number;
}
const AdComponent = (props: Props) => {
    const adStyle = props.kind === 'banner' ? styles.bannerAd : styles.verticalBannerAd
    const { width, height } = React.useMemo(() => {
        if (props.kind === "banner") {
            return { width: 250, height: 600 }
        } else if (props.kind === 'vertical-banner') {
            return { width: 600, height: 250 }
        } else {
            return { width: 600, height: 600 }
        }
    }, [props.kind])


    // let width, height
    // if (props.kind === "banner") {
    //     width = 250
    //     height = 600
    // } else if (props.kind === 'vertical-banner') {
    //     width = 600
    //     height = 250
    // }
    // const { width, height } = props

    return (
        <div className={`${adStyle || ''} relative${props.containerClassName ? ' ' + props.containerClassName : ''}`}>
            <Image src={width && height ? `/api/ad?width=${width}&height=${height}&isMobile=${isMobile ? 'true' : 'false'}&browserName=${browserName}` : '/api/ad'} alt='ad' className={`${adStyle || ''}${props.className ? ' ' + props.className : ''}`} fill />
            <div className={styles.adLabel}>
                <span>Ad</span>
            </div>
        </div>
    )
}

export default AdComponent