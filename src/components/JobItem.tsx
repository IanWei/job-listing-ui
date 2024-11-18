import React, { FC } from 'react';
import ListSubItem from './ListSubItem';
import { Job } from '../types/job';
import { Card, CardContent, Typography, Box, Divider } from '@mui/material';

interface JobItemProps {
  job: Job;
}

const JobItem: FC<JobItemProps> = ({job}) => {
  return (
    <Card variant="outlined">
      <CardContent>
        <Typography variant="h5" component="div" gutterBottom>
          {job.title}
        </Typography>
        <Typography variant="body1" color="textSecondary" gutterBottom>
          {job.description}
        </Typography>
        <Divider />
        <Typography variant="subtitle1" sx={{ marginTop: 2 }}>
          Sub-Items:
        </Typography>
        <Box display="flex" flexDirection="column" gap={1}>
          {job.subItems.map(subItem => (
            <ListSubItem key={subItem.id} subItem={subItem} />
          ))}
        </Box>
      </CardContent>
    </Card>
  );
};

export default JobItem;
