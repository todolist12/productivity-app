import React, { useContext, useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { AuthContext } from './AuthProvider';

export const PlanContext = React.createContext()

const PlanProvider = ({ children }) => {
    const { planId } = useParams();
    const { currentUser, loading } = useContext(AuthContext)
    const [plan, setPlan] = useState((currentUser && currentUser.plans[planId]));
    const [planLoading, setPlanLoading] = useState((currentUser.plans[planId] !== undefined));

    useEffect(() => {
        if(!loading) {
            if(currentUser && currentUser.plans && currentUser.plans[planId]) {
                setPlan(currentUser.plans[planId])
                setPlanLoading(false);
            }
        }
        console.log('fetchint data')
    }, [currentUser, planId])

    return (
        <PlanContext.Provider className = 'w-full h-full' value = {{plan, setPlan, planLoading}}>
            {children}
        </PlanContext.Provider>
    )
}

export default PlanProvider