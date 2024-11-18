import React, { FC } from 'react';
import { SubItem } from '../types/job';
import { Card, CardContent, Typography, Chip } from '@mui/material';

interface SubItemProps {
  subItem: SubItem;
}

const ListSubItem: FC<SubItemProps> = ({subItem}) => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Completed':
        return 'success';
      case 'In Progress':
        return 'warning';
      case 'Pending':
        return 'error';
      default:
        return 'error';
    }
  };

  return (
    <Card variant="outlined" sx={{ backgroundColor: '#f9f9f9' }}>
      <CardContent>
        <Typography variant="h6">{subItem.title}</Typography>
        <Typography variant="body2" color="textSecondary">
          {subItem.description}
        </Typography>
        <Chip
          label={subItem.status}
          color={getStatusColor(subItem.status)}
          size="small"
          sx={{ marginTop: 1 }}
        />
      </CardContent>
    </Card>
  );
};

export default ListSubItem;
