import React from 'react'
import Skeleton from 'react-loading-skeleton'

const CardSkeleton = () => {
    return (
        <>
            <div className="single-list">
                <div className="card">
                    <Skeleton height={286} />
                    <div className="card-body">
                        <h5 className="card-title"><Skeleton height={42} /></h5>
                        <p className="card-text"><Skeleton /></p>
                        <p className="card-text"><Skeleton /></p>
                        <p className="card-text"><Skeleton /></p>
                        <Skeleton width={116} height={42} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default CardSkeleton;