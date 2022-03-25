import { useEffect, useState } from 'react';
import 'react-loading-skeleton/dist/skeleton.css'
import CardSkeleton from './CardSkeleton';

const Cards = () => {

    const [users, setUsers] = useState([]);
    const [isloading, setIsLoading] = useState(true);

    const getUsers = async () => {
        const response = await fetch('https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=6b889807f1e34bff88c9159e948ed6fb');
        const data = await response.json();
        setUsers(data.articles);
        setIsLoading(false);
    }


    useEffect(() => {

        
            getUsers();
            
        

    }, []);



    return (
        <>
            <div className="card-section">
                <div className="container">
                    <h2>Data</h2>
                    <div className="row">
                        {
                            isloading
                                ?
                                <>
                                    <CardSkeleton /><CardSkeleton /><CardSkeleton /><CardSkeleton /><CardSkeleton /><CardSkeleton /><CardSkeleton /><CardSkeleton /><CardSkeleton /><CardSkeleton /><CardSkeleton /><CardSkeleton />
                                </>
                                :
                                users.map((e) =>
                                    <div className="single-list">
                                        <div className="card">
                                            <img src={e.urlToImage} className="card-img-top" alt="..." />
                                            <div className="card-body">
                                                <h5 className="card-title">{e.title}</h5>
                                                <p className="card-text">{e.description}</p>
                                                <a href={e.url} className="btn btn-primary">Read More</a>
                                            </div>
                                        </div>
                                    </div>
                                )
                        }

                    </div>
                </div>
            </div>
        </>
    )
}

export default Cards