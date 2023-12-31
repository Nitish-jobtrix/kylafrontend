import { Typography } from '@mui/material'
import { Box } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'
import CardElement from '../../component/CardElement'


const UserJobsHistory = () => {
    const { companyUser } = useSelector(state => state.companyUserProfile);
    return (
        <>
            <Box>
                <Typography variant="h4" sx={{ color: "black" }}> Jobs History</Typography>
                <Box>
                    {
                        companyUser && companyUser.jobsHistory.map((history, i) => (
                            <CardElement
                                key={i}
                                id={history._id}
                                jobTitle={history.title}
                                description={history.description}
                                category=''
                                location={history.location}
                            />
                        ))
                    }
                </Box>
            </Box>
        </>
    )
}

export default UserJobsHistory