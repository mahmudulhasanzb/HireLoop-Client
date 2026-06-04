import React from 'react'
import { getCompanyJobs } from '@/lib/api/jobs'

const RecruiterJobs = async () => {
  const companyId = 'company_123' // todo
  const jobs = await getCompanyJobs(companyId)
  return (
    <div>Recruiter/Company Jobs List</div>
  )
}

export default RecruiterJobs
