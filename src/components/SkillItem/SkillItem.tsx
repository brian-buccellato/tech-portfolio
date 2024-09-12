import Avatar from '@mui/material/Avatar';
import { Skill } from '../../types/Skill';

import { ListItem, ListItemAvatar, ListItemText } from '@mui/material';

export default function SkillItem(skill: Skill) {
  return (

    <ListItem>
      <>
        <ListItemAvatar>
          <Avatar src={skill.icon} sx={{ width: '32px', height: '32px' }} />
        </ListItemAvatar>
        <ListItemText>{skill.name}</ListItemText>
      </>
    </ListItem>
  );
}
