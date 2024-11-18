import React, { FC, useEffect, useState } from 'react';
import { fetchJobs } from '../services/api';
import { Job } from '../types/job';
import JobItem from './JobItem';
import { Container, Typography, Box } from '@mui/material';


const JobList: FC = () => {
  const [jobs, setJobs] = useState<Job[]>([]);

  useEffect(() => {
    const loadJobs = async () => {
      const data = await fetchJobs();
      setJobs(data);
    };
    loadJobs();
  }, []);

  return (
    <Container maxWidth="md">
      <Typography variant="h4" gutterBottom>
        Job List
      </Typography>
      <Box display="flex" flexDirection="column" gap={2}>
        {jobs.map(job => (
          <JobItem key={job.id} job={job} />
        ))}
      </Box>
    </Container>
  );
};

export default JobList;
