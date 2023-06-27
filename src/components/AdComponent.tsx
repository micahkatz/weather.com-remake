import React from 'react'

import styles from '../styles/AdComponent.module.scss'
import Image from 'next/image';
import { isMobile, isSafari, deviceDetect, BrowserTypes, browserVersion, browserName } from 'react-device-detect';
import Link from 'next/link';
type Props = {
    kind: AdKind;
    className?: string
    containerClassName?: string
    width?: number;
    height?: number;
    showText?: boolean
}
const AdComponent = (props: Props) => {
    const { width, height } = React.useMemo(() => {
        if (props.kind === "banner") {
            return { width: 250, height: 600 }
        } else if (props.kind === 'vertical') {
            return { width: 600, height: 250 }
        } else {
            return { width: 250, height: 600 }
        }
    }, [props.kind])

    const [browserName, setBrowserName] = React.useState<string>()
    React.useEffect(() => {
        const userAgent = navigator.userAgent;
        let browserName = 'none';
        if (userAgent.match(/chrome|chromium|crios/i)) {
            browserName = "Chrome";
        } else if (userAgent.match(/firefox|fxios/i)) {
            browserName = "Firefox";
        } else if (userAgent.match(/safari/i)) {
            browserName = "Safari";
        } else if (userAgent.match(/opr\//i)) {
            browserName = "Opera";
        } else if (userAgent.match(/edg/i)) {
            browserName = "Edge";
        } else {
            browserName = "none";
        }
        setBrowserName(browserName)
    }, [])

    if (!browserName) {
        return <div className={`${styles.bannerAd || ''} relative ${props.containerClassName ? ' ' + props.containerClassName : ''}`}>Loading</div>
    }

    return (
        <Link href='/ad' className={`${styles.bannerAd || ''} relative ${props.containerClassName ? ' ' + props.containerClassName : ''}`}>
            {props.showText && <span className='text-gray-500'>Advertisement</span>}
            <Image src={`/api/ad?width=${width}&height=${height}&kind=${props.kind}&isMobile=${isMobile ? 'true' : 'false'}&browserName=${browserName}`} alt='ad' className={`${styles.bannerAdImg || ''}${props.className ? ' ' + props.className : ''}`} fill />
        </Link>
    )
}

export default AdComponent