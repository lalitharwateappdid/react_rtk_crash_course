
// rtk query
import { useGetCoinDetailsQuery } from "../app/Crypto/CryptoApi"

// react router dom
import { useParams } from "react-router-dom"

// components
import { LoaderComponent } from "../components/LoaderComponent";

export const CryptoDetails = () => {

    let coin = null
    const {coinId} = useParams()
    // console.log(coinId)
    const {data,error,isLoading} = useGetCoinDetailsQuery(coinId)
    
    if(data &&  data.data && data.data.coin){
         coin = data.data.coin
    }
    // console.log(data?.data?.coin)


    if(isLoading) return (<>
    <LoaderComponent/>
    </>)

    return (
        <>
        <h1>Crypto UUID: {coin?.uuid}</h1>
        <h1>Crypto Name: {coin?.name}</h1>
        </>
    )
}