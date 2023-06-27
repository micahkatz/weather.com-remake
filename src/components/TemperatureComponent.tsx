import axios, { type AxiosResponse } from 'axios'
import React from 'react'

type Props = {
    location: string
}

const TemperatureComponent = (props: Props) => {
    const [currTemp, setCurrTemp] = React.useState<number>()
    const [currIcon, setCurrIcon] = React.useState<Icon>()
    React.useEffect(() => {
        axios.get('/api/weather', { params: { location: props.location } }).then((weatherResponse: AxiosResponse<WeatherData>) => {
            console.log({ weatherResponse })
            setCurrTemp(weatherResponse.data.currentConditions.temp)
        }).catch((err) => console.error(err))
    }, [props.location])

    const renderedIcon = React.useMemo(() => {
        if (currIcon) {
            switch (currIcon) {
                case Icon.ClearDay:
                    return <span>☀️</span>
                case Icon.PartlyCloudyDay:
                    return <span>⛅️</span>
                case Icon.Snow:
                    return <span>🌨️</span>
                case Icon.Rain:
                    return <span>🌧️</span>
                case Icon.Fog:
                    return <span>🌫️</span>
                case Icon.Wind:
                    return <span>☁️</span>
                case Icon.PartlyCloudyNight:
                case Icon.ClearNight:
                    return <span>🌠</span>
                case Icon.ClearDay:
                    return <span>🏙️</span>
            }
        }
        return <span>☀️</span>
    }, [currIcon])

    return (
        <span>{renderedIcon} {currTemp}º {props.location}</span>
    )
}

export default TemperatureComponent