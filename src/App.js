import React,{useEffect, useState} from 'react'
import alanButton from '@alan-ai/alan-sdk-web'
import News from './components/News/News'
import wordsToNumbers from 'words-to-numbers'

// const alanKey='20ecb0a861be326810bb74af6f5b3c9f2e956eca572e1d8b807a3e2338fdd0dc/stage'

const App = () => {

    const [news,setNews]=useState([])
    const [activeArticle,setActiveArticle]=useState(-1);

    useEffect(()=>{
        alanButton({
            key:process.env.REACT_APP_KEY,
            onCommand:({command,news,number})=>{
                if(command === 'news'){
                    // alert('Command executed')
                    setNews(news)
                    setActiveArticle(-1)
                }else if(command === 'highlight'){
                    setActiveArticle(prev => prev+1)
                }else if(command === 'open'){
                    const convertedNumber=wordsToNumbers(number,{
                        fuzzy:true
                    })
                    const article=news[convertedNumber-1]
                    if(convertedNumber>20){
                        alanButton().playText('Please try again!!!')
                    }else{
                        window.open(article.url,'_blank')
                        alanButton().playText(`Opening the article number ${convertedNumber}`)
                    }
                }
            },

        })
    },[])

    return (
        <div>
            <h1 style={{textAlign:'center',fontFamily:'sans-serif'}}>SCOOP NEWS</h1>
            <News news={news} activeArticle={activeArticle} />
        </div>
    )
}


export default App
