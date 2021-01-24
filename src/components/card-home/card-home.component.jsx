import React from 'react';


const CardHome = () => (
    <div className="card" style={{width: '20rem'}}>
        <img className="card-img-top" src="https://www.lessonly.com/wp-content/uploads/2020/12/Lessonly-Q42020-GoldenRuleofSales-BlogPost-Yellow.jpg" alt="Card image cap"/>
        <div className="card-body">
            <h5 className="card-title font-family--proxima-nova"><strong>Card title</strong></h5>
            <p className="card-text font-family--proxima-nova">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <div className="text-right">
                <a href="#" className="btn color-blue-283295 text-white">Go somewhere</a>
            </div>
        </div>
    </div>
)

export default CardHome;