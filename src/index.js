import * as ReactDOM from 'react-dom'
import Finder from './Finder/Finder'
import Header from './Header/Header'
import data1 from './data1'
import './index.css'
import Result from './Results/Result'

function App() {
    console.log(data1)
    const Info = data1.map(index => {
        return <Result
            key={index.key}
            index={index}
        />
    })
    return (
        <div>
            <Header />
            <div className='bi--direction'>
                <Finder />
                <div className='list--type'>
                {Info}
                </div>
            </div>
        </div>
    )
}

ReactDOM.render(<App />, document.querySelector("#root"))